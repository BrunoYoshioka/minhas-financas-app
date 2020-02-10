import React from 'react';
import Login from './views/login'
import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends React.Component {
  /* COMENTÁRIO JSX
  state = {
    numero1: null,
    numero2: null,
    resultado: null,
  }

  somar = () => {
    const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2)
    this.setState({resultado: resultado});
  } */

  render(){
    /*return(
      <div>
        <label>Primeiro número:</label>
        <input type="text" value={this.state.numero1} 
                onChange={(e) => this.setState({numero1: e.target.value}) } />
        <br />

        <label>Segundo número:</label>
        <input type="text" value={this.state.numero2} 
                onChange={(e) => this.setState({numero2: e.target.value}) } />
        <br />

        <button onClick = { this.somar } >
          Somar
        </button>
        <br />

        O nome digitado foi: {this.state.resultado}
      </div>
    )*/
    return(
      <div>
        <Login />
      </div>
    )
  }
}

export default App;
