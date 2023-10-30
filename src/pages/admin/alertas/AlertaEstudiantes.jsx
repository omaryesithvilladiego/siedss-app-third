import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { APIHOST } from '../../../app2.json';


export default function AlertDialog({id_estudiante, mensaje,open, setOpen, getDatos}) {

 

  const handleClick = () => {
    
    axios.delete(`${APIHOST}estudiante/eliminar-estudiante`, {
      data: {
        _id: id_estudiante,
      }
    }).then((response) => {
      console.log(response.data.msg)
      getDatos()
      setOpen(false)
    }).catch((err) => {console.log(err)})

  };

  const handleClose = () => {
    setOpen(false);
  }
  

  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
     
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {'Estas seguro que deseas ' + mensaje + 'el estudiante con id: ' + id_estudiante}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleClick} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
