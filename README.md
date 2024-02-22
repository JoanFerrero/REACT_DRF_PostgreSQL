# Train Trakr

Bienvenido a nuestra plataforma de reservas de trenes, donde puedes planificar y reservar tus viajes en tren de manera fácil y conveniente.

## Tabla de Contenidos

1. Clonación Repositorio
2. Arrancar docker
3. Contenedores
4. Docker Compose
5. Explicación

# Clonación Repositorio!

Para clonar el repositorio tendremos que asignar también la rama que queremos clonar en este caso master_docker_compose.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
    <code>git clone -b master_docker_compose https://github.com/JoanFerrero/REACT_DRF_PostgreSQL</code>
  </pre>
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="https://github.com/davidmpenades/e-Move_React18Context_Django5.git" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
    </clipboard-copy>
  </div>
</div>

Cuando tengamos el repositorio clonado comenzaremos con el arranque de los contenedores.
# Arrancar docker

Para arrancar docker lo primero sería tener el repositorio clonado desde la rama master_docker_compose.

Nos colocaremos dentro de la carpeta en nuestro terminal y ejecutaremos el siguiente comando.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
    <code> docker compose up</code>
  </pre>
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="https://github.com/davidmpenades/e-Move_React18Context_Django5.git" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
    </clipboard-copy>
  </div>
</div>

Este comando ejecutará todos los servicios, empieza en el siguiente orden bd, pgadmin, backend, frontend, loadbalancer, prometheus y grafana.

Si no hay ningún problema de que tengamos algún puerto en uso se ejecutara adecuadamente.

# Conenedores

1. db -> 5432:5432
2. pgadmin -> 8888:80
3. backend -> 8000:8000
4. frontend -> 5173:5173
5. loadbalancer -> 80:80
6. prometheus -> 9090:9090
7. grafana -> 3500:3000

# Docker Compose

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
<code>version: '3.9'

  services:
    db:
      container_name: postgres_container
      image: postgres:12
      restart: always
      environment:
        - POSTGRES_USER=root
        - POSTGRES_PASSWORD=root
        - POSTGRES_DB=ontibike
      ports:
        - 5432:5432
      volumes:
        - pgVolFinal:/var/lib/postgresql/data
        - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
      networks:
        - practica_net
    pgadmin:
      depends_on:
        - db
      image: dpage/pgadmin4
      container_name: pgadmin4_container_final
      restart: always
      ports:
        - 8888:80
      environment:
        PGADMIN_DEFAULT_EMAIL: root@root.com
        PGADMIN_DEFAULT_PASSWORD: root
      volumes:
        - pgadminFinal:/var/lib/pgadmin
      networks:
        - practica_net
    backend:
      depends_on:
        - db
      build:
        context: .
        dockerfile: ./backend/Dockerfile
      container_name: backend_container
      ports:
        - "8000:8000"
      networks:
        - practica_net
    frontend:
      depends_on:
        - backend
      build:
        context: .
        dockerfile: ./frontend/Dockerfile
      container_name: frontend_container
      ports:
        - 5173:5173
      command: npm run dev
      networks:
        - practica_net
    loadbalancer:
      image: nginx:latest
      container_name: nginx_loadbalancer
      ports:
        - "80:80"
      volumes:
        - ./loadbalancer/nginx.conf:/etc/nginx/nginx.conf:ro
      command: ["nginx", "-g", "daemon off;"]
      entrypoint: []
      networks:
        - practica_net
      depends_on:
        - frontend
        - backend
    prometheus:
      image: prom/prometheus:v2.20.1
      container_name: prometheus_practica
      networks:
      - practica_net
      ports:
      - "9090:9090"
      volumes:
      - ./Prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
      command:
      - --config.file=/etc/prometheus/prometheus.yml
      depends_on:
      - backend
    grafana:
      image: grafana/grafana:7.1.5
      container_name: grafana_practica
      networks:
      - practica_net
      ports:
      - "3500:3000"
      volumes:
      - ./Grafana/datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml
      - myGrafanaVol:/var/lib/grafana
      environment:
        GF_AUTH_DISABLE_LOGIN_FORM: "true"
        GF_AUTH_ANONYMOUS_ENABLED: "true"
        GF_AUTH_ANONYMOUS_ORG_ROLE: Admin
        GF_INSTALL_PLUGINS: grafana-clock-panel 1.0.1
      depends_on:
      - prometheus
  
  
  volumes:
    pgVolFinal: {}
    pgadminFinal: {}
    myGrafanaVol: 
  networks:
    practica_net:
