# Proyecto de plantilla Impreza

plantilla empresarial

## Dependencias

* webpack ✅
* bootstrap ✅
* nodemon ❌
* sass ✅
* postcss ✅

> [!nota]
>
> no todas las dependencias están en uso.

## Recursos.

* iconos: font awesome 5x
* placehold: generados de imágenes

## Instrucciones

Para clonar el repositorio y configurar el proyecto, sigue estos pasos:

1. **Clonar el Repositorio:**
   Abre la terminal y ejecuta el siguiente comando para clonar el repositorio en tu máquina:

   ```bash
   git clone https://github.com/carlosandresalzate/proyecto-impreza.git
   ```

2. **Instalar Dependencias:**
   Ingresa al directorio del proyecto:

   ```bash
   cd proyecto-impreza
   ```

   Luego, instala las dependencias utilizando npm:

   ```bash
   npm install
   ```

   Este comando instalará todas las dependencias listadas en el archivo `package.json`.

3. **Lanzar el Proyecto en Modo Desarrollo:**
   Para lanzar el proyecto en modo desarrollo, ejecuta:

   ```bash
   npm start
   ```

   Este comando iniciará el servidor de desarrollo y podrás ver tu aplicación en `http://localhost:8080` en tu navegador.

4. **Construir el Proyecto para Producción:**
   Si deseas construir el proyecto para producción, utiliza el siguiente comando:

   ```bash
   npm run build
   ```

   Esto generará los archivos optimizados en el directorio `dist`.

Sobre el archivo de configuración de Webpack (`webpack.config.js`):

El archivo de configuración de Webpack proporciona las reglas y opciones necesarias para construir el proyecto. Aquí hay una explicación breve:

- **Entry:** Especifica el punto de entrada del proyecto, en este caso, `./src/js/main.js`.

- **Output:** Define la ubicación y el nombre del archivo resultante en el directorio `dist`.

- **DevServer:** Configura el servidor de desarrollo con la opción `hot` activada para permitir la recarga en caliente.

- **Plugins:** Utiliza el complemento `HtmlWebpackPlugin` para generar un archivo HTML en base a un template.

- **Module/Rules:** Define las reglas para manejar archivos SCSS. Utiliza loaders como `style-loader`, `css-loader`, `postcss-loader` y `sass-loader` para procesar y cargar estilos.

> [!NOTE]
>
> Recuerda que este archivo de configuración se encuentra en el formato 
> CommonJS, utilizado por Node.js, y exporta un objeto con las configuraciones 
> necesarias para Webpack.
