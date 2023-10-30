import { useEffect, useState } from 'react';
import {Link, useRouteMatch} from 'react-router-dom'

const data = [
    {
        id:0,
        nombre: 'Desarrollo de la asociatividad',
        fechaPeticion: '08/12/2012',
        estado: ['Denegada', null]


    },
    {
        id:1,
        nombre: 'Desarrollo de la asociatividad',
        fechaPeticion: '08/12/2012',
        estado: ['Pendiente', null]


    },
    {
        id:2,
        nombre: 'Desarrollo de la asociatividad',
        fechaPeticion: '08/12/2012',
        estado: ['Denegada', null]


    }
]

function EstadosPonencia({path}) {



    
  

        data.forEach((object) => {
            console.log(object.estado)
            if(object.estado[0] == 'Aprobada') {
                object.estado[1] = 'green'
            } else if(object.estado[0] == 'Denegada') {
                object.estado[1] = 'red'
            } else if(object.estado[0] == 'Pendiente') {
                object.estado[1] = 'yellow'
            }

        })

    
   




    return ( <>
    <div>
    <div style={{display:'flex', gap:'2rem', width:'100%', height:'100%', flexDirection:'column'}}>
        {data.map(object => {
            return (
               
                 
                <div style={{width:'60%', height:'100%'}} key={object.id}>
                   
                    <div style={{display:'flex', gap:'.3rem', alignItems:'center'}}>
                        <div style={{width:'.8rem', height:'5rem', backgroundColor:object.estado[1] }}></div>
                        <div style={{}}>
                        <h2> {object.nombre} </h2>
                    <span>Fecha de Transaccion: <strong> {object.fechaPeticion} </strong></span>
                    <p>Estado: <span><strong> {object.estado[0]} </strong></span></p>
                        </div>
                    
                    </div>
                    
                </div>
               
               
            )
        })}
         </div>

    <Link to={`${path}`}>Volver</Link> <br />

    </div>
    
    
    
                
    </> );
}

export default EstadosPonencia;