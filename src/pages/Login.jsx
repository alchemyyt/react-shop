//para crear un nuevo continer que son paginas nuevas de html en react> Diferenciemos *componente* de "*un tipo de contenedor*" **en react. Los contenedores o módulos son partes más grandes. En este caso puede ser todo el login. Sin embargo, un componente puede ser un *input* o un *form*. Los componentes deben mantenerse pequeños y responder a uno sola necesidad, si no, perdemos funcionalidad.
//importamos react
//para usar useRef primero lo importamo
import React, { useRef } from "react";
//importamos los estilos
import "../styles/login.scss";
//creamos un componete de tipo steilist con el shotcut slr
const Login = () => {
  //para la logica tenemos que crear una referencia con un valor
  const formRef = useRef(null);
  //creamos una funcion que nos va a permitir maneja el submit de el formulario
  //form data es parte de js y nos permite instanciar todos los elementos que se encuentren dentro de un formulario y los va a capturar conforme sean llenados de esta forma cuando le demos a submit los va a tener presentes y podemos trabajar con ellos tambien podemos mandar todo el objeto que se genero con form data al backend asi va mas seguro y encryptado
  const handleSubmit = (event) => {//para que los datos no aparezcan en la url colocamos event eparametro para trabajar con el
    event.preventDefault();//asi no se enviaran los valores por url si no que va a continuar con la logica que tenemos
    const formData = new FormData(formRef.current); //es lo que actualmente esta en el formulario
    //creamos un objeto para ver la informacion como se la vamos a enviar a l backend podriamos parsearla o enviar formdata porque no fuera necesario
    const data = {
      username: formData.get("email"), //form data tiene el metodo get para sacar un elemento que contenga este
      password: formData.get("password"),
    };
    console.log(data)
  };

  return (
    //class es una palabra reservada de js por lo tanto no la podemos usar en jsx la class de html para usarla usamos classname
    //en react todas las etiquetas se cierran como las de input y las img solo con poner / al final sirve
    <div class="login">
      <div class="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
        <form
          action="/"
          class="form"
          ref={formRef /*llamamos useRef que esta dentro de formRef en esta etiqueta y para llamarlo tenemos que llamarlos con el atributo ref*/}
        >
          <label for="email" class="label">
            Email address
          </label>
          <input
            type="text"
            name="email" /*Ya no diferenciamos el imput por una id sino por un name */
            placeholder="platzi@example.cm"
            class="input input-email"
          />
          <label for="password" class="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            class="input input-password"
          />
          <button
            class="primary-button login-button"
            onClick={handleSubmit}
          >Log In</button>
          <a href="/">Forgot my password</a>
        </form>
        <button class="secondary-button signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
