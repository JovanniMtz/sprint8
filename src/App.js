import logo from './logo.svg';
//import './App.css';


import './components/main.css'

import Cabecera from './components/Cabecera';
import Totales from './components/Totales';
import Ultimo from './components/Ultimo';
import ListaProductos from './components/listaProductos';
function App() {
  return (
    <div className="App">
      <Cabecera/>
<div className='cuadroMain'>
      <div className='cuadroTotales'>
      <Totales titulo={"Productos"} contenido={[""]} url={"http://localhost:3001/api/products/"} numero={1}/>
      <Totales titulo={"Usuarios"} contenido={[""]} url={"http://localhost:3001/api/users/"} numero={1}/>
      <Totales titulo={"Categorias"} contenido={[""]} url={"http://localhost:3001/api/products/"} numero={2}/>
      </div>

      <div className='cuadroUltimo'>
       
       <Ultimo titulo={"Ultimo Producto"} contenido={[""]}  url={"http://localhost:3001/api/products/"} numero={1}/>
       <Ultimo titulo={"Ultimo Usuario"} contenido={[""]}  url={"http://localhost:3001/api/users/"} numero={2} />
        
      <ListaProductos titulo={"Lista de Productos"} contenido={[""]}  url={"http://localhost:3001/api/products/"}  />
      </div>
      </div>
    </div>
  );
}

export default App;
