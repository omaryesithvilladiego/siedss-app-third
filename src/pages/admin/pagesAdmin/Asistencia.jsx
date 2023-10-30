import axios from "axios";
import { useEffect, useState } from "react";
import { APIHOST } from '../../../app2.json';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
import AlertDialog from "../alertas/AlertaEstudiantes";
import RefreshIcon from '@mui/icons-material/Refresh';

function EstudiantesAsistencia() {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(true)
  const [open, setOpen] = useState(false);
  const [id_estudiante, setId_Estudiante] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getDatos = () => {
    axios.get(`${APIHOST}estudiante/obtener-estudiantes`)
    .then((response) => {
      setData(false)
      const filteredData = response.data.map((element) => {
        // Filtra los campos innecesarios
        delete element.direccionEstudiante;
        return element;
      });
      setRows(filteredData);
    })
    .catch((err) => {
      console.log(err);
      setData(true)
    });
  }

  useEffect(() => {
    getDatos()
  }, []);

  const columns = [
    {
      title: 'Nombres',
      field: 'nombresEstudiante',
    },
    {
      title: 'Apellidos',
      field: 'apellidosEstudiante',
    },
    {
      title: 'Correo institucional',
      field: 'correoInstitucional',
    },
    {
      title: 'Cedula',
      field: 'cedulaEstudiante',
      type: 'numeric',
    },
    {
      title: 'Codigo',
      field: 'codigoEstudiante',
      type: 'numeric',
    },
    {
      title: 'Campus',
      field: 'campusEstudiante',
    },
    {
      title: 'Acciones',
      field: 'acciones',
      render: (rowData) => (
        <div>
            <Button  style={{ marginRight: '10px' }}  onClick={() => handleEliminar(rowData._id)} variant="outlined" color="error">
  Tomar asistencia
</Button>

         
      
        </div>
      ),
    },
  ];

  const handleEliminar = (id) => {
    setOpen(true)
    setId_Estudiante(id)
  };

  const handleAutenticar = (id) => {
    // Aquí puedes realizar la lógica para autenticar al estudiante con el ID proporcionado
    console.log(`Autenticar estudiante con ID: ${id}`);
  };

  // Filtrar datos según el texto de búsqueda
  const filteredRows = rows.filter((row) => {
    const searchValue = searchText.toLowerCase();
    return columns.some((column) => {
      const cellValue = String(row[column.field]).toLowerCase();
      return cellValue.includes(searchValue);
    });
  });


 

 
    return (

        <div style={{}}>

            {open &&  <AlertDialog id_estudiante={id_estudiante} mensaje={'Eliminar'} open={open} setOpen={setOpen} /> }

           
        


        {data && (
            <Stack sx={{ color: 'grey.500', position:'absolute',  }} spacing={2} direction="row">
         
            <CircularProgress color="success" />
           
            </Stack>
        )}
        
             
             <div style={{display:'flex', width:'20rem', justifyContent:'center', alignItems:'center', gap:'1rem'}}>

             <input
  type="text"
  placeholder="Buscar..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{
    padding: '8px',            // Espaciado interno
    border: '1px solid #ccc',   // Borde con color gris claro
    borderRadius: '4px',        // Bordes redondeados
    width: '300px',            // Ancho del input
    fontSize: '16px',          // Tamaño de fuente
    boxShadow: '0 2px 4px #ccc', // Sombra
    // Otros estilos CSS que desees aplicar
  }}
/>

    <RefreshIcon onClick={() => {
      getDatos()
    }}  /> <span>Actualizar</span>
              
             </div>
      


          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.title}>{column.title}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.field}>
                        {column.render
                          ? column.render(row)
                          : row[column.field]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
         
        </div>
    );

  }

 
      

  

 


export default EstudiantesAsistencia;
