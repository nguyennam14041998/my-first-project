import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class top extends Component{
    render(){
        return(
            <div className="main-header">
                <div className="row">
                <div className="col-lg-8">
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <span className="App-logo">QUẢN LÝ CỬA HÀNG</span>
                </Link>
                </div>
                <div className="col-lg-4">
                    <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
        <li className="dropdown user user-menu">
          <Link to={'/'} className="dropdown-toggle" data-toggle="dropdown" style={{textDecoration:'none'}}>
            <img src="./image/icon/tk.png" className="user-image" alt="User Image" />
            <span className="hidden-xs">Nguyễn Hoài Nam</span>
          </Link>
          <ul className="dropdown-menu">
            <li className="user-header">
              <img src="./image/icon/tk.png" className="img-circle" alt="User Image" />
              <p> Nguyễn Hoài Nam
                <small>Member since 08/11/2019</small>
              </p>
            </li>
            <li className="user-footer">
              <div className="pull-left">
                <a href="#" className="btn btn-default btn-flat">Profile</a>
              </div>
              <div className="pull-right">
                <a href className="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
       
        
      </ul>
      </div>
                </div>
                </div>
            </div>
        )
    }
}

export default top;