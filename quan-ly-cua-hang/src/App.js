import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Top from './components/top';
import Left from './components/left';
import Right from './components/right';
import Bottom from './components/bottom'; 
import IndexBG from './components/QL_banggia/indexbg';
import IndexNCC from './components/QL_nhacungcap/indexncc';
import IndexLoai from './components/QL_loaihang/indexloai';
import IndexNV from './components/QL_nhanvien/indexnv';
import IndexTK from './components/QL_taikhoan/indextk';
import IndexHH from './components/QL_hanghoa/indexhh';
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
            <Route path='/indexbg' component={IndexBG} />
            <Route exact path='/indexncc' component={IndexNCC} />
            <Route path='/indexloai' component={IndexLoai} />
            <Route path='/indexnv' component={IndexNV} />
            <Route path='/indextk' component={IndexTK} />
            <Route path='/indexhh' component={IndexHH} />
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
