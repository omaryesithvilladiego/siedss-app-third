import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegistroFormulario from '../registroForm/RegistroForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const FormContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 400,
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario, como enviar los datos al servidor.
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

<Button style={{padding:'2rem', backgroundColor:''}} onClick={handleOpen}>Registrate Haciendo Click Aquí</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

           <RegistroFormulario />
         
        </Box>
      </Modal>

        


    <FormContainer style={{display:'flex', justifyContent:'center', alignItems:'center',  height:'80vh', flexDirection:'column'}} >
      <FormPaper  elevation={3}>
        <Typography variant="h6">Inicio de Sesión</Typography>
        <Form  onSubmit={handleSubmit}>
          <TextField
            label="Nombre de Usuario"
            variant="outlined"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Iniciar Sesión
          </Button>
        </Form>
      </FormPaper>
    </FormContainer>
    </div>
  );
}

export default LoginForm;
