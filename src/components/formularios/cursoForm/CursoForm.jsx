import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./curso.module.css"

const Modos = ['Virtual', 'Presencial', 'Mixta'];

function CursoFormulario() {
  const [nombreCurso, setNombreCurso] = useState('');
  const [horasCurso, setHorasCurso] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFinalizacion, setFechaFinalizacion] = useState(new Date());
  const [paisCurso, setPaisCurso] = useState('');
  const [ciudadCurso, setCiudadCurso] = useState('');
  const [modalidadCurso, setModalidadCurso] = useState('');
  const [archivoPdfCurso, setArchivoPdfCurso] = useState(null);

  const handleFileCursoChange = (e) => {
    // Manejar la carga de archivo PDF para el curso aquí
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario de curso a tu servidor o realizar otras acciones.
  };

  return (
    <form style={{display:'flex', flexDirection:'column', gap:'1rem'}} onSubmit={handleSubmit}>
      <TextField
        label="Nombre del Curso"
        variant="outlined"
        fullWidth
        value={nombreCurso}
        onChange={(e) => setNombreCurso(e.target.value)}
      />
      <TextField
        label="Número de Horas del Curso"
        variant="outlined"
        fullWidth
        value={horasCurso}
        onChange={(e) => setHorasCurso(e.target.value)}
      />
      <TextField
        label="Institución"
        variant="outlined"
        fullWidth
        value={institucion}
        onChange={(e) => setInstitucion(e.target.value)}
      />
      <DatePicker
        selected={fechaInicio}
        onChange={(date) => setFechaInicio(date)}
      />
      <DatePicker
        selected={fechaFinalizacion}
        onChange={(date) => setFechaFinalizacion(date)}
      />
      <TextField
        label="País del Curso"
        variant="outlined"
        fullWidth
        value={paisCurso}
        onChange={(e) => setPaisCurso(e.target.value)}
      />
      <TextField
        label="Ciudad del Curso"
        variant="outlined"
        fullWidth
        value={ciudadCurso}
        onChange={(e) => setCiudadCurso(e.target.value)}
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Modalidad del Curso</InputLabel>
        <Select
          label="Modalidad del Curso"
          value={modalidadCurso}
          onChange={(e) => setModalidadCurso(e.target.value)}
        >
          {Modos.map((modo) => (
            <MenuItem key={modo} value={modo}>
              {modo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileCursoChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default CursoFormulario;
