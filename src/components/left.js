import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class left extends Component{
    render(){
        return(
            <div className="body-left">
                <span>DASHBOARD</span>
                <form>
                    <input type="text" className="form-control" name="search" id="search-dashboard" placeholder="search" />
                </form>
                <table className="table ">
                    <tr>
                        <td><i className="fa fa-files-o"></i></td>
                        <td><Link to={'/'}>QL Bán Hàng</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/'}>QL Hàng Hóa</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/'}>QL Nhóm Hàng</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/'}>QL Loại Hàng</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-dashboard"></i></td>
                        <td><Link to={'/indexncc'}>QL Nhà Cung Cấp</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-files-o"></i></td>
                        <td><Link to={'/index'}>QL Bảng Giá</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-user"></i></td>
                        <td><Link to={'/'}>QL Tài Khoản</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/'}>QL Nhân Viên</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-files-o"></i></td>
                        <td><Link to={'/'}>Thống Kê - Báo Cáo</Link></td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default left;