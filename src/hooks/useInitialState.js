//este custom hook es para usar el useContext en este caso para agregar al carrito
//importamos usestate
import {useState} from 'react';//importamos useState por convencion usamos use y luego elcomponente que vamos a usar
//creamos una variable iniciaState que va ser un objeto
const inicialState = {
  //la key cart y su valoer es un array vacio
  cart : [],
}
//creamos la funcion que vamos a exportar
const useInitialState = () =>{
  //logica de el state cramos el state y depues dentro de un array ponemos el estado actual y una coma la funcion que va a cambiar el estado con setNombre y es igual al tipo de state que vamos a usar y de parametro el valor inicial
  //primero la logica del use state donde guardaremos lo que tenemos guardado en  el inicialState
  const [state,setState] = useState(inicialState);

  //ahora craremos una funcion que nos va a permitir guardar o cambiar valores en el elemento
  const addToCart = (payload) =>{
    setState({
      ...state,//esto dice que mantenga la informacion del estado que inicialmente esta vacio pero vamos agregando producto por producto asi los muestra todos los anteriores pero esto tambien mantiene en el caso de que halla otra info en inicialState
        cart:[...state.cart,payload]//modificamos el cart mateniendo lo que ya tenia
    })
  }
  //logica para eliminar elementos del array
  const removeFromCart= (payload) =>{
    setState({//ejecuta la funcion setState
      ...state,//mantiene los otros elementos
      //filter lo que hace es devolver un array con los elemntos que cumplan las condiciones que les dimos https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      cart:state.cart.filter(items=>items.id !== payload.id)//este filter nos devuelve un array con todos los productos menos el payload que es el componente que le demos click
    })
  }
  return{
    state,addToCart,removeFromCart//retornamos los datos para usar la info y el addtocart para agregar items y remover
  }
}
export default useInitialState;