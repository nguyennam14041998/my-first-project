import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import AddNV from './addnv';
import UpdateNV from './updatenv';

class index extends Component{

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            redirect: false   
        };   
    }
    
2
3
4
5
    deletenv(id) {
    axios .delete('http://localhost:8080/api/employees/' + id)
    .then(response => {
        this.setState({ employees: response.data });
    })
    .catch(err => console.log(err));
    }
    componentDidMount() {
    	axios .get("http://localhost:8080/api/employees/") 
      	.then(response => {
        	this.setState({ employees: response.data });
      	})
		.catch(err => console.log(err));
    } 
    render(){
    	
        return(
            <Router>
                <Switch>
                <Route exact path='/addnv' component={AddNV} />
                <Route exact path='/updatenv/:id' component={UpdateNV} />
            <div className=" col-lg-10 index-admin">
                <h3>Nhân Viên</h3>
                
                <div className="row" id="search-BG"> 
                <div className="col-lg-8">
                <input className="form-control" name="search"  placeholder="search" />
                </div>
                <div className="col-lg-4">
                <button className="btn btn-search " ><i className="fa fa-search"></i></button>
                </div>
                </div>
                
                <br></br>
                <button className="btn btn-success" id="btnadd-BG"><i className="fa fa-pencil"></i><Link to={'/addnv'}>Thêm</Link></button>
                <br></br>
                <div className="row">
                    <div className="col-11">
                    <table className="table table-hover table-bordered">
                    <tr className="tb-right" >
                        <th>STT</th>
                        <th>Tên Nhân Viên</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>Thời Gian Tạo</th>
                        <th >Chức năng</th>
                    </tr>
                    <tbody>
                    {this.state.employees.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.phone}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.createdAt}</td>
                                <td className="btn-group" style={{border: '0px'}}>
                                <button className="btn btn-success"><i className="fa fa-eye"></i><Link to={'/'}>Xem</Link></button>
                                <button className="btn btn-primary"><i className="fa fa-edit"></i><Link to={'/updatenv'}>Sửa</Link></button>
                                <form onSubmit={this.handleSubmit}>
                                <button type="submit" onClick={()=>this.state.employees.deletenv(item.id)} className="btn btn-danger"><i className="fa fa-trash"></i>Xóa</button>
                                </form>
                                </td>
                            </tr>
                            ))}
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