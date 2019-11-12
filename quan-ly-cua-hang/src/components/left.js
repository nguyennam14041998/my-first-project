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
                        <td><Link to={'/indexbh'}>QL Bán Hàng</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/indexhh'}>QL Hàng Hóa</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/indexnhom'}>QL Nhóm Hàng</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/indexloai'}>QL Loại Hàng</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-dashboard"></i></td>
                        <td><Link to={'/indexncc'}>QL Nhà Cung Cấp</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-files-o"></i></td>
                        <td><Link to={'/indexbg'}>QL Bảng Giá</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-user"></i></td>
                        <td><Link to={'/indextk'}>QL Tài Khoản</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-table"></i></td>
                        <td><Link to={'/indexnv'}>QL Nhân Viên</Link></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-files-o"></i></td>
                        <td><Link to={'/indexbctk'}>Thống Kê - Báo Cáo</Link></td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default left;