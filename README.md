## Objetivo:

Desarrollar un API en GraphQL que me permita gestionar una agenda de contactos.

Los resolvers deben ser los siguientes

- **addContact**, cuyos parámetros deben ser:
  - _Nombres y apellidos, tipo: _"Alberto Romero Sanz"\*
  - _Número de teléfono_ incluyendo prefijo nacional, tipo: _"+34645543345"_
- **getContact**, cuyo parámetro debe ser el id generado por mongo y que devuelve:
  - Nombres y apellidos.
  - Número de teléfono
  - País de residencia
  - Hora actual de la capital del país de residencia.
- **getContacts**, que devuelve todos los contactos, con los campos arriba mencionados.
- **deleteContact** cuyo parámetro debe ser el id generado por mongo y que devuelve verdadero o false en función de si el contacto se ha borrado satisfactoriamente o no.
- **updateContact** cuyo parámetro debe ser el id generado por mongo y los nuevos datos del contacto, se puede modificar tanto el nombre como el teléfono o ambos (pero no es obligatorio que sean ambos). Devuelve los datos del nuevo contacto.

**Notas:**

- Se debe comprobar que el número de teléfono es correcto (a través del uso de una API). Si no es correcto la _mutation_ devolverá un error de _GraphQL_ **Se realizará en el lugar del código que sea más oportuno**.
- No se permite más de 1 usuario con el mismo teléfono. **Esto se debe comprobar a través de mongoose, no en un controller o resolver**
- Para obtener la información pertinente se puede usar cualquiera de las APIs disponibles en https://api-ninjas.com/ . Los alumnos pueden consultar libremente esta web.

## Entrega:

- Enlace a una release de github
- Archivo comprimido generado en la release
- Enlace al despliegue de la aplicación en Deno Deploy.

**La falta de los dos primeros elementos supone un 0 en el examen**

_(La aplicación en Deno Deploy debe ser completamente funcional, guardando los datos en la DDBB correctamente)_

### Instrucciones:

1. Crea un API GraphQL utilizando Deno con Apollo Server.
2. Utiliza una base de datos MongoDB (Mongo Atlas) para almacenar y gestionar datos.

## Evaluación:

Se evaluará la funcionalidad, el diseño del API, la implementación de la base de datos y la corrección del código.

Los criterios de evaluación de cada apartado son los siguientes

#### 100% de la puntuación:

- La funcionalidad es tal y como se pide en el enunciado.
- El código es correcto.

#### 60% de la puntuación:

- La funcionalidad es tal y como se pide en el enunciado.
- El código presenta errores o malas praćticas
- Errores no controlados.
- Error en el tipado.
- Código duplicado o redundante.
- Consultas innecesarias o subóptimas a la DDBB
- etc.

#### 30% de la puntuación:

- Faltan funcionalidades de las que se piden en el enunciado pero las que están presentes son correctas.
- El código es correcto (aunque incompleto).

#### 0% de la puntuación:

- Faltan funcionalidades o las que están presentes son incorrectas.
- El código presenta errores y malas prácticas.
