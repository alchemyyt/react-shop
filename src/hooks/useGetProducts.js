//un custom hook es un hook reutilizable tiene que ir en esta carpet y el archivo tiene que empezar a llamrse use
//para usar useEeffect que nos permite hacer un llamado en este caso una api y colocarlo en un elemento lo primero es importar los elemento que vamos a usar en este caso useEeffect y useState
import { useState, useEffect } from "react";
//axios nos permite llamar un api mas facil
import axios from "axios";
//creamos la funcion que vamos a exportar importante que se llame igual que el archivo para facilidad de importe
const useGetProducts = (API) => {//como trabaja con API y aqui no tenemos url la ponemos de parametro y tambien esto lo hace reutilizable
  //logica de use state para guardar la informacion de use useEffect
  const [products, setProducts] = useState([]);
  //logica de useEeffect, useEffect recibe 2 elementos una funcion anonima donde se va a ejecutar nuestro codigo y segundo un arreglo donde vamos a poder tener diferentes elementos o valores que van a estar escuchando un cambio en este caso no lo vamos a usar
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);
  //lo que hace esta funcion es
  //espera por que es async una respuesta al llamado al la api con axios que hicimos
  //y cambia el valor de useState a lo que respondio la api
  return products //returnamos products aqui y no en la que hicimos en productlist porque aqui no hay un products fuera de la funcion
};
export default useGetProducts;
//borramos lo que creamos en productlist