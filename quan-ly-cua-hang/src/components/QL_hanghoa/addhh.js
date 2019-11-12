import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class add extends Component{
    render(){
        return(
            <div className="col-lg-10 add-BG">
                <h3>Thêm Hàng Hóa</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <form>
                <table className="table table-hover">
                    <tr>
                        <td>Mã Loại:</td>
                        <td><input className="form-control" name="maloai" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Mã NCC:</td>
                        <td><input className="form-control" name="mancc" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Mã HH:</td>
                        <td><input className="form-control" name="mahh" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td>Tên HH:</td>
                        <td><input className="form-control" type="text" name="tenhh"  /></td>
                    </tr>
                    <tr>
                        <td>Mô Tả:</td>
                        <td><input className="form-control" type="text" name="mota"  /></td>
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