//para trabajar con useContext creamos esta carpeta y este archivo
import react from 'react';//importamos react
//creamos una variable, createContext Crea un objeto de contexto. Cuando React representa un componente que se suscribe a este objeto de contexto, leerá el valor de contexto actual de la coincidencia más cercana que Providerse encuentra arriba en el árbol. en este caso initialState que tiene los productos del carro
const AppContext = react.createContext({});//importante poner el react,

export default AppContext;


//Para crear un contexto es muy fácil. Lo difícil es integrarlo. Solamente necesitamos crear una carpeta llamada context donde guardaremos nuestro archivo context.js donde se irán guardando los datos. Creamos una constante llamada AppContext donde igualamos a React.createContext({}). Es decir, le decimos a react que cree un contexto en AppContext, e inicialemente no tiene un valor exacto. Por ello, le pasamos un objeto vacío. Al final, terminamos exportando este contexto.


