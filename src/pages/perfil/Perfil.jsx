import styles from "./perfil.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function Perfil() {
    return ( 
    <div>

      <div style={{
        display:'flex',
        flexDirection:'row'
      }}>
        <div style={{backgroundColor:'red'}} className="profile-config">

        </div>
        <div style={{backgroundColor:'yellow'}} className="profile-info">

        </div>


      </div>

      



    </div> );
}

export default Perfil;