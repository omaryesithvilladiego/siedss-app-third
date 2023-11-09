import React, { useState } from 'react';
import { Paper, Button, Avatar, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const UploadImage = () => {
  const [imageFile, setImageFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Aquí puedes realizar cualquier validación adicional antes de establecer la imagen
    const file = acceptedFiles[0];
    setImageFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const uploadImageToServer = () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('profileImage', imageFile); // 'profileImage' es el nombre del campo en el servidor
        console.log(imageFile)
     
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '80vw', height: 'fit-content', padding: '2rem', margin: '0 auto' }}>
      <Button style={{ width: '2rem', gap: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} variant="contained" color="primary" onClick={uploadImageToServer}>
        Subir Imagen
      </Button>

      <Paper elevation={1} {...getRootProps()} style={{ flex: '1' }}>
        <div style={{ display: 'flex', width: '80%', maxWidth: '100%', margin: '0 auto', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant='h4'>Configuración del perfil</Typography>
          <Typography variant='h5'>Actualizar la foto de perfil</Typography>
          <Typography variant='p'> <strong>1. Click en el círculo para subir la foto</strong> </Typography>

          <input style={{ width: 480, height: 480 }} {...getInputProps()} />

          <div >
            {imageFile ? (
              <Avatar src={URL.createObjectURL(imageFile)} alt="Profile Image" sx={{ width: 260, height: 260 }} />
            ) : (
              <Avatar sx={{ width: 260, height: 260, marginTop: '2rem' }}>
                <CloudUploadIcon />
              </Avatar>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '2rem' }}>
            <KeyboardBackspaceIcon />
            <Typography variant='p'> <strong> 2. Click en subir imagen</strong></Typography>
          </div>
        </div>
      </Paper>
      <Paper elevation={1} style={{ width: '20rem', backgroundColor: 'lightblue' }}>
        <Typography></Typography>
      </Paper>
    </div>
  );
};

export default UploadImage;
