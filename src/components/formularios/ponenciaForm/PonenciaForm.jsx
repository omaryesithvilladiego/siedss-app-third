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
import {Link, useRouteMatch} from "react-router-dom"
import {requestWithToken} from '../../../authentication/helper/helper'

import { APIHOST } from "../../../app2.json"

const Modos = ['Virtual', 'Presencial', 'Mixta'];

function PonenciaFormulario() {
  const [nombrePonencia, setNombrePonencia] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [archivoPdf1, setArchivoPdf1] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [archivoPdf2, setArchivoPdf2] = useState(null);
  const [fechaPonencia, setFechaPonencia] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);
  const [idUsuarioPonencia, setIdUsuarioPonencia] = useState(12345698575545525);
  const [loaderPonencia, setLoaderPonencia] = useState(false) // Defino las variables para controlar el cargar la ponencia
  const [exito, setExito] = useState(null)

  let {path, url} = useRouteMatch()


  // Agregar estados de error
  const [nombreError, setNombreError] = useState('');
  const [nombreErrorBoolean, setNombreErrorBoolean] = useState(true);

  const [modalidadError, setModalidadError] = useState('');
  const [modalidadErrorBoolean, setModalidadErrorBoolean] = useState(true);

  const [paisError, setPaisError] = useState('');
  const [paisErrorBoolean, setPaisErrorBoolean] = useState(true);

  const [ciudadError, setCiudadError] = useState('');
  const [ciudadErrorBoolean, setCiudadErrorBoolean] = useState(true);

  const [fechaError, setFechaError] = useState('');
  const [fechaErrorBoolean, setFechaErrorBoolean] = useState(true);

  const [file1Error, setFile1Error] = useState('');
  const [file1ErrorBoolean, setFile1ErrorBoolean] = useState(true);

  const [file2Error, setFile2Error] = useState('');
  const [file2ErrorBoolean, setFile2ErrorBoolean] = useState(true);

  const [file3Error, setFile3Error] = useState('');
  const [file3ErrorBoolean, setFile3ErrorBoolean] = useState(true);

  const [file4Error, setFile4Error] = useState('');
  const [file4ErrorBoolean, setFile4ErrorBoolean] = useState(true);

  // Estado para verificar si el formulario es válido
  const [formularioValido, setFormularioValido] = useState(true);

  const handleFile1Change = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile2(file);
  };

  const handleFile2Change = (e) => {
    const file = e.target.files[0];
    setSelectedFile3(file);
  };

  const handleFile3Change = (e) => {
    const file = e.target.files[0];
    setSelectedFile4(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar campos vacíos y establecer errores si es necesario
    if (!nombrePonencia) {
      setNombreError('El nombre de la ponencia es obligatorio');
      setNombreErrorBoolean(false);
    } else {
      setNombreErrorBoolean(true);
      setNombreError('');
    }

    if (!modalidad) {
      setModalidadError('La modalidad de la ponencia es obligatoria');
      setModalidadErrorBoolean(false);
    } else {
      setModalidadError('');
      setModalidadErrorBoolean(true);
    }

    if (!pais) {
      setPaisError('El país de la ponencia es obligatorio');
      setPaisErrorBoolean(false);
    } else {
      setPaisErrorBoolean(true);
      setPaisError('');
    }

    if (!ciudad) {
      setCiudadError('La ciudad de la ponencia es obligatoria');
      setCiudadErrorBoolean(false);
    } else {
      setCiudadErrorBoolean(true);
      setCiudadError('');
    }

    if (!fechaPonencia) {
      setFechaErrorBoolean(false);
      setFechaError('La fecha de la ponencia es obligatoria');
    } else {
      setFechaError('');
      setFechaErrorBoolean(true);
    }

    if (!selectedFile) {
      setFile1Error('El certificado de la ponencia es obligatorio');
      setFile1ErrorBoolean(false);
    } else {
      setFile1ErrorBoolean(true);
      setFile1Error('');
    }

    if (!selectedFile2) {
      setFile2Error('El certificado de la ponencia es obligatorio');
      setFile2ErrorBoolean(false);
    } else {
      setFile2ErrorBoolean(true);
      setFile2Error('');
    }

    if (!selectedFile3) {
      setFile3Error('La presentación del evento es obligatoria');
      setFile3ErrorBoolean(false);
    } else {
      setFile3ErrorBoolean(true);
      setFile3Error('');
    }

    if (!selectedFile4) {
      setFile4Error('La imagen memorias es obligatoria');
      setFile4ErrorBoolean(false);
    } else {
      setFile4ErrorBoolean(true);
      setFile4Error('');
    }

    // Verificar si hay errores en el formulario
    if (!nombrePonencia || !modalidad || !pais || !ciudad || !fechaPonencia) {
      setFormularioValido(false);
      return; // No envíes la solicitud si hay errores
    }

    const formData = new FormData()

    formData.append('nombreEventoPonencia', nombrePonencia)
    formData.append("modalidadEventoPonencia", modalidad)
    formData.append("paisEventoPonencia", pais)
    formData.append("ciudadEventoPonencia", ciudad)
    formData.append("certificadoEventoUrlPonencia", selectedFile)
    formData.append('posterEventoUrlPonencia', selectedFile2)
    formData.append('presentacionEventoUrlPonencia', selectedFile3)
    formData.append('imagenMemoriasUrlPonencia', selectedFile4)
    formData.append('idEstudiantePonencia', idUsuarioPonencia)
    formData.append('fechaPonencia', fechaPonencia)
    setLoaderPonencia(true)
    
    requestWithToken.post("ponencia/create-ponencia", formData)
      .then((response) => {
        console.log(response)
        setExito(response.data.exito)
        setLoaderPonencia(false)

        // Limpiar los campos después del envío exitoso
        setNombrePonencia('');
        setModalidad('');
        setPais('');
        setCiudad('');
        setFechaPonencia(null);
        setSelectedFile(null);
        setSelectedFile2(null);
        setSelectedFile3(null);
        setSelectedFile4(null);

        setTimeout(() => {
          setExito(false)
        }, 4000);
      })
      .catch((err) => {
        console.log(err)
      })

  };

  return (
    <form className={styles.formulario} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '40rem', overflow: 'scroll' }} onSubmit={handleSubmit}>

