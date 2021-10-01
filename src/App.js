import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

// Para aplicar o SPA, utilza-se o React Router. A raiz da aplicação precisa estar encapsulada no BrowserRouter pq assim, todos os seus componentes filhos poderão ser roteados com o Route.

class App extends Component {
  render() {
    return (
      //path é o caminho da url e a prop exact serve para determinar exatidão entre a rota o elemento a ser renderizado.
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning"  />} />
      </BrowserRouter>
      //Como feito acima, o Route possui props que podem ser passadas para o componente que ele encapsula, permitindo criar paramentros para a url como o 'id' e passar props para o componente.
    );
  }
}

export default App;
