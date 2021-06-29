import Header from "./components/header/Header"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movies from "./components/containers/Movies"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/:movieType'} component={Movies} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