<Link  to={`${path}/estado-ponencias`}>Ver estado de Poencias</Link>


      {exito && <Alert style={{ position: 'absolute' }} severity='success'>La ponencia se guardó correctamente</Alert>}
      {loaderPonencia &&
        <Box sx={{ display: 'flex', position: 'absolute' }}>
          <CircularProgress />
        </Box>
      }

     
      <CoPresentIcon /> <h2>Agregar Ponencia</h2>
      <TextField
        label="Nombre de la Ponencia"
        variant="outlined"
        fullWidth
        value={nombrePonencia}
        onChange={(e) => setNombrePonencia(e.target.value)}
      />

      {!nombreErrorBoolean && <Alert severity="error">{nombreError}</Alert>}

      <FormControl variant="outlined" fullWidth>

        <InputLabel>Modalidad de la Ponencia</InputLabel>

        <Select
          label="Modalidad de la Ponencia"
          value={modalidad}
          onChange={(e) => setModalidad(e.target.value)}
        >

          {Modos.map((modo) => (
            <MenuItem key={modo} value={modo}>
              {modo}
            </MenuItem>
          ))}
        </Select>

        {!modalidadErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">{modalidadError}</Alert>}
      </FormControl>
      <TextField
        label="País de la Ponencia"
        variant="outlined"
        fullWidth
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      />
      {!paisErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">{paisError}</Alert>}
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />

      {!ciudadErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">{ciudadError}</Alert>}

      <DatePicker
        selected={fechaPonencia}
        onChange={(date) => setFechaPonencia(date)}
      />
      {!fechaErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">
        {fechaError}
      </Alert>}

      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleFile1Change}
          id="fileInput"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput">
          <IconButton component="span">
            <CloudUploadIcon />
          </IconButton>
          Subir Certificado
        </label>
        {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
      </div>

      {!file1ErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">
        {file1Error}
      </Alert>}

      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleImageChange}
          id="fileInput2"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput2">
          <IconButton component="span">
            <UploadFileIcon />
          </IconButton>
          Subir Poster
        </label>
        {selectedFile2 && <p>Archivo seleccionado: {selectedFile2.name}</p>}
      </div>

      {!file2ErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">
        {file2Error}
      </Alert>}

      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleFile2Change}
          id="fileInput3"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput3">
          <IconButton component="span">
            <UploadIcon />
          </IconButton>
          Subir presentacion evento
        </label>
        {selectedFile3 && <p>Archivo seleccionado: {selectedFile3.name}</p>}
      </div>

      <DatePicker
        selected={fechaPonencia}
        onChange={(date) => setFechaPonencia(date)}
      />

      {!file3ErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">
        {file3Error}
      </Alert>}

      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleFile3Change}
          id="fileInput4"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput4">
          <IconButton component="span">
            <UploadIcon />
          </IconButton>
          Subir Imagen Memorias
        </label>
        {selectedFile4 && <p>Archivo seleccionado: {selectedFile4.name}</p>}
      </div>

      {!file4ErrorBoolean && <Alert style={{ marginTop: '1rem' }} severity="error">
        {file4Error}
      </Alert>}

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default PonenciaFormulario;
