import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Top from './components/top';
import Left from './components/left';
import Right from './components/right';
import Bottom from './components/bottom'; 
import IndexBG from './components/QL_banggia/index';
import IndexNCC from './components/QL_nhacungcap/index';


class App extends Component{
  render(){
    return(
      <Router>
      <div className="all">
        <header>
          <Top />
        </header>
        <div className="row">
          <div id="dash-broad" className="col-lg-2">
          <Left />
          </div>
          <Switch>
            <Route path='/index' component={IndexBG} />
            <Route exact path='/indexncc' component={IndexNCC} />
          <div className="col-lg-10">  
          <Right />
          </div>
          </Switch>
        </div>
        <footer>
          <Bottom />
        </footer>
      </div>
      </Router>
    )
  }
}


export default App;
