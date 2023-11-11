import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadIcon from '@mui/icons-material/Upload';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import styles from "./ponenciaform.module.css"
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import  {APIHOST}  from "../../../app2.json"

const Modos = ['Virtual', 'Presencial', 'Mixta'];

function ProyectoFormulario() {

  const [exito, setExito] = useState(null)
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [objetivosProyecto, setObjetivosProyecto] = useState('');
  const [convocatoriaProyecto, setConvocatoriaProyecto] = useState('');
  const [resultadoProyecto, setResultadoProyecto] = useState('');

  const [certificadoResultadoPremioUrl, setCertificadoResultadoPremioUrl] = useState(null);
  const [actaTrabajoGradoUrl, setActaTrabajoGradoUrl] = useState(null);


  const [actaInvestigacionUrl, setActaInvestigacionUrl] = useState(null);
  const [repositorioUcc, setRepositorioUcc] = useState(null);
  const [idEstudianteProyecto, setidEstudianteProyecto] = useState(123456789);
  

  
  // Agregar estados de error
  const [nombreProyectoErrorBoolean, setNombreProyectoErrorBoolean] = useState(true);
  const [objetivosProyectoErrorBoolean, setObjetivosProyectoErrorBoolean] = useState(true);
  const [convocatoriaProyectoErrorBoolean, setConvocatoriaProyectoErrorBoolean] = useState(true);
  const [resultadoProyectoErrorBoolean, setResultadoProyectoErrorBoolean] = useState(true);
  const [certificadoResultadoPremoUrlErrorBoolean, setCertificadoResultadoPremoUrlErrorBoolean] = useState(true);
  const [actaTrabajoGradoUrlErrorBoolean, setActaTrabajoGradoUrlErrorBoolean] = useState(true);
  const [actaInvestigacionUrlErrorBoolean, setActaInvestigacionUrlErrorBoolean] = useState(true);
  const [repositorioUccErrorBoolean, setRepositorioUccErrorBoolean] = useState(true);
  const [idEstudianteProyectoErrorBoolean, setidEstudianteProyectoErrorBoolean] = useState(true);
  


  // Estado para verificar si el formulario es válido
  const [formularioValido, setFormularioValido] = useState(true);

  const [loaderProyecto, setLoaderProyecto] = useState(false)

  const handleFile1Change = (e) => {
    const file = e.target.files[0];
    setCertificadoResultadoPremioUrl(file)
  };

  const handleFile2Change = (e) => {
    const file = e.target.files[0];
    setActaTrabajoGradoUrl(file)
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    // Verificar campos vacíos y establecer errores si es necesario
    if (!nombreProyecto) {
      
      setNombreProyectoErrorBoolean(false)
    } else {
      setNombreProyectoErrorBoolean(true)
     
    }

    if (!objetivosProyecto) {
     
      setObjetivosProyectoErrorBoolean(false)
    } else {
      setObjetivosProyectoErrorBoolean(true)
    }

    if (!convocatoriaProyecto) {
   
      setConvocatoriaProyectoErrorBoolean(false)
    } else {
      setConvocatoriaProyectoErrorBoolean(true)
  
    }

    if (!resultadoProyecto) {
   
      setResultadoProyectoErrorBoolean(false)
    } else {
      setResultadoProyectoErrorBoolean(true)
    }

    if (!certificadoResultadoPremioUrl) {
      setCertificadoResultadoPremoUrlErrorBoolean(false)
     
    
    } else {

      setCertificadoResultadoPremoUrlErrorBoolean(true)

    }
    

     
   
      
     
      
      


 // Verificar si hay errores en el formulario
 if (
  !nombreProyecto ||
  !objetivosProyecto ||
  !convocatoriaProyecto ||
  !resultadoProyecto ||
  !certificadoResultadoPremioUrl

) {
  setFormularioValido(false);
  return; // No envíes la solicitud si hay errores
}

    const formData = new FormData()

    formData.append('nombreProyecto', nombreProyecto)
    formData.append("objetivosProyecto", objetivosProyecto)
    formData.append("convocatoriaProyecto", convocatoriaProyecto)

    formData.append("resultadoProyecto", resultadoProyecto)
    formData.append("certificadoResultadoPremioUrl", certificadoResultadoPremioUrl)
    formData.append('actaTrabajoGradoUrl', actaTrabajoGradoUrl)
    formData.append('actaInvestigacionUrl', actaInvestigacionUrl)
    formData.append('repositorioUcc', repositorioUcc)
    formData.append('idEstudianteProyecto', idEstudianteProyecto)
    setLoaderProyecto(true)
    axios.post(`${APIHOST}ponencia/create-ponencia`, formData)
    .then((response) => {
      console.log(response)
      setExito(response.data.exito)
      setLoaderProyecto(false)
    })
    .catch((err) => {
      console.log(err)
    })
    
  };

  return (
    <form  style={{display:'flex', flexDirection:'column', gap:'1rem', height:'40rem', overflow:'scroll'}} onSubmit={handleSubmit}>

      
     {exito && <Alert style={{position:'absolute'}} severity='success'>El proyecto se guardó exitosamente </Alert> } 
     
     {  loaderProyecto &&
       <Box sx={{ display: 'flex', position:'absolute' }}>
       <CircularProgress />
     </Box>
     }
     
   



      <CoPresentIcon /> <h2>Agregar Proyecto</h2>
      <TextField
        label="Nombre Proyecto"
        variant="outlined"
        fullWidth
        value={nombreProyecto}
        onChange={(e) => setNombreProyecto(e.target.value)}
      />

<TextField
        label="Objetivos Proyecto"
        variant="outlined"
        fullWidth
        value={objetivosProyecto}
        onChange={(e) => setObjetivosProyecto(e.target.value)}
      />




     
     
      <div className="content-input-certificado">
        
      
      <input
        type="file"
        onChange={handleFile1Change}
        id="fileInput"
        style={{ display: 'none' }}
      />
        <label style={{display:'flex', flexDirection:'row', alignItems:'center'}} htmlFor="fileInput">
        <IconButton component="span">
          <CloudUploadIcon />
        </IconButton>
        Subir Certificado Poyecto
      </label>

        {certificadoResultadoPremioUrl && <p>Archivo seleccionado: {certificadoResultadoPremioUrl.name}</p>}
      </div>

      
     
      <div className="content-input-certificado">
        
      
      <input
        type="file"
        onChange={handleFile2Change}
        id="fileInput2"
        style={{ display: 'none' }}
      />
        <label style={{display:'flex', flexDirection:'row', alignItems:'center'}} htmlFor="fileInput2">
        <IconButton component="span">
          <UploadFileIcon />
        </IconButton>
        Subir Acta Trabajo de Grado Url (Opcional)
      </label>

        {actaInvestigacionUrl && <p>Archivo seleccionado: {actaInvestigacionUrl.name}</p>}
      </div>

  
       

      
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default ProyectoFormulario;
