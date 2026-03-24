---
description: Deploy futuwebs-ai-solutions to production
---

# Deploy Futuwebs AI Solutions

Este workflow se usa para deployar el proyecto `futuwebs-ai-solutions` a producción (Hostinger).

## Pasos

1. Generar el build de producción:
```bash
npm run build
```

2. Agregar los cambios del dist al commit:
```bash
git add dist/
git commit -m "build: update production build"
```

3. Push a la rama main:
```bash
git push origin main
```

4. Push del contenido de dist a la rama deploy (solo archivos de dist en la raíz):
```bash
git subtree push --prefix dist origin deploy
```

## Notas importantes

- La rama `deploy` contiene ÚNICAMENTE el contenido de la carpeta `dist/`
- Hostinger está configurado para servir desde la rama `deploy`
- El Document Root en Hostinger está en `/` porque la rama deploy ya tiene los archivos en la raíz
- NUNCA crear branches nuevas sin confirmación del usuario
