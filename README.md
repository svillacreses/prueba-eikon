<h1 align="center">
    <a href="https://www.eikon.com.ec/" target="_blank">
        <img style="width:200px;margin-bottom:10px;" src="https://www.eikon.com.ec/wp-content/uploads/2025/04/eikon-logo-web_bl-1024x307.png" />
    </a>
    <br>
    <img src="https://img.shields.io/badge/FULL--STACK-8EC53F?style=for-the-badge&label=Prueba+T%C3%A9cnica" title="Prueba Técnica" height="55" />
</h1>

<div align="center">
	<a target="_blank" style="margin-right: 15px" href="https://github.com/svillacreses/prueba-eikon/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/svillacreses/prueba-eikon.svg?style=for-the-badge&label=Contribuciones&labelColor=364039&color=8EC53F" title="Contribuciones" height="25" />
    </a>
	<a target="_blank" style="margin-right: 15px" href="https://github.com/svillacreses/prueba-eikon/stargazers">
        <img src="https://img.shields.io/github/stars/svillacreses/prueba-eikon.svg?style=for-the-badge&label=Estrellas&labelColor=364039&color=8EC53F" title="Estrellas" height="25" />
    </a>
	<a target="_blank" href="https://github.com/svillacreses/prueba-eikon/stargazers">
        <img src="https://img.shields.io/github/license/svillacreses/prueba-eikon?style=for-the-badge&label=Licencia&labelColor=364039&color=8EC53F" title="Licencia" height="25" />
    </a>
	<br><br>
	<a target="_blank" href="https://linkedin.com/in/sivillacreses">
        <img src="https://img.shields.io/badge/Linked--In-0077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&label=@SIVILLACRESES" title="LinkedIn - Santiago Villacreses" height="40" />
    </a>
	<br>
	<h2>Built With:</h2>
    <a target="_blank" href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" title="Docker" height="30" /></a>
	<a target="_blank" href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-212121?style=for-the-badge&logo=postgresql" title="PostgreSQL" height="30" /></a>
	<a target="_blank" href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-0D121C?style=for-the-badge&logo=nodedotjs" title="Node.js" height="30" /></a>
    <br>
    <a target="_blank" href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs" title="Next.js" height="30" /></a>
    <a target="_blank" href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-030712?style=for-the-badge&logo=tailwindcss" title="Tailwind CSS" height="30" /></a>
	<a target="_blank" href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3077C6?style=for-the-badge&logo=typescript&logoColor=white" title="TypeScript" height="30" /></a>
</div>

<!-- ABOUT THE PROJECT -->

## Sobre el Proyecto

Este proyecto fue desarrollado siguiendo estas indicaciones:

> Necesitas crear una API RESTful simple en .NET Core que permita gestionar la creación y visualización de facturas. Cada factura tendrá un Id (entero, clave primaria), un Número (string, número de factura), una Fecha (DateTime), un Cliente (string, nombre del cliente) y una lista de Ítems (cada ítem con Descripción (string) y Precio (decimal)). Además, necesitas crear una interfaz de usuario básica (frontend) que consuma esta API para mostrar la lista de facturas y permitir agregar nuevas facturas (con sus ítems).

Algunos puntos a tener en cuenta antes de empezar:

- Se usó **Docker** para facilitar el levantamiento local del proyecto.
- Hay un archivo `.env` en la raíz del proyecto el cuál tiene todas las configuraciones necesarias para probar el proyecto. Se incluyó este archivo en el repositorio para facilitar su implementación.
- El archivo `postman-tests.json` que está en la raíz del proyecto se lo debe importar directamente en **Postman** para probar los diferentes endpoints una vez levantado el proyecto.

<div align="center">
	<h2>Modelo ER:</h2>
    <img src="https://firebasestorage.googleapis.com/v0/b/gluzsite.appspot.com/o/External%2FPrueba%20Eikon%20BD.svg?alt=media&token=d6200076-7f2a-4ec2-9a3f-748d3b3eac39" />
    <br><br>
    <a href="https://dbdiagram.io/d/Prueba-Eikon-6839e509bd74709cb75717ba" target="_blank"> === Visualizar en dbdiagram.io === </a>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Inicialización del Proyecto

Este es un proyecto _full-stack_ que utiliza **Node.js** (con TypeScript) en el backend, **Next.js** en el frontend, y **PostgreSQL** para la base de datos, todo gestionado con **Docker**.

### Requisitos

- Docker ([Instalar](https://www.docker.com/get-started))
- Docker Compose ([Instalar](https://docs.docker.com/compose/))

### Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/svillacreses/prueba-eikon.git
   cd prueba-eikon
   ```

2. Construir y levantar los contenedores:

   Usa `docker-compose` para construir y levantar todos los contenedores (backend, frontend y base de datos):

   _Recuerda que en el archivo `.env` podrás personalizar y ver la configuración de conexión por defecto_

   ```sh
   docker-compose up --build
   ```

   Esto descargará las imágenes necesarias, construirá los contenedores y levantará la aplicación.

3. Acceder a la aplicación:

   - **Frontend:** http://localhost:3005
   - **Backend:** http://localhost:4000
   - **Base de Datos:** Puedes conectarte desde un cliente como [pgAdmin](https://www.pgadmin.org/download/) o desde la terminal via línea de comandos.

4. Comandos útiles:
   - Para parar los contenedores:
     ```sh
     docker-compose down
     ```
   - Para ver los logs de los contenedores:
     ```sh
     docker-compose logs
     ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Importante

Se tomó como base [este proyecto](https://github.com/svillacreses/prueba-supermercado-app) similar desarrollado hace menos de 1 mes debido a que el tiempo máximo para el desarrollo de este proyecto fue de **2 horas**.
