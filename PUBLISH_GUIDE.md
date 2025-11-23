# Guía para Publicar la Extensión en el Marketplace

El error `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` generalmente indica un problema de autenticación. El servidor está devolviendo HTML en lugar de JSON.

## Solución: Configurar el Personal Access Token (PAT)

### Paso 1: Crear un Personal Access Token en Azure DevOps

1. Ve a: https://dev.azure.com/
2. Inicia sesión con tu cuenta de Microsoft (la misma que usarás para el marketplace)
3. Haz clic en tu avatar (esquina superior derecha) → **Personal access tokens**
4. Haz clic en **+ New Token**
5. Configura el token:
   - **Name**: `vsce-publish-token` (o el nombre que prefieras)
   - **Organization**: Selecciona tu organización o "All accessible organizations"
   - **Expiration**: Elige una fecha de expiración (recomendado: 1 año o más)
   - **Scopes**: 
     - ✅ Marca **Custom defined**
     - ✅ En **Code**, selecciona **Read & write**
     - ✅ En **Packaging**, selecciona **Read & write**
6. Haz clic en **Create**
7. **IMPORTANTE**: Copia el token inmediatamente, solo se muestra una vez.

### Paso 2: Autenticarse con vsce

Tienes dos opciones:

#### Opción A: Usar el comando login (Recomendado)

```bash
npx vsce login DonOneFallen
```

Te pedirá el Personal Access Token. Pega el token que copiaste.

#### Opción B: Usar variable de entorno

```bash
export VSCE_PAT=tu_token_aqui
```

Luego puedes ejecutar:
```bash
npm run publish
```

### Paso 3: Verificar el token

```bash
npx vsce verify-pat DonOneFallen
```

Esto verificará que el token tiene los permisos correctos.

### Paso 4: Publicar la extensión

Una vez autenticado, puedes publicar:

```bash
# Publicar la versión actual (0.0.4)
npm run publish

# O incrementar versión automáticamente
npm run publish:patch  # 0.0.4 -> 0.0.5
npm run publish:minor  # 0.0.4 -> 0.1.0
npm run publish:major  # 0.0.4 -> 1.0.0
```

## Solución de Problemas

### Error: "Invalid publisher ID"

Asegúrate de que el `publisher` en `package.json` coincide exactamente con tu publisher ID en Azure DevOps.

Tu publisher actual es: `DonOneFallen`

### Error: "Extension with same version already exists"

Si ya existe una versión `0.0.4`, necesitas incrementar la versión:

```bash
npm run publish:patch  # Incrementa a 0.0.5
```

O edita manualmente el `version` en `package.json`.

### Error: "Publisher not found"

1. Asegúrate de que el publisher `DonOneFallen` existe en Azure DevOps
2. Si no existe, créalo en: https://marketplace.visualstudio.com/manage
3. Luego autentícate con `vsce login DonOneFallen`

### Verificar configuración actual

Para ver los publishers conocidos:

```bash
npx vsce ls-publishers
```

Para ver información sobre tu extensión:

```bash
npx vsce show DonOneFallen.green-focus-maniac
```

## Requisitos Previos

Antes de publicar, asegúrate de:

- ✅ Tener un archivo `LICENSE`
- ✅ Tener un `README.md` completo
- ✅ Tener un `CHANGELOG.md` actualizado
- ✅ El `package.json` tiene todos los campos requeridos
- ✅ El `publisher` en `package.json` coincide con tu publisher ID

## Recursos

- [Documentación oficial de publicación](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Crear Personal Access Token en Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops)
- [vsce CLI Documentation](https://github.com/microsoft/vscode-vsce)

