import { useEffect } from "react";
import PrimarySearchAppBar from "../../components/navbar/NavBar";
import {Switch, Route, useRouteMatch} from "react-router-dom"
import Ponencia from "../eventos/Ponencia";
import Perfil from "../perfil/Perfil";

function Inicio() {

    let {path, url} = useRouteMatch()
   
    return ( 
    
    <>
    
    <PrimarySearchAppBar />

    <Switch>
        <Route path={`${path}/mis-ponencias`} component={Ponencia} />
        <Route path={`${path}/mi-perfil`} component={Perfil} />

    </Switch>
    
    </> );
}

export default Inicio;