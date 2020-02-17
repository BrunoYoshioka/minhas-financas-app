import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import LancamentosTable from './lancamentosTable'

import LancamentoService from '../../app/service/lancamentoService'
import LocalStorageService from '../../app/service/localstorageService'

import * as messages from '../../components/toastr' // importar tudo que esta dentro do toastr com o nome messages

class ConsultaLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        lancamentos : []
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    buscar = () => {
        if(!this.state.ano){ // se não passou o ano
            messages.mensagemErro('O preenchimento do campo Ano é obrigatório.')
            return false;
        }

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: usuarioLogado.id
        }

        this.service
            .consultar(lancamentoFiltro)
            .then( resposta => {
                this.setState({ lancamentos: resposta.data })
            }).catch( error => {
                console.log(error)
            })
    }

    editar = (id) => {
        console.log('Editando o lancamento', id)
    }

    deletar = ( lancamento ) => {
        // console.log('Deletando o lancamento', id)
        this.service
            .deletar(lancamento.id)
            .then(response => {
                // remover do array
                const lancamentos = this.state.lancamentos; // capturar lancamentos na constante
                const index = lancamentos.indexOf(lancamento) // descobrir qual item do lancamento que eu quero deletar
                lancamentos.splice(index, 1); // Esse método recebe os parametros 
                this.setState(lancamentos) // atualizar a variável lançamentos

                messages.mensagemSucesso('Lançamento excluído com sucesso!')
            }).catch(error => {
                messages.mensagemErro('Ocorreu um erro ao tentar deletar o Lançamento')
            })
    }

    render(){
        const meses = this.service.obterListaMeses();
        const tipos = this.service.obterListaTipos();

        return (
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                                <input type="text" 
                                       className="form-control" 
                                       id="inputAno" 
                                       value={this.state.ano}
                                       onChange={e => this.setState({ano: e.target.value})}
                                       placeholder="Digite o Ano" />
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu id="inputMes" 
                                            value={this.state.mes}
                                            onChange={e => this.setState({ mes: e.target.value })}
                                            className="form-control" 
                                            lista={meses} />
                            </FormGroup>

                            <FormGroup htmlFor="inputDesc" label="Descricao: ">
                                <input type="text" 
                                       className="form-control" 
                                       id="inputDescricao" 
                                       value={this.state.descricao}
                                       onChange={e => this.setState({descricao: e.target.value})}
                                       placeholder="Digite a Descricao" />
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" label="Tipo Lançamento: ">
                                <SelectMenu id="inputTipo" 
                                            value={this.state.tipo}
                                            onChange={e => this.setState({ tipo: e.target.value })}
                                            className="form-control" 
                                            lista={tipos} />
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>

                        </div>

                    </div>
                </div>   
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={this.state.lancamentos} 
                                              deleteAction={this.deletar}
                                              editAction={this.editar} />
                        </div>
                    </div>  
                </div>            
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos); 