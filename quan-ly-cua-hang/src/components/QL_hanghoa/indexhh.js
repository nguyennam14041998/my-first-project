import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddHH from './addhh';
import UpdateHH from './updatehh';
class index extends Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path='/addhh' component={AddHH} />
                <Route exact path='/updatehh' component={UpdateHH} />
            <div className=" col-lg-10 index-admin">
                <h3>Danh Sách Hàng Hóa</h3>
                <form>
                <div className="row" id="search-BG"> 
                <div className="col-lg-8">
                <input className="form-control" name="search"  placeholder="search" />
                </div>
                <div className="col-lg-4">
                <button className="btn btn-search " ><i className="fa fa-search"></i></button>
                </div>
                </div>
                </form>
                <br></br>
                <button className="btn btn-success" id="btnadd-BG"><i className="fa fa-pencil"></i><Link to={'/addhh'}>Thêm</Link></button>
                <br></br>
                <div className="row">
                    <div className="col-11">
                    <table className="table table-hover table-bordered">
                    <tr className="tb-right" >
                        <th>STT</th>
                        <th>Mã Loại</th>
                        <th>Mã NCC</th>
                        <th>Mã Hàng Hóa</th>
                        <th>Tên Hàng Hóa</th>
                        <th>Mô Tả</th>
                        <th >Chức năng</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="btn-group" style={{border: '0px'}}>
                        <button className="btn btn-success"><i className="fa fa-eye"></i><Link to={'/'}>Xem</Link></button>
                        <button className="btn btn-primary"><i className="fa fa-edit"></i><Link to={'/updatehh'}>Sửa</Link></button>
                        <button className="btn btn-danger"><i className="fa fa-trash"></i><Link to={'/'}>Xóa</Link></button>
                        </td>
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