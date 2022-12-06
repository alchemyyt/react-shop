//para agregar los productos que compramos al Checkout importamos useContext y tambien sumar el total de precios
import React, { useContext } from "react"; 
//importamos la informacion donde estan los objetos que agregamos al carro
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";
import flechita from "@icons/flechita.svg";
const MyOrder = () => {
  //logica de la info que tenemos y useContext
  const { state } = useContext(AppContext);
  const idItemInCart =  Math.floor(Math.random() * (500000 - 1000)) ;
  //logica de suma de precios Podria ser u custom hook pero solo la vamos a usa aqui
  const sumTotal = () =>{
    //creamos una funcion que suma el tota que llevamos mas el valor del precio de un producto
    const reducer = (acumulator,currentValue) => acumulator + currentValue.price;
    //el reduce lo que hece es iterar elementos de un array y nos regresa un resultado unico osea suma todos los resultados https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    //este reduce lo que hace es agarrar el array state.cart que tiene todos los productos y por cada producto ejecutar la funcion reducer sumando todos los precios, el valor inicial es 0
    //esto lo que hace es agarra el array de los productos y por cada producto se ejcuta la funcion reducet y ponemos el valor inicial de acumulator en 0 y el currentValue es el .price de cada elemento 
    const sum = state.cart.reduce(reducer,0)
    return sum
  }
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {
          //logica para agregar los objetos al dom
          state.cart.map(product => (//iteramos con map importante usar parentesis como el return de una funcion slr y no llave aqui como una funcion normal no se porque  https://stackoverflow.com/questions/46592776/difference-between-and-with-map-with-reactjs
            <OrderItem product={product} key={`orderItem-${idItemInCart}`}/> //mandamos los product al componente OrderItem para trabajar con el alla importante poner el key para diferenciar los productos IMPORTANTISIMO usar un key distinto al que usamos en header porque si no pueden haber conflictos
					)) 
        }
				
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()/*esta funcion se va a ejecutar cada vez que se renderice el componente */}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
