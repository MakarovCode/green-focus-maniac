# Guía para crear el archivo VSIX

## ¿Qué es un VSIX?

Un archivo VSIX es el paquete de extensión de Visual Studio Code. Es un archivo comprimido (similar a un ZIP) que contiene todos los archivos necesarios para instalar y distribuir tu extensión.

## Crear el VSIX

### Método 1: Usando npm scripts (Recomendado)

```bash
npm run package
```

Este comando creará el archivo `green-focus-maniac-0.0.4.vsix` en el directorio raíz.

### Método 2: Usando vsce directamente

```bash
npx vsce package
```

### Opciones adicionales

Puedes incrementar la versión automáticamente al crear el VSIX:

```bash
# Incrementar versión mayor (1.0.0 -> 2.0.0)
npm run package:major

# Incrementar versión menor (0.0.4 -> 0.1.0)
npm run package:minor

# Incrementar versión patch (0.0.4 -> 0.0.5)
npm run package:patch
```

## Instalar el VSIX localmente

Para instalar el VSIX en tu VS Code:

1. Abre VS Code
2. Ve a la pestaña de Extensiones (Ctrl+Shift+X)
3. Haz clic en los tres puntos (⋯) en la parte superior
4. Selecciona "Install from VSIX..."
5. Navega al archivo `.vsix` y selecciónalo

O desde la línea de comandos:

```bash
code --install-extension green-focus-maniac-0.0.4.vsix
```

## Publicar en el Marketplace

Para publicar la extensión en el Visual Studio Code Marketplace:

```bash
npm run publish
```

**Nota:** Necesitarás un token de acceso personal (PAT) de Azure DevOps. Puedes obtenerlo en:
https://dev.azure.com/

### Configurar el token

```bash
vsce login <publisher-name>
```

O usar una variable de entorno:

```bash
export VSCE_PAT=your_personal_access_token
```

## Archivos incluidos en el VSIX

El archivo VSIX incluye:
- `package.json` - Manifest de la extensión
- `themes/Green Focus Maniac-color-theme.json` - Archivo del tema
- `img/` - Imágenes e iconos
- `README.md` - Documentación
- `CHANGELOG.md` - Historial de cambios

Los archivos excluidos (definidos en `.vscodeignore`):
- `node_modules/`
- `.vscode/`
- `visx-theme/`
- Archivos de desarrollo

## Solución de problemas

### Error: "LICENSE not found"
Si ves una advertencia sobre LICENSE, puedes crear un archivo `LICENSE` o `LICENSE.md` con tu licencia (MIT en este caso).

### Error: "Missing publisher"
Asegúrate de que el campo `publisher` en `package.json` esté configurado correctamente.

### Error: "Invalid extension manifest"
Verifica que tu `package.json` tenga todos los campos requeridos:
- `name`
- `version`
- `publisher`
- `engines.vscode`
- `contributes.themes`

## Recursos

- [Documentación oficial de VS Code Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce CLI Documentation](https://github.com/microsoft/vscode-vsce)

