import React, { useState, useContext } from "react"; //para añadir items al checkout primero importamos useState y use context
import "../styles/Header.scss";
import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";
//importamos los datos del carrito
import AppContext from "../context/AppContext";
//importo el checkout
import MyOrder from "../containers/MyOrder";
const Header = () => {
  //logica en este caso un toggle que muestra las opciones de mi cuenta
  const [toggle, setToggle] = useState(false);
  //loguca del togle que muestra el checkout
  const [toggleOrders, setToggleOrders] = useState(false); //importantisimo tiene que ser un array no un objeto
  //logica para sacar la info de AppContext y usar useContext
  const { state } = useContext(AppContext);
  //funcion mostrar opciones de cuenta
  const hundleToggle = () => [
    //lo que hace esta funcion es que cuando el evento dispare el hundleToggle el toggle cambie
    setToggle(!toggle),
  ]; //el !toggle cambia el estado del toggle
  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li
            className="navbar-email"
            onClick={
              hundleToggle /*cuando le demos click al correo se dispara la funcion*/
            }
          >
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={/*Como se ve aqui podemos pasar una funcion anonima directamente como logica del onClick IMPORTANTISIMO hacerlo anonima para que solo se ejecute una vez*/
              () =>
                setToggleOrders(
                  !toggleOrders
                ) 
            }
          >
            <img src={shoppingCart} alt="shopping cart" />
            {
              state.cart.length > 0 ? <div>{state.cart.length}</div> : null
              /*Validacion para ver si algo pasa o no lo que dice es si cart tiene mas de un elemento muestra cuantos elementos tiene y crea el div que es la bola verde de notificacion, si no, no muestres nada*/
            }
          </li>
        </ul>
      </div>
      {toggle && <Menu /> /*y cuando togle sea true muestra el menu */}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
