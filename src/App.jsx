import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import HomePage from './pages/Homepages/HomePage';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import HomeTeplate from './templates/HomeTemplates/HomeTeplate';
import UserTemplates from './templates/UserTemplates/UserTemplates';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTeplate path='/home' exact Component={HomePage} />

        <UserTemplates path='/login' exact Component={Login} />
        <UserTemplates path='/register' exact Component={Register} />

        <HomeTeplate path='/' exact Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
