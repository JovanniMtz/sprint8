import React, { Component } from 'react';



class Totales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoTitulo:props.titulo,
            textoContenido:props.contenido,
            url:props.url,
            numero:props.numero
        }
    }

    componentDidMount(){
        console.log("Me monte");

        this.apiCall();
    }

    apiCall(){
        console.log(this.state.url);
        fetch(this.state.url)
        .then(response=> response.json())
        .then(data=>{
            console.log(data);

            if(this.state.numero==2)
            this.setState(
                {
                    textoContenido:[data.countByCategory.length]
                }
            )
            else
            this.setState(
                {
                    textoContenido:[data.count]
                }
            )
        })
        .catch(error=>console.log("No se termino"+error))
    }
    

    render() {

        let contenido=[];
       
        for(let i=0;i<this.state.textoContenido.length;i++)
        {
            contenido.push(<p>{this.state.textoContenido[i]}</p>);
        }
        
        return (
            
       <div className='Cuadro'>
           <div className='cuadroCabecera'>
              Total de:<br></br> {this.state.textoTitulo}
           </div>
           <div className='cuadroDatos'>
                {contenido}
           </div>
       </div>


        );
    }
}

export default Totales;