import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class add extends Component{
    render(){
        return(
            <div className="col-lg-10 add-BG">
                <h3>Thêm Bảng Giá</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <form>
                <table className="table table-hover">
                    <tr>
                        <td>Mã hàng hóa:</td>
                        <td><input className="form-control" name="masp" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Loại hàng hóa:</td>
                        <td><input className="form-control" name="loai" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Tên hàng hóa:</td>
                        <td><input className="form-control" name="ten" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Giá bán lẻ:</td>
                        <td><input className="form-control" type="number" name="giabanle" placeholder="vnđ" /></td>
                    </tr>
                    <tr>
                        <td>Giá bán sỉ:</td>
                        <td><input className="form-control" type="number" name="giabansi" placeholder="vnđ" /></td>
                    </tr>
                    <tr>
                        <td>Người nhập:</td>
                        <td><input className="form-control" type="text" name="nguoinhap"  /></td>
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