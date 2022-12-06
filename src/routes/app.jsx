//improtar react snippet imr
import React from "react";
//importamos Browser router(para identificar la navegacion que estamos haciendo hacia adelante o hacia atras dentro de la pagina),switch(que no permite tener una estructura de control para cada una de la rutas que vamos a tener) y route (y la ruta que vamos a estar trabajando) de react router dom
import { BrowserRouter, Switch, Route } from "react-router-dom";

//importamos los contenedores
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
//para usar useContext importamos los datos de AppContext
import AppContext from "../context/AppContext";
//importamos el custom hook AppContext
import useInitialState from "../hooks/useInitialState";
//steiles component snppet slr;
const app = () => {
  //logica usando el custom hook que importamos
  const initialState = useInitialState(); //variable con el hook que tiene todos los productos que tenemos en el carro 

  return (
    /*para encapsular todo en el objeto de AppContext usamos .provider, le pasamos un value que es nuestro estado lo que vamos a guardar para que lo vea toda la app*/
    <AppContext.Provider value={initialState/*Esto es SUPER IMPORTANTISIMO porque decimos que useInitialState es el state De AppContext */}>
      {/*el primer nivel es BrowserRouter que va a contener toda la application*/}

      <BrowserRouter>
        {/*dentro de BrowserRouter ponemos el layout que contiene nuestros continers*/}
        <Layout>
          {/*layout tiene una etiqueta de apertura y otra de cierre porque va a llevar otras etiquetas dentro y le ponemos dentro la etiqueta switch*/}
          <Switch>
            {/*dentro de switch colocamos route que nos dice como vamos a trabajar con la ruta del layout y lleva parametros y son exact(le dice que va a buscar la ruta que le demos de forma exacta),path(la ruta) y component(que dice cual es el componente que va a descubrir la applicacion) y es el componente que ya creamos*/}
            {/*tiene que existir la ruta Home que el path es solo / para que sea el inicio*/}
            <Route exact path="/" component={Home} />
            {/*login solo tiene una etiqueta y se cierra por la derecha porque no tendra hijos esto si no estuviera dentro de la ruta,pero ahora va dentro de la ruta para tener una ruta distinta a RecoveryPassword*/}
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/password-recovery"
              component={PasswordRecovery}
            />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            {/*y route requiere que pongamos default que es lo que va a mostrar cuando no encuentre una ruta y el path es **/}
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default app;
