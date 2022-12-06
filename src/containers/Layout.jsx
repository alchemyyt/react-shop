//layout es un componente que va a recibir hijos y va a ser la parte principal de nuestro proyecto
import React from 'react';

const Layout = ({children}) => {//importante las llaves
  return (
    <div className='Layout'>
      {children}
    </div>//este div recibe un parametro como hijo
  );
}

export default Layout;