import React, { useContext } from "react"; //importamos useContext por convencion usamos use y luego el componente que vamos a usar
import "../styles/ProductItem.scss";
import cartIcon from "@icons/bt_add_to_cart.svg";
//importo el la informacion guardada AppContext que metimos de app.jsx
import AppContext from "../context/AppContext";
const ProductItem = ({product}) => {//este product es el product = product de el continer ProductList eso lo hicimos para que el valor exista aqui importante que sea de parameto de la funcion que va a exportar
	//logica del useContext utilizando los datos de AppContext
  const {addToCart} = useContext(AppContext);//importamos la funcio addToCart de use initialState con useContext
  //handleClick recibe product y lo combierte en item y lo agraga al carro
	const handleClick = item=>{ //return implicito sin parentesis el parametro
		addToCart(item)//este es el payload de u
	}
	//esto es la funcion de lo que va a cambiar el setNombre
  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p >
          <p>{product.title}</p>
        </div>
        <figure onClick={()=>handleClick(product)}> {/*cuando se hafa click en el icono va a enviar el product que nos llego de product list y se lo pasamos a handleClick*/ }
          <img src={cartIcon} alt="" />
        </figure>
      </div>
    </div>
  );//llamamos la funcion  con el evento que queramos y en el elemento que queremos que active el evento 
	//por utimo pondriamos el estado actual donde queremos que cambie lo que queremos que cambie
};

export default ProductItem;