</code>
  </pre>
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="https://github.com/davidmpenades/e-Move_React18Context_Django5.git" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
    </clipboard-copy>
  </div>
</div>

## Backend

Este repositorio contiene un backend desarrollado en Django, dockerizado utilizando dockerfil para facilitar el despliegue y la gestión de dependencias.

Estructura del backend.

El backend se organiza de la siguiente manera:

 - backend/: Contiene el código fuente del backend Django.
 - docker-compose.yml: Define los servicios necesarios para ejecutar la aplicación en contenedores Docker.
 - Dockerfile: Define cómo se construye la imagen Docker para el backend.
 - requirements.txt: Lista las dependencias de Python necesarias para ejecutar el backend.

El Dockerfile consta de dos stages para optimizar la construcción de la imagen:

 - Stage de install: Instala las dependencias del sistema y copia el código fuente del backend.
 - Stage de start: Utiliza una imagen de Python:3.10.12, copia los archivos necesarios del stage de install y ejecuta los comandos necesarios para compilar el proyecto. Configura el entorno y expone el puerto 8000 para servir la aplicación.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
<code>#Install dependencies
FROM python:3.10.12 as install
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY /backend/app/requirements.txt .
COPY /backend/app .
#
#Start application
FROM python:3.10.12 as start
WORKDIR /app
COPY --from=install /app .
RUN pip install -r requirements.txt
RUN pip install django-cors-headers
EXPOSE 8000
ENTRYPOINT ["python3", "/app/manage.py", "runserver", "0.0.0.0:8000", "--noreload"]</code>
  </pre>
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="https://github.com/davidmpenades/e-Move_React18Context_Django5.git" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
    </clipboard-copy>
  </div>
</div>

## Frontend

Dockerización de Frontend React con Docker Compose

Este repositorio contiene un frontend desarrollado en React, dockerizado con Docker Compose para simplificar la gestión del entorno de desarrollo y despliegue. La configuración incluye un Dockerfile optimizado para la construcción de la imagen Docker.

El frontend se organiza de la siguiente manera:

 - frontend/: Contiene el código fuente del frontend React.
 - docker-compose.yml: Archivo de configuración de Docker Compose.
 - Dockerfile: Define la construcción de la imagen Docker para el frontend.
 - package.json: Archivo de configuración de npm con las dependencias del proyecto.

El Dockerfile consta de dos stages para optimizar la construcción de la imagen:

 - Stage de install: Instala las dependencias del sistema y copia el código fuente del frontend.
 - Stage de start: Utiliza una imagen de node:20-alpine, copia los archivos necesarios del stage de install y ejecuta los comandos necesarios para compilar el proyecto. Configura el entorno y expone el puerto 5173 para servir la aplicación.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
<code>#Install dependencies
FROM node:20-alpine as install
WORKDIR /app
COPY /frontend/package.json .
COPY /frontend/package-lock.json .
RUN npm install
COPY /frontend .
#
#Start application
FROM node:20-alpine as start
WORKDIR /app
RUN apk update
RUN npm install npm@latest
COPY --from=install /app .
EXPOSE 5173</code>
  </pre>
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="https://github.com/davidmpenades/e-Move_React18Context_Django5.git" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
    </clipboard-copy>
  </div>
</div>

## DB Postgres

En el docker compose se creará la base de datos para después añadir todos los datos.

Cogiendo todas las tablas y datos del archivo init.sql que se encuentra dentó de la carpeta db.

1. usuario -> root
2. password -> root
3. db -> ontibike

Para realizar una conexión a la base de datos postgresql mediante pgadmin sigue los siguientes pasos.

La contraseña de acceso es:
 - Usuario: root@root.com
 - Password: root

