/**
 * Green Focus Maniac Theme Colors for VISX
 * 
 * Colores extraídos del tema de VS Code "Green Focus Maniac"
 * Optimizados para visualizaciones con VISX
 */

// Colores principales del tema
export const greenFocusManiacTheme = {
  // Colores primarios (verde)
  primary: '#11c700',
  primaryBright: '#15ff00',
  primaryDark: '#0da100',
  primaryLight: '#92ff88',
  primaryVeryLight: '#eeffe3',
  
  // Colores de fondo y texto
  background: '#000000',
  foreground: '#ffffff',
  foregroundMuted: '#6a6d6a',
  
  // Colores de sintaxis del editor
  syntax: {
    functions: '#92ff88',
    variables: '#0da100',
    strings: '#eeffe3',
    keywords: '#7f848e',
    operators: '#d670d6',
    comments: '#5e9d5f62',
    types: '#15ff00',
    constants: '#0da100',
    punctuation: '#15ff00',
    classes: '#15ff00',
    namespaces: '#15ff00',
  },
  
  // Colores semánticos
  semantic: {
    success: '#11c700',
    warning: '#cca700',
    error: '#f44747',
    info: '#75beff',
    errorAlt: '#d670d6',
  },
  
  // Colores para visualizaciones VISX - Categóricos
  colors: {
    categorical: [
      '#11c700',  // Verde principal
      '#15ff00',  // Verde brillante
      '#92ff88',  // Verde claro
      '#d670d6',  // Magenta
      '#eeffe3',  // Verde muy claro
      '#7f848e',  // Gris
      '#75beff',  // Azul
      '#cca700',  // Amarillo
    ],
    
    // Escala secuencial (de oscuro a claro)
    sequential: [
      '#000000',  // Negro
      '#0da100',  // Verde oscuro
      '#11c700',  // Verde principal
      '#15ff00',  // Verde brillante
      '#92ff88',  // Verde claro
      '#eeffe3',  // Verde muy claro
    ],
    
    // Escala divergente
    divergent: [
      '#d670d6',  // Magenta (negativo)
      '#7f848e',  // Gris (neutro)
      '#0da100',  // Verde oscuro
      '#11c700',  // Verde principal
      '#15ff00',  // Verde brillante
    ],
  },
  
  // Colores del terminal ANSI (útil para visualizaciones)
  terminal: {
    black: '#000000',
    red: '#cd3131',
    green: '#15ff00',
    yellow: '#e5e510',
    blue: '#2472c8',
    magenta: '#bc3fbc',
    cyan: '#11a8cd',
    white: '#e5e5e5',
    brightBlack: '#666666',
    brightRed: '#f14c4c',
    brightGreen: '#0da100',
    brightYellow: '#f5f543',
    brightBlue: '#3b8eea',
    brightMagenta: '#d670d6',
    brightCyan: '#29b8db',
    brightWhite: '#e5e5e5',
  },
  
  // Colores de Git (útil para visualizaciones de cambios)
  git: {
    added: '#81b88b',
    modified: '#e2c08d',
    deleted: '#c74e39',
    untracked: '#73c991',
    conflicting: '#6c6cc4',
    ignored: '#8c8c8c',
  },
} as const;

// Exportar utilidades
export * from './utils';

// Exportar configuración VISX
export { visxTheme } from './visx-config';

// Exportar por defecto
export default greenFocusManiacTheme;

