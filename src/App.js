import './App.css';
import Header from "./components/Header"
import Popular from './components/Popular';
import Toprated from './components/Toprated';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Searchpage from './components/Searchpage';
import Moviedetail from './components/Moviedetail';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
        <Popular />
      </Route>
      <Route exact path="/popular" component={Popular}/>
      <Route exact path="/top-rated" component={Toprated}/>
      <Route exact path="/search" component={Searchpage}/>
      <Route exact path="/search/:searchquery" component={Searchpage}/>
      <Route exact path="/detail/:id" component={Moviedetail}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;