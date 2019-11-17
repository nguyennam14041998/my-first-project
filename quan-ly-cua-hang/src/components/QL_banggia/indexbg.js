import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddBG from './addbg';
import UpdateBG from './updatebg';

class index extends Component{
    constructor(props){
        super(props);
        this.state={
            stt: "1",
            masp: "SP-001",
            tensp:"Nước khoáng LaVie",
            giabanle:"4.000 ",
            giabansi:"3.500",
            ngaycapnhat:"08-11-2019"
        };
    };
    render(){
        return(
            <Router>
            <Switch>
                <Route exact path='/add' component={AddBG} />
                <Route exact path='/update' component={UpdateBG} />
            <div className=" col-lg-10 index-admin">
                <h3>Bảng Giá</h3>
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
                <button className="btn btn-success" id="btnadd-BG"><i className="fa fa-pencil"></i><Link to={'/add'}>Thêm</Link></button>
                <br></br>
                <div className="row">
                    <div className="col-11">
                    <table className="table table-hover table-bordered">
                    <tr className="tb-right" >
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá Bán Lẻ (vnđ)</th>
                        <th>Giá bán sỉ (vnđ)</th>
                        <th>Ngày cập nhật</th>
                        <th >Chức năng</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>{this.state.stt}</td>
                        <td>{this.state.masp}</td>
                        <td>{this.state.tensp}</td>
                        <td>{this.state.giabanle}</td>
                        <td>{this.state.giabansi}</td>
                        <td>{this.state.ngaycapnhat}</td>
                        <td className="btn-group" style={{border: '0px'}}>
                        <button className="btn btn-success"><i className="fa fa-eye"></i><Link to={'/'}>Xem</Link></button>
                        <button className="btn btn-primary"><i className="fa fa-edit"></i><Link to={'/update'}>Sửa</Link></button>
                        <button className="btn btn-danger"><i className="fa fa-trash"></i><Link to={'/'}>Xóa</Link></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                    </div>
                    <div className="col-1"> </div>
                </div>
                
            </div>
            </Switch>
            </Router>
        )
    }
}
export default index;