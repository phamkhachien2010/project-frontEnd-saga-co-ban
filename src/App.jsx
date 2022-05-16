import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <h1>Hello Hien</h1>
      </Switch>
    </Router>
  );
}

export default App;
