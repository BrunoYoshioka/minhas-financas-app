import ApiService from '../apiservice'

export default class LancamentoService extends ApiService{
    
    constructor(){
        super('/api/lancamentos')
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

        return this.get(params);
    }
}