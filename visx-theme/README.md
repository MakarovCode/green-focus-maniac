# Green Focus Maniac VISX Theme

Paquete de colores del tema **Green Focus Maniac** de VS Code, optimizado para visualizaciones con [VISX](https://airbnb.io/visx/).

## Instalación

```bash
npm install @green-focus-maniac/visx-theme
```

o con yarn:

```bash
yarn add @green-focus-maniac/visx-theme
```

## Uso

### Importar el tema completo

```typescript
import { greenFocusManiacTheme } from '@green-focus-maniac/visx-theme';

// Usar colores directamente
<Bar data={data} fill={greenFocusManiacTheme.primary} />
```

### Usar configuración predefinida para VISX

```typescript
import { visxTheme } from '@green-focus-maniac/visx-theme';

// Usar estilos predefinidos
<BarChart 
  data={data}
  colors={visxTheme.colors}
  axisStyles={visxTheme.axisStyles}
/>
```

### Ejemplo completo con VISX

```typescript
import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear } from '@visx/scale';
import { greenFocusManiacTheme, visxTheme } from '@green-focus-maniac/visx-theme';

const data = [
  { x: 'A', y: 10 },
  { x: 'B', y: 20 },
  { x: 'C', y: 30 },
];

function MyChart() {
  const width = 400;
  const height = 300;
  
  const xScale = scaleBand({
    domain: data.map(d => d.x),
    range: [0, width],
    padding: 0.2,
  });
  
  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.y))],
    range: [height, 0],
  });
  
  return (
    <svg width={width} height={height} style={{ background: visxTheme.background }}>
      <Group>
        {data.map((d, i) => (
          <Bar
            key={d.x}
            x={xScale(d.x)}
            y={yScale(d.y)}
            width={xScale.bandwidth()}
            height={height - yScale(d.y)}
            fill={visxTheme.colors[i % visxTheme.colors.length]}
          />
        ))}
      </Group>
      <AxisBottom
        top={height}
        scale={xScale}
        stroke={visxTheme.axisStyles.stroke}
        tickStroke={visxTheme.axisStyles.tickStroke}
        tickLabelFill={visxTheme.axisStyles.tickLabelFill}
      />
      <AxisLeft
        scale={yScale}
        stroke={visxTheme.axisStyles.stroke}
        tickStroke={visxTheme.axisStyles.tickStroke}
        tickLabelFill={visxTheme.axisStyles.tickLabelFill}
      />
    </svg>
  );
}
```

### Usar utilidades de color

```typescript
import { 
  getCategoricalColor, 
  getSequentialColor,
  hexToRgba,
  lighten,
  darken 
} from '@green-focus-maniac/visx-theme/utils';

// Obtener color categórico por índice
const color1 = getCategoricalColor(0); // '#11c700'

// Obtener color secuencial por valor (0-1)
const color2 = getSequentialColor(0.5); // Color intermedio

// Convertir a RGBA
const rgba = hexToRgba('#11c700', 0.5); // 'rgba(17, 199, 0, 0.5)'

// Aclarar color
const lighter = lighten('#11c700', 20); // Color 20% más claro

// Oscurecer color
const darker = darken('#11c700', 20); // Color 20% más oscuro
```

## Estructura del Tema

### Colores Principales

- `primary`: Verde principal (#11c700)
- `primaryBright`: Verde brillante (#15ff00)
- `primaryDark`: Verde oscuro (#0da100)
- `primaryLight`: Verde claro (#92ff88)
- `primaryVeryLight`: Verde muy claro (#eeffe3)

### Paletas de Colores

- `colors.categorical`: Array de 8 colores para datos categóricos
- `colors.sequential`: Escala de 6 colores de oscuro a claro
- `colors.divergent`: Escala divergente de 5 colores

### Colores Semánticos

- `semantic.success`: Verde (#11c700)
- `semantic.warning`: Amarillo (#cca700)
- `semantic.error`: Rojo (#f44747)
- `semantic.info`: Azul (#75beff)

### Colores de Sintaxis

El tema incluye colores específicos para diferentes elementos de código:
- `syntax.functions`: Funciones
- `syntax.variables`: Variables
- `syntax.strings`: Cadenas de texto
- `syntax.keywords`: Palabras clave
- `syntax.operators`: Operadores
- Y más...

## Configuración VISX

El objeto `visxTheme` incluye configuraciones predefinidas para:

- **axisStyles**: Estilos para ejes (stroke, labels, etc.)
- **gridStyles**: Estilos para grid
- **tooltipStyles**: Estilos para tooltips
- **areaStyles**: Estilos para gráficos de área
- **lineStyles**: Estilos para líneas
- **barStyles**: Estilos para barras
- **pointStyles**: Estilos para puntos
- **textStyles**: Estilos para texto

## Licencia

MIT

## Enlaces

- [Tema VS Code original](https://github.com/MakarovCode/green-focus-maniac)
- [VISX Documentation](https://airbnb.io/visx/)

