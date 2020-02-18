import ApiService from '../apiservice'
import ErroValidacao from '../exception/ErroValidadao';

export default class LancamentoService extends ApiService {

    constructor(){
        super('/api/lancamentos')
    }

    obterListaMeses(){
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 },
        ]
    }

    obterListaTipos(){
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa' , value : 'DESPESA' },
            { label: 'Receita' , value : 'RECEITA' }
        ]
    }

    obterPorId(id){
        return this.get(`/${id}`);
    }

    alterarStatus(id, status){
        return this.put(`/${id}/atualiza-status`, { status })
    }

    validar(lancamento){
        const erros = []; // preenchendo array de erros 

        if(!lancamento.ano){ // se não passou o ano de lancamentos 
            erros.push("Informe o Ano.") // aciona mensagem de erro
        }

        if(!lancamento.mes){ // se não passou o mês de lancamentos 
            erros.push("Informe o Mês.") // aciona mensagem de erro
        }

        if(!lancamento.descricao){ // se não passou o descrição de lancamentos 
            erros.push("Informe a Descrição.") // aciona mensagem de erro
        }

        if(!lancamento.valor){ // se não passou o valor de lancamentos 
            erros.push("Informe o Valor.") // aciona mensagem de erro
        }

        if(!lancamento.tipo){ // se não passou o tipo de lancamentos 
            erros.push("Informe o Tipo.") // aciona mensagem de erro
        }

        if(erros && erros.length > 0){ // se tiver alguma mensagem de erro
            throw new ErroValidacao(erros);
        }
    }

    salvar(lancamento){
        return this.post('/', lancamento);
    }

    atualizar(lancamento){
        return this.put(`/${lancamento.id}`, lancamento);
    }

    consultar(lancamentoFiltro){
        // - /api/lancamentos?ano=2019&mes=1$usuario=1
        let params = `?ano=${lancamentoFiltro.ano}` // variáveis do tipo let podem ser modificadas, já a const não

        // verificações de passar os parametros
        if(lancamentoFiltro.mes){ // se passou o mes
            params = `${params}&mes=${lancamentoFiltro.mes}`
        }

        if(lancamentoFiltro.tipo){
            params = `${params}&tipo=${lancamentoFiltro.tipo}`
        }

        if(lancamentoFiltro.status){
            params = `${params}&status=${lancamentoFiltro.status}`
        }

        if(lancamentoFiltro.usuario){
            params = `${params}&usuario=${lancamentoFiltro.usuario}`
        }

        if(lancamentoFiltro.descricao){
            params = `${params}&descricao=${lancamentoFiltro.descricao}`
        }

        return this.get(params);
    }

    deletar(id){
        return this.delete(`/${id}`)
    }
} 