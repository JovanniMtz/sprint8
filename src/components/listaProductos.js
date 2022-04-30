import React, { Component } from 'react';

class listaProductos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoTitulo:props.titulo,
            textoContenido:props.contenido,
            url:props.url, 
           
        }
    }

    componentDidMount(){
        console.log("Me monte");

        this.apiCall();
    }
// estructural =====libreria, funciones== curso de introduccion a la programacion function 
// orientada a objetos   clases y dentro de las clases se tienen metodos
    apiCall(){//metodo ==== otra funcion 
        console.log(this.state.url);
        fetch(this.state.url)// fetch es una promesa, que es asincrona del codigo, espera al otro servidor
        .then(response=> response.json())//conveier a json
        .then(data=>{
            console.log(data);
            this.setState(//actualizar el estado 
                {
                    textoContenido:data.products
                })

        })
        .catch(error=>console.log("No se termino"+error))
    }
    

    render() {

        let contenido=[];
       
        for(let i=0;i<this.state.textoContenido.length;i++)
        {
            contenido.push(<p> -- {this.state.textoContenido[i].Nombre}</p>);
        }
        
        return (
            
       <div className='Cuadro'>
           <div className='cuadroCabecera'>
             {this.state.textoTitulo}
           </div>
           <div className='cuadroDatos'>
                {contenido}
           </div>
       </div>


        );
    }
}

export default listaProductos ;