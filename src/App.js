import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
