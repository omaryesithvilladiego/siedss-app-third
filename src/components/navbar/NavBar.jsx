import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Link}  from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarRateIcon from '@mui/icons-material/StarRate';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {useRouteMatch} from "react-router-dom";
import styleCss from "./nav-bar.module.css";
import PonenciaFormulario from '../formularios/ponenciaForm/PonenciaForm';
import CursoFormulario from '../formularios/cursoForm/CursoForm';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ProyectoFormularioFormulario from '../formularios/proyectoForm/ProyectoForm';
import ProyectoFormulario from '../formularios/proyectoForm/ProyectoForm';
import {Switch, Route,  BrowserRouter} from "react-router-dom"
import { Component } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:'25px',
    boxShadow: 24,
    p: 4,
    transition:'.5s'
  };

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  let {path, url }= useRouteMatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  

  //Ponencia
  const [anchorElPonencia, setAnchorElPonencia] = React.useState(null);
  const isMenuOpenPonencia = Boolean(anchorElPonencia);
  const handlePonenciaMenuOpen = (event) => 
  {
   
    setAnchorElPonencia(event.currentTarget)
  }
  const handleMenuClosePonencia = () => {
    setAnchorElPonencia(null);
    handleMobileMenuClose();
  };

  
  //Proyecto
  const [anchorElProyecto, setAnchorElProyecto] = React.useState(null);
  const isMenuOpenProyecto = Boolean(anchorElProyecto);
  const handleProyectoMenuOpen = (event) => {
    setAnchorElProyecto(event.currentTarget)
  }
  const handleMenuCloseProyecto = () => {
    setAnchorElProyecto(null);
    handleMobileMenuClose();
  };

  

  //Curso
  const [anchorElCurso, setAnchorElCurso] = React.useState(null);
  const isMenuOpenCurso = Boolean(anchorElCurso);
  const handleCursoMenuOpen = (event) => {
    setAnchorElCurso(event.currentTarget)
  }
  const handleMenuCloseCurso = () => {
    setAnchorElCurso(null);
    handleMobileMenuClose();
  };

  
  //Premio
  const [anchorElPremio, setAnchorElPremio] = React.useState(null);
  const isMenuOpenPremio = Boolean(anchorElPremio);
  const handlePremioMenuOpen = (event) => {
    setAnchorElPremio(event.currentTarget)
  }
  const handleMenuClosePremio = () => {
    setAnchorElPremio(null);
    handleMobileMenuClose();
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}> <Link to={`${path}/mi-perfil`}>Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );



  
    //Premio
    const [openPremioForm, setOpenPremioForm] = React.useState(false);
    const handleOpenPremioForm = () => setOpenPremioForm(true);
    const handleClosePremioForm = () => setOpenPremioForm(false);
  
    const menuPremioId = 'primary-search-account-menu-Premio';
    const renderMenuPremio = (
      <Menu
      anchorEl={anchorElPremio}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuPremioId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpenPremio}
      onClose={handleMenuClosePremio}
    >
      <MenuItem onClick={() => {
          handleOpenPremioForm()
          handleMenuClosePremio()
      }}>Agregar Premio</MenuItem>
    </Menu>
    )


  


    //Proyecto
    const [openProyectoForm, setOpenProyectoForm] = React.useState(false);
    const handleOpenProyectoForm = () => setOpenProyectoForm(true);
    const handleCloseProyectoForm = () => setOpenProyectoForm(false);
  
    const menuProyectoId = 'primary-search-account-menu-Proyecto';
    const renderMenuProyecto = (
      <Menu
      anchorEl={anchorElProyecto}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuProyectoId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpenProyecto}
      onClose={handleMenuCloseProyecto}
    >
      <MenuItem onClick={() => {
          handleOpenProyectoForm()
          handleMenuCloseProyecto()
      }}>Agregar Proyecto</MenuItem>
    </Menu>
    )
  
  




  //Curso
  const [openCursoForm, setOpenCursoForm] = React.useState(false);
  const handleOpenCursoForm = () => setOpenCursoForm(true);
  const handleCloseCursoForm = () => setOpenCursoForm(false);

  const menuCursoId = 'primary-search-account-menu-Curso';
  const renderMenuCurso = (
    <Menu
    anchorEl={anchorElCurso}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuCursoId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpenCurso}
    onClose={handleMenuCloseCurso}
  >
    <MenuItem onClick={() => {
        handleOpenCursoForm()
        handleMenuCloseCurso()
    }}>Agregar Curso</MenuItem>
  </Menu>
  )



  //Ponencia
  const [openPonenciaForm, setOpenPonenciaForm] = React.useState(false);
  const handleOpenPonenciaForm = () => setOpenPonenciaForm(true);
  const handleClosePonenciaForm = () => setOpenPonenciaForm(false);

  const menuPonenciaId = 'primary-search-account-menu-ponencia';
  const renderMenuPonencia = (
    <Menu
    anchorEl={anchorElPonencia}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuPonenciaId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpenPonencia}
    onClose={handleMenuClosePonencia}
  >
    <MenuItem onClick={() => {
        handleOpenPonenciaForm()
        handleMenuClosePonencia()
       
    }}>Agregar Ponencia</MenuItem>
  </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />

            
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img style={{borderRadius:'20px'}} src="http://localhost:4000/public/imgUrl-1696172322603-882446960.jpeg" alt="img" width="35px" height="35px" />
        </IconButton>
       <p>Profile</p>
        
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 2, }}>
      <AppBar style={{ backgroundColor:'#044d74ae', color:'white', boxShadow:'none', height:'37vh'}} position="static">
        <Toolbar>


          <IconButton
            size="large"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            
          </IconButton>
            
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />


          <Box sx={{ display: { xs: 'none', md: 'flex', gap:'1rem' } }}>



            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  badgeContent={2} color="error">
                <CoPresentIcon onClick={handlePonenciaMenuOpen} aria-controls={menuPonenciaId} />
                <Modal
        open={openPonenciaForm}
        onClose={handleClosePonenciaForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BrowserRouter>
          <Switch>
           
            <Route exact path={`${path}`} component={PonenciaFormulario} />
            <Route path={`${path}/estado-ponencias`} component={() => {
              return (
                
                <>

<Link to={`${path}`}>Volver</Link> <br />
                
                Estados</>
              )
            }} />

           
          </Switch>
          </BrowserRouter>
         
        </Box>
      </Modal>


              </Badge>
            </IconButton>

            
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  badgeContent={2} color="error">
                <BookmarkBorderIcon  onClick={handleProyectoMenuOpen} aria-controls={menuProyectoId} />
                <Modal
        open={openProyectoForm}
        onClose={handleCloseProyectoForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <ProyectoFormulario />
        
        </Box>
      </Modal>


              </Badge>
            </IconButton>




             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  badgeContent={2} color="error">
                <StarRateIcon onClick={handleCursoMenuOpen} aria-controls={menuCursoId} />
                <Modal
        open={openCursoForm}
        onClose={handleCloseCursoForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <CursoFormulario />
        
        
        </Box>
      </Modal>


              </Badge>
            </IconButton>

            
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  badgeContent={2} color="error">
                <EmojiEventsIcon onClick={handlePremioMenuOpen} aria-controls={menuPremioId} />
                <Modal
        open={openPremioForm}
        onClose={handleClosePremioForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

         
          <h1>premio</h1>
        
        </Box>
      </Modal>


              </Badge>
            </IconButton>


            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  badgeContent={2} color="error">
                <StarRateIcon onClick={handlePonenciaMenuOpen} aria-controls={menuPonenciaId} />
                <Modal
        open={openPonenciaForm}
        onClose={handleClosePonenciaForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        
        </Box>
      </Modal>


              </Badge>
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  badgeContent={2} color="error">
                <MilitaryTechIcon onClick={handlePonenciaMenuOpen} aria-controls={menuPonenciaId} />
                <Modal
        open={openPonenciaForm}
        onClose={handleClosePonenciaForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        
        </Box>
      </Modal>


              </Badge>
            </IconButton>  */}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
               
                <img style={{borderRadius:'20px'}} src="http://localhost:4000/public/imgUrl-1696172322603-882446960.jpeg" alt="img" width="35px" height="35px" />

            </IconButton>


          </Box>

          


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>




        </Toolbar>


            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-end'}} className={styleCss.contentLogo}>
            <h1>SIEDSS</h1>
            </div>

        





        <div style={{
            width:'100%',
            display:'flex',
            height:'100%',
            justifyContent:'flex-end',
            
            
        }} className="container-menu-Links">
          <div style={{
          display:'flex', justifyContent:'space-between',
          flexWrap:'wrap',height:'fit-content'
        }} className= {styleCss.contentLinks} >
            <Link to={`${path}/mis-ponencias`}>Mis Ponencias</Link>
            <Link>Mis Cursos</Link>
            <Link>Mis Proyectos</Link>
            <Link>Mis Premios</Link>
          </div>
        </div>
        

       
      </AppBar>
     
      
      {renderMobileMenu}
      {renderMenu}
      {renderMenuPonencia}
      {renderMenuCurso}
      {renderMenuProyecto}
      {renderMenuPremio}
     


    </Box>
  );
}

