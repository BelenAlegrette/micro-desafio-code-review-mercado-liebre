# micro desafíos - code review

Header del sitio (navbar, login bar y search bar)
● Paleta de colores
Amarillo: #EAC926;
Azul: #03264C;
Celeste: #1259c3;
Gris oscuro: #666;
Gris claro: #ebebeb;
Verde: #39b54a;

● Tipografías
Familia: 'Roboto'

● Tamaños Tipográficos
Cuerpos de texto: 12px
Titulares (Basado en tu última visita/Ofertas): 24px
Precios: 18px
Descuentos: 16px
Descripciones: 16px

● Íconos


Main
● Debemos centrar la sección main y que ocupe un 90% del ancho de la pantalla.

● Entre cada artículo hay una separación de 10 píxeles.

● Nos piden que manejemos el logo del envío, el precio, el porcentaje de descuento y la descripción del artículo como elementos de una caja dentro de la caja general del artículo.

● Nos piden que la misma tenga un borde superior de 1 píxel, línea sólida y color #ebebeb.

● Debe tener separado el contenido de sus bordes en 15 píxeles en cada uno de sus
lados.

Tomando los requerimientos del equipo de usabilidad, debemos implementar los siguientes puntos de corte:
● Navegación en tablets (ancho mínimo 481 px)
● Navegación en desktop (ancho mínimo 769 px)

Importante:
● Solo en el caso desktop la descripción del artículo no se visualizará.
● Agregar box-shadow. Para los dispositivos tablet o de resoluciones superiores,


para ello nos pasaron esta propiedad* con los valores de CSS correspondientes:
box-shadow: 0px 0px 10px rgb(100, 100, 100);

(*) Para entender cómo funciona la propiedad podemos seguir este enlace y hacer pruebas sobre
un elemento en vivo.



Para Header debemos:
● Solo para la versión mobile, ocultar el site y el login navbar.
● Para las versiones desktop y tablet mostrar el site y login navbar, pero ocultar la imagen
del menú hamburguesa.


# CLASE 20 
PRODUCTOS
● Para cada uno de los artículos debemos:
○ Lograr que el precio y el descuento de los artículos estén en el mismo renglón, donde el precio ocupa el 30% y el descuento el 70% del total del renglón.

main section article i{
display: block;
font-size: 16px;
padding: 5px;
width: 30px;
height: 30px;
border: 1px solid #39b54a;
background-color: #FFF;
border-radius: 50%;
position: absolute;
right: 20px;
top:-15px;
}


Nuestro nuevo desafío es desarrollar la Home utilizando Flexbox, teniendo en cuenta que
el sitio debe ser 100% responsive. ¿Qué debemos modificar para que, aplicando Flexbox,
solo se vea un artículo si estamos en mobile, dos artículos para tablet y cuatro artículos
para la versión desktop?

Encabezado: nos piden que la primera parte del encabezado quede de la siguiente
manera:
○ Logo: tiene que medir el 50% de su contenedor.
○ Barra de búsqueda: tiene que medir el 50% de su contenedor.


Micro desafío - code review Clase 20
Para dispositivos con resoluciones igual o superior a una tablet, el header debe visualizarse de
la siguiente manera: (ver)

Mockup de los micro desafíos:(ver)

# CLASE 21

El formulario para ingresar un nuevo usuario a nuestro sistema se mostrará cuando
seleccionemos la opción (CREÁ TU CUENTA). Este deberá contar con la siguiente información:
Registro de Usuario (register.html ):
■ Nombre y apellido
■ Nombre de usuari@
■ Fecha de nacimiento
■ Domicilio
■ Perfil del usuario (consultar a l@s usuari@s si quieren comprar o vender)
■ Categorías de interés (puede elegir más de una)
● Electro
● Moda
● Hogar
● Juguetería
● Vida sana
■ Foto de usuario
■ Contraseña
■ Confirmar contraseña
■ Botón de enviar que nos lleve a la página principal
■ Botón de borrar todos los datos del formulario

Micro desafío - Paso 2
El formulario para ingresar al sitio se mostrará cuando seleccionemos la opción (INGRESÁ).
Este deberá contar con la siguiente información:
Login de Usuario (login.html ):


● Nombre de usuari@
● Contraseña
● Botón de enviar que nos lleve a la página principal


Micro desafío - Paso 3
Es necesario indicarle al usuario, con un mensaje de error, cuando un dato solicitado no
cumple con el formato permitido. Por ejemplo, si el usuario ingresa un nombre con un
solo carácter deberíamos indicar el error, ¿verdad? ¿Cómo podríamos mostrar ese
mensaje al usuario?

Micro desafío - code review
Cuando agregamos un formulario a nuestro sitio es necesario hacer un análisis previo
sobre qué datos y qué tipos de datos vamos a solicitar. Luego, con ayuda de conceptos
de UX, debemos analizar cómo vamos a presentarles el formulario a los usuarios.
Nuestro desafío ahora es darle un buen diseño tanto al formulario de registro como al
formulario de login.

Micro desafío - code review
Transformar el search bar a un formulario.

# CLASE 22

Micro desafíos - Paso 1
Para cada uno de los artículos:
● Nos piden que la descripción del producto esté oculta, a menos que los usuarios
le pasen el mouse por arriba.
● Además, nos piden que cuando los usuarios le pasen el mouse por arriba, se
visualice la sombra de la tarjeta de producto.
● Otro efecto (*) que nos piden es el que podemos ver en las siguientes imágenes,
donde el ícono del camión de envío gira 90° hacia arriba suavemente cuando
pasamos el mouse por encima.
(*) Para entender cómo funcionan las propiedades transition y transform de CSS podemos
seguir los enlaces y hacer pruebas sobre un elemento en vivo. 😉

Micro desafío - Paso 2

En nuestro login.html debemos lograr que cuando el mouse esté por encima del botón
de envío del formulario, su color de fondo cambie a #0022AA.

Micro desafío - code review

Repasando todo lo aprendido en Flexbox, debemos modificar el footer para que se
visualice de la siguiente forma en dispositivos desktop. Además, cada vez que se pase el
mouse por los íconos, estos deben cambiar de color (seleccionar el color que creas que
mejor combina con la paleta de colores del sitio).

