import styles from "./perfil.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Perfil() {
    return ( 
    <div style={{width:'100%', height:'100%'}}> 

<Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 600,
          height: 400,
        },
      }}
    >
      <Paper elevation={3} >

        <h2>Omar Yesith Villadiego</h2>
        <p>Miembro de siedss desde el 10 de octubre de 2022</p>
        

     
      </Paper>
     
    </Box>


    </div> );
}

export default Perfil;