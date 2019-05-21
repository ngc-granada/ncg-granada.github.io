# NCG - New College Granada Web

## Organización

* Folders:
	* **Components:**
	* **static:**
		* css: Contiene los ficheros de estilo de la web.
		* img: Contiene los recursos que se usarán en la web.
		* js:
			* handlers: Contiene 1 archivo js por cada plantilla html que se encarga de gestionarla.
			* utils.js: Contiene las funciones en común entre todas las plantillas.
		* scss: Contiene los ficheros scss que se compilan en la carpeta css (Este es el que hay que tocar vaya).
		* text: Contiene los ficheros Json que incluye los cursos de la web.
* Root:
	* **course.html:** Plantilla para los cursos, se crea haciendo uso del json, para obtener el json se realiza una petición ajax get, esto no se haría asi si usaramos node.js pero meh.
	* **index.html:** Plantilla para el landing de la web.
	* **launcher.html:** Plantilla que gestiona los niveles de un determinado título e idioma. La url la maneja el handler js.
	* **officialTitles.html:** Plantilla que gestiona todos los titulos que se imparten en la academia.
	
## Cosas a tener en cuenta:

Es necesario para su correcto funcionamiento ejecutarlo usando un apache o un nginx, si no es posible que se queje de que las peticiones ajax para los json locales.
(Esto es a gusto del que toque gusto)

Para compilar el css se puede usar el comando este, puede manterse ejecutandose y los cambios se modifican directamente en el css:

```
sass --watch ./static/scss:./static/css
```


