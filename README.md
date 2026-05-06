# 🐳 EMV - Entorno Mínimo Viable con Docker Compose

## 📌 Descripción

Este proyecto consiste en la creación de un **Entorno Mínimo Viable (EMV)** utilizando **Docker Compose**, cuyo objetivo es facilitar el desarrollo de aplicaciones mediante contenedores.

Se ha implementado una API REST básica con **Node.js** y **MongoDB**, completamente dockerizada.

---

## 🎯 Objetivos

* Crear un entorno de desarrollo funcional con Docker Compose
* Automatizar la configuración del proyecto
* Utilizar herramientas de Inteligencia Artificial para acelerar el desarrollo
* Apoyarse en la comunidad de GitHub para resolver problemas

---

## 🧩 Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Docker
* Docker Compose

---

## 📁 Estructura del proyecto

```
mi-emv/
│
├── docker-compose.yml
├── Dockerfile
├── package.json
├── app.js
└── README.md
```

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```
git clone <URL_DEL_REPOSITORIO>
cd mi-emv
```

### 2. Construir y levantar los contenedores

```
docker-compose up --build
```

---

## 🌐 Uso de la aplicación

### Acceso principal

```
http://localhost:3000
```

### Endpoints disponibles

#### GET /

Comprueba que la API funciona

#### POST /items

Crea un nuevo elemento

Ejemplo:

```
curl -X POST http://localhost:3000/items \
-H "Content-Type: application/json" \
-d '{"nombre":"Ejemplo"}'
```

#### GET /items

Obtiene todos los elementos

---

## 🏗️ Arquitectura

El sistema está compuesto por dos contenedores:

* **app** → Aplicación Node.js
* **mongo** → Base de datos MongoDB

Ambos servicios se comunican a través de la red interna de Docker.

---

## 🤖 Uso de Inteligencia Artificial

Se ha utilizado IA (ChatGPT) para:

* Generar archivos `docker-compose.yml` y `Dockerfile`
* Crear la estructura del proyecto
* Generar documentación
* Resolver errores de configuración

---

## 🧑‍💻 Uso de GitHub

GitHub se ha utilizado para:

* Consultar repositorios de ejemplo
* Revisar problemas comunes (issues)
* Aprender buenas prácticas de Docker
* Documentar el proyecto

---

## ⚠️ Problemas encontrados

* Conexión inicial con MongoDB
* Configuración de variables de entorno

### ✔️ Soluciones

* Uso de `depends_on` en Docker Compose
* Configuración correcta de la URI de conexión

---

## 🚀 Ventajas del uso de Docker

* Entornos reproducibles
* Aislamiento de dependencias
* Fácil despliegue
* Escalabilidad

---

## 📌 Conclusión

Docker Compose permite crear entornos completos de desarrollo de forma sencilla y rápida.
El uso de herramientas de Inteligencia Artificial acelera el proceso y reduce errores, mientras que GitHub facilita la colaboración y el aprendizaje.

---

## 👨‍💻 Autor

Proyecto realizado por: *[Tu Nombre]*
Asignatura: Entornos de Desarrollo
