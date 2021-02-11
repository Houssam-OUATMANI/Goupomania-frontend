import {  BrowserRouter as Router , Switch , Route, Redirect} from 'react-router-dom'

import './App.css'

import Signup from './screens/signup/signup.jsx'
import Login from './screens/login/login'
import Navbar from './components/navbar/navbar'
import Error404 from './screens/error/error404'
import NewPost from './screens/NewPost/NewPost'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path = "/signup" exact>
            <Signup/>
        </Route>
        <Route path ="/login" exact>
            <Login/>
        </Route>
        <Route path ="/newPost" exact>
           <NewPost/>
        </Route>
        <Route path ="/error" exact>
            <Error404/>
        </Route>
        <Redirect to='/error'/>
      </Switch>
    </Router>
   
  );
}

export default App;
