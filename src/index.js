import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const pagina404 = () => <h2>Página 404</h2>;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/404" component={pagina404} />
        <Redirect from="*" to="/404"/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