<img src="https://github.com/JoanFerrero/REACT_DRF_PostgreSQL/blob/master_docker_compose/img/login.png" alt="Login PgAdmin" style="max-width: 100%;">

Después de añadir los datos para realizar el login tendremos que añadir el servidor de la siguiente forma.

Nos colocaremos encima de server -> Register -> server.

Aparecerá la siguiente imagen que en general añadiremos un nombre.
Y en connection añadiremos el nombre de la base de datos dockerizada que se llama db, puerto 5432 y contraseña root.

<img src="https://github.com/JoanFerrero/REACT_DRF_PostgreSQL/blob/master_docker_compose/img/connection.png" alt="Login PgAdmin" style="max-width: 100%;">

Le daremos a save y podremos ver el siguiente resultado.

<img src="https://github.com/JoanFerrero/REACT_DRF_PostgreSQL/blob/master_docker_compose/img/resultado.png" alt="Login PgAdmin" style="max-width: 100%;">

## Servicio de loadbalancer de nginx

Este repositorio proporciona una configuración básica para implementar un Load Balancer utilizando Nginx para tanto el frontend como el backend de la aplicacion. 

Como podemos ver en la imagen siguiente tenemos el nombre de backend-app que es el que está configurado.

<img src="https://github.com/JoanFerrero/REACT_DRF_PostgreSQL/blob/master_docker_compose/img/loadbalancer.png" alt="loadbalancer" style="max-width: 100%;">

Adjunto fichero de configuración nginx.conf.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
<code>events {
  worker_connections 1024;
}

http {

  upstream backend-app {
    server backend:8000;
  }

  upstream frontend-app {
    server frontend:5173;
  } 
  
 server {
    listen 80;

    location / {
       proxy_pass http://frontend-app;
    }

    location /api/ {
       proxy_pass http://backend-app;
    }
}}

</code>
  </pre>
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="https://github.com/davidmpenades/e-Move_React18Context_Django5.git" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
    </clipboard-copy>
  </div>
</div>

# Explicación

El archivo Docker Compose describe la infraestructura de una aplicación compuesta por varios servicios interconectados entre si para su perfecto funcionamiento.

El servicio "db" despliega un contenedor de PostgreSQL, un sistema de gestión de bases de datos relacional. Este servicio está configurado con un usuario y contraseña, así como una base de datos llamada "ontibike". Utiliza un volumen para persistir los datos de la base de datos y también carga un archivo init.sql para cargar las tablas con los datos.

El servicio "pgadmin4_container_final" despliega un contenedor de PgAdmin, una interfaz web para administrar servidores de bases de datos PostgreSQL. Este servicio depende del servicio "db". Utiliza un volumen para persistir los datos de PgAdmin.

El servicio "backend_container" despliega un contenedor que ejecuta una aplicación DJango. Este servicio depende del servicio "db". El contenedor se construye a partir de un Dockerfile ubicado en el directorio ./backend. Expone el puerto 8000 para acceder al servicio backend.

El servicio "frontend_container" despliega un contenedor que ejecuta una aplicación React. Este servicio depende del servicio "backend". El contenedor se construye a partir de un Dockerfile ubicado en el directorio ./frontend. Expone el puerto 5173 y ejecuta el comando "npm run dev" al iniciarse.

El servicio "nginx_loadbalancer" despliega un contenedor de Nginx como balanceador de carga. Este servicio redirige el tráfico a los servicios frontend y backend. Utiliza un volumen para configurar Nginx y expone el puerto 80 para acceder al balanceador de carga.

Los servicios "prometheus_practica" y "grafana_practica" despliegan contenedores de Prometheus y Grafana, respectivamente, para la monitorización y análisis de la aplicación. Prometheus recoge métricas del servicio backend y Grafana se configura con autenticación anónima y ciertos complementos instalados. Grafana depende del servicio Prometheus. Ambos servicios están configurados con volúmenes para persistir datos y exponen puertos para acceder a sus interfaces web.

En resumen, define una aplicación completa con una arquitectura de microservicios que incluye una base de datos, servicios backend y frontend, un balanceador de carga, y sistemas de monitorización y análisis. Los servicios están interconectados y configurados para trabajar juntos en una red compartida.




