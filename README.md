# César Portafolio – Sitio Web Estático con CI/CD en AWS

Portafolio web personal desarrollado como práctica de despliegue automatizado en la nube utilizando Amazon Web Services y GitHub Actions.

## Descripción

Este proyecto consiste en un sitio web estático multipágina diseñado como portafolio personal para presentar información profesional, habilidades técnicas, proyectos académicos y writeups técnicos relacionados con:

- Redes
- Seguridad informática
- Seguridad en redes
- Informática forense
- Retos CTF forenses

El objetivo principal fue implementar un flujo completo de despliegue continuo (CI/CD) utilizando servicios cloud gestionados.

---

## Tecnologías utilizadas

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

## Infraestructura implementada

Arquitectura del despliegue:

```text
GitHub Repository
      ↓
GitHub Actions (CI/CD Pipeline)
      ↓
Amazon S3 (Hosting estático)
      ↓
Amazon CloudFront (CDN + HTTPS)
      ↓
Usuarios finales
```

Características implementadas:

- Sitio web estático multipágina
- Despliegue automático con GitHub Actions
- Integración con Amazon S3
- Gestión segura de credenciales mediante GitHub Secrets
- Variables de configuración reutilizables
- Invalidación automática de caché en CloudFront
- Distribución segura mediante HTTPS
- Uso de CDN para optimización de rendimiento

---

## URLs públicas

### Sitio desplegado en S3

http://cesar-portafolio-cs24.s3-website-us-east-1.amazonaws.com

### Sitio desplegado en CloudFront

https://d2spc8wy09hqs9.cloudfront.net

---

## Documentación del Laboratorio

Puedes encontrar el informe completo con capturas de pantalla y evidencias en el siguiente enlace:

- [Ver informe del laboratorio](./INFORME.md)

---

## Autor

**César Soria Mita**  
Estudiante de Ingeniería en Tecnologías de la Información y Seguridad

GitHub:
https://github.com/CesarSoria2224