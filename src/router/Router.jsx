import { Switch, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio"
import LoginForm from "../components/formularios/LoginForm";

function Router() {
    return ( 
        <BrowserRouter>
        <Switch>
        <Route  path="/inicio" component={Inicio} />
        <Route  path="/login" component={LoginForm} />

    </Switch>
        </BrowserRouter>
     );
}

export default Router;