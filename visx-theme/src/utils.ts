/**
 * Utilidades para trabajar con el tema Green Focus Maniac
 */

import { greenFocusManiacTheme } from './index';

/**
 * Convierte un color hexadecimal a RGBA
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Aclara un color hexadecimal
 */
export function lighten(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, (num >> 16) + amt);
  const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
  const B = Math.min(255, (num & 0x0000FF) + amt);
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

/**
 * Oscurece un color hexadecimal
 */
export function darken(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, (num >> 16) - amt);
  const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
  const B = Math.max(0, (num & 0x0000FF) - amt);
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

/**
 * Obtiene un color de la paleta categórica por índice
 */
export function getCategoricalColor(index: number): string {
  const colors = greenFocusManiacTheme.colors.categorical;
  return colors[index % colors.length];
}

/**
 * Obtiene un color de la paleta secuencial por índice (0-1)
 */
export function getSequentialColor(value: number): string {
  const colors = greenFocusManiacTheme.colors.sequential;
  const index = Math.floor(value * (colors.length - 1));
  return colors[index];
}

/**
 * Crea una escala de colores personalizada
 */
export function createColorScale(
  colors: string[],
  domain: [number, number] = [0, 1]
): (value: number) => string {
  return (value: number) => {
    const normalized = (value - domain[0]) / (domain[1] - domain[0]);
    const index = Math.floor(normalized * (colors.length - 1));
    return colors[Math.max(0, Math.min(colors.length - 1, index))];
  };
}

