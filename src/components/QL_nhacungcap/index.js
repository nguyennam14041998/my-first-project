import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddNCC from './add';
import UpdateNCC from './update';
class index extends Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path='/addncc' component={AddNCC} />
                <Route exact path='/updatencc' component={UpdateNCC} />
            <div className=" col-lg-10 index-admin">
                <h3>Nhà Cung Cấp</h3>
                <div className="row" id="search-BG"> 
                <div className="col-lg-8">
                <input className="form-control" name="search"  placeholder="search" />
                </div>
                {/* <div className="col-lg-4">
                <button className="btn btn-danger"><i className="fa fa-search"></i></button>
                </div> */}
                
                </div>
                <br></br>
                <button className="btn btn-success" id="btnadd-BG"><i className="fa fa-pencil"></i><Link to={'/addncc'}>Thêm</Link></button>
                <br></br>
                <div className="row">
                    <div className="col-11">
                    <table className="table table-hover table-bordered">
                    <tr className="tb-right" >
                        <th>STT</th>
                        <th>Mã NCC</th>
                        <th>Tên NCC</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th colSpan="2">Chức năng</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button className="btn btn-primary"><i className="fa fa-edit"></i><Link to={'/updatencc'}>Sửa</Link></button></td>
                        <td><button className="btn btn-danger"><i className="fa fa-trash"></i><Link to={'/'}>Xóa</Link></button></td>
                    </tr>
                    </tbody>
                </table>
                    </div>
                    <div className="col-1"></div>
                </div>
               
            </div>
            </Switch>
           </Router>
        )
    }
}
export default index;