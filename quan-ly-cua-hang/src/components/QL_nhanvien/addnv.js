import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class add extends Component{
    render(){
        return(
            <div className="col-lg-10 add-BG">
                <h3>Thêm Nhân Viên</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <form>
                <table className="table table-hover">
                    <tr>
                        <td>Mã Nhân Viên:</td>
                        <td><input className="form-control" name="mannv" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Tên Nhân Viên:</td>
                        <td><input className="form-control" name="ten" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Số Điện Thoại:</td>
                        <td><input className="form-control" name="sdt" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input className="form-control" type="email" name="email"  /></td>
                    </tr>
                    <tr>
                        <td>Địa Chỉ:</td>
                        <td><input className="form-control" type="text" name="diachi"  /></td>
                    </tr>
                    
                </table>
                <button type="submit" className="btn btn-danger"  >Thêm</button>
                </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            
            </div>
            
        )
    }
}
export default add;