import React, { Component, useState } from 'react'; // esto es casi un estandar 
//para crear un componente  Statefull cramos una constante con el nombre del componente
const button = () =>{//la constante tiene una funcion que retorna el componente
  //los componentes tienes estados y la logica de estos va arriba del return
  const [name,setName] = useState('hola mundo');//con esta constante trabajamos con los hooks
  //tenemos 2 opciones para trabajar con states  una es llamandola directamente o importandola en la parte de arriba que es este caso name es el nombre del estado y setName es por lo que se va a cambiar name
  return ( // lo que escribimos aqui  es jsx
    <div>
      <h1>{name}</h1>
    </div>
  );
}
//para hacer un componente que no tenga estado es quitando todas la llaves y el return  Stateless
const buttonNoState = () => (
  <div>
    hello world
  </div>);
  //o
  const buttonNoState2 = ({text}) => <buttonRed text={text} />;
  const buttonNoState3 = () => <buttonRed/>
  const buttonNoState4 = () =>(//solo se mostrata cuando haga render el elemento
    <div>
      {name}
    </div>
  )
  
  //Existen otros tipos de componentes como las classes Son la manera anterior a los React Hooks en la cual usábamos los componentes de React
  class App extends Component{//podriamos usar la en esta parte React.Component o usar directamente component porque lo importe arriba
    constructor(){ //esto ya no se usa pero puedes verlo si le vas a dar mantenimiento a apps viejas
      super();
      this.sate = {
          count: 0
      };
    }
    // también pueden o no llevar estado
    render(){
      return(
        <div>
          Hello world
        </div>
      )
    }
  }
  //HOC (high order components) tienen una funcionalidad muy particular reciben un componente extienden su funcionalidad y retornan un componente compuesto por lo que viene siendo un componente que encapsula al componente que recibe y se compone para que puedas tener funcionalidades muy especificas o tener diferentes formas con las que trabajar esto tambien es algo antiguo
  function ComponentWrapper(WrapperComponent) {//el componente hoc es una funcion que recibe de parametro un componente
    class Wrapper extends Component {//extends quiere decir que hereda de comopnent en este caso
      render () {
          return <WrapperComponent {...this.props} />;
      }
  }

  return Wrapper;
}