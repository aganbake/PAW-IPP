# M1 IPP - Programación de Aplicaciones Web

El siguiente trabajo fue realizado gracias a conocimientos previos y las ganas de seguir aprendiendo el mundo de la programación web :)

## Contenido

- Index.html
- Gatitos.html
- Index.js
- Cats.json

# Index.html

Acá tenenmos lo que sería el home, donde se incluye el navbar y 3 gatitos generados de manera aleatoria usando javascript.

# Gatitos.html

Acá tenemos el mismo boiler plate del index, pero se incluye una tabla donde se generarán nuestros gatitos desde el javascript.

# Index.js

Toda la lógica del sitio se ejecuta acá con las diferentes funciones:

- loadCats() (Async)
- catCall(#) (Async)
- catList() (Astync)
- createCat(#) (embbed)
- getCat()
- featuredCats()

# Cats.json

Acá está el arreglo de gatitos, realizado gracias mayormente a la página de purina.

## Funcionamiento

#### loadCats()

Esta se realizo inicialmente para verificar la información contenida en el .json de gatitos, para comprobar la correcta ejecución del fetch.

#### catCall(#)

Recibe un número de gatito como parametro, hace un fetch y luego genera un gatito para ser enviado el index.html

#### catList()

Acá se genera toda la lista de gatitos contenida dentro del cats.json, se envía a la página gatitos.html

#### createCat()

Acá simplemente se va genenerando cada gatito incluido dentro del arreglo data que se llama en la función catList()

#### getCat()

Genera un número random entre 1 y 14, para así poder ver gatos aleatorios en el home

#### featuredCat()

Solo llama 3 veces a la función getCat() para así no generar un loop en el getCat() o tener que manualmente llamar 3 veces a la función

## Agradecimiento

Primero agradecer por la oportunidad de seguir programando y a todos los que han aportado a mi constante crecimiento como programador
