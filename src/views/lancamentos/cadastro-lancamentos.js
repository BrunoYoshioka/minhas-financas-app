import React from 'react'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import {withRouter} from 'react-router-dom'
import SelectMenu from '../../components/selectMenu';
import LancamentoService from '../../app/service/lancamentoService';

class CadastroLancamentos extends React.Component{
    

    constructor(){
        super();
        this.service = new LancamentoService();
    }
    

    render(){
        const tipos = this.service.obterListaTipos();
        const meses = this.service.obterListaMeses();

        return(
            <Card title="Cadastro de lançamento">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input id="inputDescricao" type="text" className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno" type="text" className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" lista={meses} className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputValor" label="Valor: *">
                            <input id="inputValor" type="text" className="form-control" />
                        </FormGroup>
                    </div>

                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo" lista={tipos} className="form-control" />
                        </FormGroup>
                    </div>

                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <input type="text" className="form-control" disabled /> {/** Ficará somente leitura */}
                        </FormGroup>
                    </div>

                    

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-success">Salvar</button>
                        <button className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamentos);