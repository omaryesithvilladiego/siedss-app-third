
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
import AlertDialog from "../alertas/AlertaEstudiantes";
import RefreshIcon from '@mui/icons-material/Refresh';
import { requestWithTokenGet } from "../../../authentication/helper/helper";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { ro } from "date-fns/locale";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function PonenciasAdmin() {

  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(true)
  const [open, setOpen] = useState(false);
  const [id_estudiante, setId_Estudiante] = useState(null)
  const [mostrarFile, setMostrarFile] = useState(null)
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const aprobarPonencia = (_id) => {

    axios.post(`${APIHOST}ponencia/aprobar-ponencia`, {
      _id:_id
    })
    .then((response) => {
      console.log(response)
    }).
    catch((err) => {
      console.log(err)
    })

    getDatos()

  }

  const getDatos = () => {
    requestWithTokenGet.get(`ponencia/obtener-ponencias`)
    .then((response) => {
      setData(false)
      
     const datos = response.data
     setRows(datos)
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
      title:'status',
      field:'status',
      render: (rowData) => (
        

       <>  <RadioButtonCheckedIcon style={{color:rowData.estadoPonencia === 'Pendiente' ? 'yellowgreen' : rowData.estadoPonencia === 'Aprobada' ? 'green' :false}} /> </>
      ),

    },
    {
      title:'Estado',
      field:'estadoPonencia',
    

    },
    {
      title: 'Nombre',
      field: 'nombreEventoPonencia',
    },
    {
      title: 'Modalidad',
      field: 'modalidadEventoPonencia',
    },
    {
      title: 'Pais',
      field: 'paisEventoPonencia',
    },
    {
      title: 'Ciudad',
      field: 'ciudadEventoPonencia',
    },
    {
      title: 'Certificado',
      field: 'certificadoEventoUrlPonencia',
      render: (rowData) => (
        <Button color="success" onClick={() => {
          handleOpen()
          setMostrarFile(rowData.certificadoEventoUrlPonencia)
        }} >
          Ver Certificado
        </Button>
      ),
    },
    {
      title: 'Poster',
      field: 'posterEventoUrlPonencia',
      render: (rowData) => (
        <Button color="success" onClick={() => {
          handleOpen()
          setMostrarFile(rowData.posterEventoUrlPonencia)
        }} >
          Ver Poster
        </Button>
      ),
    },
    {
      title: 'Presentacion',
      field: 'presentacionEventoUrlPonencia',
      render: (rowData) => (
        <Button color="success" onClick={() => {
          handleOpen()
          setMostrarFile(rowData.presentacionEventoUrlPonencia)
        }} >
          Ver Presentacion
        </Button>
      ),
    },
    {
      title: 'Imagen',
      field: 'imagenMemoriasUrlPonencia',
      render: (rowData) => (
        <Button color="success" onClick={() => {
          handleOpen()
          setMostrarFile(rowData.imagenMemoriasUrlPonencia)
        }} >
          Ver Imgen
        </Button>
      ),
    },
    {
      title: 'Fecha',
      field: 'fechaPonencia',
    },
    {
      title: 'Acciones',
      field: 'acciones',
      render: (rowData) => (
        <div>
          <Button  style={{ marginRight: '10px' }}  onClick={() => aprobarPonencia(rowData._id)} variant="outlined" color="success"> 
    Aprobar
</Button>
    
         
      
        </div>
      ),
    },
  ];

  // Filtrar datos según el texto de búsqueda
  const filteredRows = rows.filter((row) => {
    const searchValue = searchText.toLowerCase();
    return columns.some((column) => {
      const cellValue = String(row[column.field]).toLowerCase();
      return cellValue.includes(searchValue);
    });
  });










  return (     <div style={{}}>

    {open &&  <AlertDialog id_estudiante={id_estudiante} mensaje={'Eliminar'} open={open} setOpen={setOpen} getDatos={getDatos} /> }

   



{data && (
    <Stack sx={{ width:'100%',height:'80%', color: 'grey.500', position:'absolute', backgroundColor:'transparent' , display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }} spacing={2} direction="row">
 
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


  <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        
        <Fade in={openModal}>
          <Box sx={style}>
 
  <embed src={mostrarFile}  width="1900" height="600"  type="application/pdf"  />
  




          </Box>
        </Fade>
      </Modal>
    </div>


 


 
</div>);
}

export default PonenciasAdmin;
