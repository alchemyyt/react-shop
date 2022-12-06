
import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
//importamos el hook custom que creamos para usarlo aqui
import useGetProducts from "../hooks/useGetProducts"; //esta url podria ser un alias
//para consumir un api con react
//buscamos la url del api y la metemos en una variable
const API = "http://api.escuelajs.co/api/v1/products";
const ProductList = () => {
//decimos que products es igual al valor que retorna la funcion useGetProducts que es la respuesta del api que pusimos de parametro
const products = useGetProducts(API);//importante que sea adentro de la funcion que va a exportar este continer
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => (//aqui lleva parentesis porque hace que la funcion retorne impicitamente
					<ProductItem product={product} key={product.id}/>
					//esto lo que hace es que se ejecuta una funcion por cada elemento de el array que dimos de parametro a useState y que tiene los valores de la respuesta de la api  
					//esta funcion lo que hace es renderizar el componente ProductItem
					//key nos permite poder identificar que elemento del virtual dom se esta creando de forma dinamica
					//el product que es un elemento de la etiqueta ProductItem es el que vamos a usar en la pagina de este componente como parametro de la funcion que exporta el componente
				))}
      </div>
    </section>
  );
};

export default ProductList;
