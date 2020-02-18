import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'

//import axios from 'axios'
import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localstorageService'
import { mensagemErro } from '../components/toastr'

class Login extends React.Component{

    state = {
        email: '',
        senha: '',
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        
    }

    entrar = async () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
            LocalStorageService.adicionarItem('_usuario_logado', response.data) // exibir usuário logado no console application
            //localStorage.setItem('_usuario_logado', JSON.stringify(response.data) ) 
            this.props.history.push('/home')
        }).catch( erro => {
            //console.log('Entrou no erro')
            mensagemErro(erro.response.data)
        })
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6" style={ {
                    position : 'relative', 
                    left: '300px'
                } }>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <fieldset>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" 
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}
                                                    className="form-control" 
                                                    id="exampleInputEmail1" 
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" 
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({senha: e.target.value})}
                                                    className="form-control" 
                                                    id="exampleInputPassword1" 
                                                    placeholder="Password" />
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success">
                                                <i className="pi pi-sign-in"></i>Entrar
                                            </button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger">
                                                <i className="pi pi-plus"></i>Cadastrar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter ( Login )