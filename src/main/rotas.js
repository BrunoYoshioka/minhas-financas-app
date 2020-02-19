import React from 'react'

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import consultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

import { AuthConsumer } from '../main/provedorAutenticacao'

function RotaAutenticada( { component: Component, isUsuarioAutenticado, ...props } ){ // será a rota normal
    return (
        <Route {...props} render={ (componentProps) => {
            if(isUsuarioAutenticado){
                return(
                    <Component {...componentProps} />
                )
            }else{ // caso não esiver autenticado, direciona para o login
                return(
                    <Redirect to={ {pathname : '/login', state : { from : componentProps.location } } } />
                )
            }
        }} />
    )
}

function Rotas(props){
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />

                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={consultaLancamentos} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} /> {/* como o id é opcional, deve passar a interrogação no final do /:id */}
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} />) }
    </AuthConsumer>
)