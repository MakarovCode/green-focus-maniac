/**
 * Ejemplo de uso del tema Green Focus Maniac con VISX
 * 
 * Este es un ejemplo de referencia. Para usar este ejemplo,
 * necesitarás instalar las dependencias de VISX:
 * 
 * npm install @visx/shape @visx/group @visx/axis @visx/scale
 */

import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear } from '@visx/scale';
import { greenFocusManiacTheme, visxTheme, getCategoricalColor } from './src';

const data = [
  { x: 'A', y: 10 },
  { x: 'B', y: 20 },
  { x: 'C', y: 30 },
  { x: 'D', y: 25 },
  { x: 'E', y: 15 },
];

export function ExampleChart() {
  const width = 500;
  const height = 400;
  const margin = visxTheme.margin;
  
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  
  const xScale = scaleBand({
    domain: data.map(d => d.x),
    range: [0, xMax],
    padding: 0.2,
  });
  
  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.y))],
    range: [yMax, 0],
  });
  
  return (
    <svg width={width} height={height} style={{ background: visxTheme.background }}>
      <Group left={margin.left} top={margin.top}>
        {/* Barras */}
        {data.map((d, i) => (
          <Bar
            key={d.x}
            x={xScale(d.x)}
            y={yScale(d.y)}
            width={xScale.bandwidth()}
            height={yMax - yScale(d.y)}
            fill={getCategoricalColor(i)}
            fillOpacity={0.8}
          />
        ))}
        
        {/* Eje X */}
        <AxisBottom
          top={yMax}
          scale={xScale}
          stroke={visxTheme.axisStyles.stroke}
          tickStroke={visxTheme.axisStyles.tickStroke}
          tickLabelFill={visxTheme.axisStyles.tickLabelFill}
          tickLabelFontSize={visxTheme.axisStyles.tickLabelFontSize}
        />
        
        {/* Eje Y */}
        <AxisLeft
          scale={yScale}
          stroke={visxTheme.axisStyles.stroke}
          tickStroke={visxTheme.axisStyles.tickStroke}
          tickLabelFill={visxTheme.axisStyles.tickLabelFill}
          tickLabelFontSize={visxTheme.axisStyles.tickLabelFontSize}
        />
      </Group>
    </svg>
  );
}

