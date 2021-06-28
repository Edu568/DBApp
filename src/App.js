import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login/Login';
import Man from './Pages/Man';
import Search from './Pages/Search';
import Woman from './Pages/Woman';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/Login" component={Login}/>
      </Switch>
      <Switch>
        <Route exact patch="/man" component={Man}/>
      </Switch>
      <Switch>
        <Route exact patch="/woman" component={Woman}/>
      </Switch>
      <Switch>
        <Route exact patch="/search" component={Search}/>
      </Switch>



    </BrowserRouter>
  )
}

export default App
