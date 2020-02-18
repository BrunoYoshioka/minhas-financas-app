import React from 'react'

import { Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import consultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route path="/consulta-lancamentos" component={consultaLancamentos} />
                <Route path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} /> {/* como o id é opcional, deve passar a interrogação no final do /:id */}
            </Switch>
        </HashRouter>
    )
}

export default Rotas