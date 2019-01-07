# MS-Conex

## Project to connect **Velneo ManchaSoft ERP** and **Web**. AJAX.

Este proyecto conecta el ERP sirviendo datos mediante **vModApache** y consumiendolos 
mediante varios metodos, usando JavaScript, para ser pintados en web.

Hace un uso básico del DOM para capturar los botones.
La interfaz es simple ya que lo importante es la obtencion de los datos.

Primero se hizo un ejemplo más cercano al código que se puede emplear en Velneo.
Se realiza la petición XMLHttpRequest y se pintan mediante fragmentos para optimizar tiempo de pintado.

En un ejercicio posterior se realiza mediante **fetch(), async, await**
Se realiza un pintado de los datos con templates, más acorde a la metodologia que se usa en los
Frameworks actuales.
