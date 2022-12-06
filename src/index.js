//importamos react
import React from "react";
//importamos el dom de React
import ReactDOM from 'react-dom';
//importamos el componente que creamos 
import App from './routes/app.jsx';

//creamos un recurso hacia donde nuestra app se va a importar
ReactDOM.render(<App />, document.getElementById('app'));//renderizamos el componente y lo obtenemos el elemento con id apps
