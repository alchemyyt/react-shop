//para eliminar un elemento del carro importamos importamos useContext
import React,{useContext} from 'react';
//importamos AppContext
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import equis from '@icons/icon_close.png'
//para usar la info en imprimir los items usamos el item que mandamos en ProductList
const OrderItem = ({product}) => {
	//logica para usar use context para eliminar un producto con la funcion de useInitialState removeFromCart con use context con el contexto de AppContext que contiene las funciones de useInitialState revisar en app.jsx
	const {removeFromCart}=useContext(AppContext);

	//logica de la funcion que va a dar el payload a removeFromCart
	const handleRemove = product =>{ //como no tiene parentesis el parametro solo puede tener un parameto
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				{/*Estas imagenes hay que cambiarlas por la de la api con useContext*/}
				<img src={product.images[0]/*tiene que ser el indice 0 porque la api esta estructurada asi*/ } alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={equis} alt="close" onClick={()=>handleRemove(product)/* Tiene que ser una funcion anonima para que se renderize cuando le demos click y product es el parametro payload */}/>
		</div>
	);
}

export default OrderItem;
