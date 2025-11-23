/**
 * Configuración específica para VISX
 * 
 * Estilos y configuraciones predefinidas para usar con componentes VISX
 */

import { greenFocusManiacTheme } from './index';

export const visxTheme = {
  // Colores para gráficos de barras, líneas, áreas, etc.
  colors: greenFocusManiacTheme.colors.categorical,
  
  // Configuración de ejes
  axisStyles: {
    stroke: greenFocusManiacTheme.primary,
    strokeWidth: 1,
    tickStroke: greenFocusManiacTheme.primary,
    tickLabelFill: greenFocusManiacTheme.foreground,
    labelFill: greenFocusManiacTheme.foreground,
    labelFontSize: 12,
    tickLabelFontSize: 11,
    labelFontWeight: 500,
  },
  
  // Configuración de grid
  gridStyles: {
    stroke: greenFocusManiacTheme.primary + '30', // Con transparencia
    strokeWidth: 1,
    strokeDasharray: '3,3',
  },
  
  // Configuración de tooltip
  tooltipStyles: {
    backgroundColor: greenFocusManiacTheme.background,
    borderColor: greenFocusManiacTheme.primary,
    borderWidth: 1,
    color: greenFocusManiacTheme.foreground,
    fontSize: 12,
    padding: 8,
    borderRadius: 4,
  },
  
  // Configuración de leyenda
  legendStyles: {
    labelFill: greenFocusManiacTheme.foreground,
    labelFontSize: 12,
  },
  
  // Configuración de área (para gráficos de área)
  areaStyles: {
    fill: greenFocusManiacTheme.primary,
    fillOpacity: 0.3,
    stroke: greenFocusManiacTheme.primary,
    strokeWidth: 2,
  },
  
  // Configuración de línea
  lineStyles: {
    stroke: greenFocusManiacTheme.primary,
    strokeWidth: 2,
  },
  
  // Configuración de barra
  barStyles: {
    fill: greenFocusManiacTheme.primary,
    fillOpacity: 0.8,
  },
  
  // Configuración de punto (scatter plots)
  pointStyles: {
    fill: greenFocusManiacTheme.primary,
    stroke: greenFocusManiacTheme.background,
    strokeWidth: 1,
    radius: 4,
  },
  
  // Configuración de texto
  textStyles: {
    fill: greenFocusManiacTheme.foreground,
    fontSize: 12,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  
  // Configuración de fondo
  background: greenFocusManiacTheme.background,
  
  // Margen por defecto
  margin: {
    top: 20,
    right: 20,
    bottom: 40,
    left: 40,
  },
} as const;

export default visxTheme;

