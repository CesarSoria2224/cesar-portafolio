# Informe de Laboratorio – Despliegue de Sitio Web Estático con CI/CD en AWS

## Datos del estudiante

**Nombre:** César Soria Mita  
**Carrera:** Ingeniería en Tecnologías de la Información y Seguridad  

---

## 1. Descripción del proyecto

En esta práctica se desarrolló un portafolio web personal estático con múltiples páginas, diseñado para presentar información profesional, habilidades técnicas, proyectos académicos y publicaciones técnicas.

El sitio fue desarrollado utilizando tecnologías web fundamentales:

- HTML5
- CSS3
- JavaScript

El despliegue fue automatizado mediante un pipeline de integración y entrega continua (CI/CD) utilizando GitHub Actions y Amazon Web Services.

La infraestructura implementada incluye:

- Amazon S3 para alojamiento del sitio web estático
- AWS IAM para gestión segura de credenciales
- GitHub Secrets y Variables para configuración segura
- GitHub Actions para automatización del despliegue
- Amazon CloudFront como CDN para distribución segura mediante HTTPS

---

## 2. Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Actions
- Amazon S3
- AWS IAM
- Amazon CloudFront

---

## 3. Desarrollo del sitio web

Se desarrolló un portafolio personal multipágina con la siguiente estructura:

```text
cesar-portafolio/
├── index.html
├── sobre-mi.html
├── proyectos.html
├── writeups.html
├── contacto.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── img/
├── README.md
├── INFORME.md
└── .github/
    └── workflows/
        └── deploy.yml
```

El sitio incluye:

- Página principal
- Página "Sobre mí"
- Página de proyectos
- Sección de writeups técnicos
- Página de contacto
- Interactividad básica mediante JavaScript

---

## 4. Configuración de Amazon S3

### Creación del bucket

![Creación del bucket S3](./img/bucket-creado.png)

---

### Configuración de hosting estático

![Hosting estático configurado](./img/hosting-estatico.png)

---

### Configuración de acceso público

![Configuración de acceso público del bucket](./img/acceso-publico-s3.png)

---

### Política del bucket

![Política del bucket](./img/politica-bucket.png)

---

## 5. Configuración de GitHub Actions

### Secrets configurados

![Secrets configurados](./img/github-secrets.png)

---

### Variables configuradas

![Variables configuradas](./img/github-variables.png)

---

### Workflow de despliegue

Aquí se muestra el workflow configurado para automatizar el despliegue:

```yaml
name: Deploy Portfolio to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout del código
        uses: actions/checkout@v4

      - name: Configurar credenciales AWS
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ vars.AWS_REGION }}

      - name: Desplegar sitio a S3
        run: |
          aws s3 sync . s3://${{ vars.AWS_S3_BUCKET }} \
            --delete \
            --exclude ".git/*" \
            --exclude ".github/*" \
            --exclude "README.md" \
            --exclude "INFORME.md" \
            --exclude "img/*"
```

---

## 6. Evidencias de ejecución del pipeline

### Ejecución exitosa

![Workflow exitoso](./img/workflow-success.png)

---

### Fallo intencional y corrección

![Workflow con fallo intencional](./img/workflow-failure.png)

---

## 7. Configuración de CloudFront

### Distribución configurada

![Configuración de CloudFront](./img/cloudfront-config.png)

---

### Sitio accesible mediante CloudFront

![Sitio desplegado con CloudFront](./img/cloudfront-site.png)

---

## 8. URLs públicas

### Endpoint S3

```text
PEGAR URL S3 AQUÍ
```

### Endpoint CloudFront

```text
PEGAR URL CLOUDFRONT AQUÍ
```

### Repositorio GitHub

```text
https://github.com/CesarSoria2224/cesar-portafolio
```

---

## 9. Conclusiones

Durante esta práctica se implementó un flujo completo de despliegue continuo para un sitio web estático utilizando servicios gestionados de AWS.

GitHub Actions permitió automatizar completamente el proceso de publicación, reduciendo tareas manuales y mejorando la consistencia del despliegue.

Amazon S3 proporcionó una solución eficiente para alojamiento de contenido estático, mientras que CloudFront mejoró la disponibilidad, rendimiento y seguridad mediante distribución global y acceso HTTPS.

Esta práctica permitió aplicar conocimientos de automatización, CI/CD, despliegue en la nube, gestión segura de credenciales y distribución de contenido.