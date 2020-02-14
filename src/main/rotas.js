import React from 'react'

import { Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import consultaLancamentos from '../views/lancamentos/consulta-lancamentos'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route path="/consulta-lancamentos" component={consultaLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas