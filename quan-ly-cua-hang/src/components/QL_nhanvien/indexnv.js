import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link,  } from 'react-router-dom';
import axios from 'axios';
import AddNV from './addnv';
import UpdateNV from './updatenv';
import Modal from 'react-modal';
class index extends Component{

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            redirect: false,
            modalIsOpen: false   
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    
// hiển thị
    componentDidMount() {
    	axios .get("http://localhost:8080/api/employees/") 
      	.then(response => {
        	this.setState({ employees: response.data });
      	})
		.catch(err => console.log(err));
    } 
//xóa
    handleDelete = (item) => {
    const newsId = item.id;
    axios.delete('http://localhost:8080/api/employees/'+newsId+'/')
    .then(response =>{
        this.setState({
            employees: response.employees.filter(elm => elm.id !== newsId)
        })
    })
    .catch(err => console.log(err));
  }
//update
  componentWillMount() {
    Modal.setAppElement('body');
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };
  openModal = (item) => {
    this.setState({
      modalIsOpen: true,
      id: item.id,
      name: item.name,
      phone: item.phone,
      address: item.address,
      email: item.email,
      createdAt:item.createdAt
    });
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  
  handleUpdate = () =>{

    const newsId = this.state.id;
    const items ={
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        createdAt: this.state.createdAt
    }
    console.log(items);
  
    axios.put('http://localhost:8080/api/employees/'+newsId+'/',items)
    .catch(err => console.log(err));
  };
    
    render(){
    	var count =0;
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
                      count ++,
                            <tr key={item.id}>
                                <td>{count}</td>       
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.createdAt}</td>
                                <td className="btn-group" style={{border: '0px'}}>
                                <button className="btn btn-success"><i className="fa fa-eye"></i><Link to={'/'}>Xem</Link></button>
                                <button className="btn btn-primary" onClick={() => this.openModal(item)}>  <i className="fa fa-edit"></i>Sửa</button>
                                <form onSubmit={this.handleSubmit}>
                                <button type="submit" onClick={()=>this.handleDelete(item)} className="btn btn-danger"><i className="fa fa-trash"></i>Xóa</button>
                                </form>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                    </div>
                    <div className="col-1"></div>
                </div>
        <Modal 
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal} >
          
          <div>
          <form onSubmit={this.handleUpdate}>
            <h3>Sửa thông tin</h3>
                <table className="table table-hover">
                      
                <tr>
                        <td>ID:</td>
                        <td><input className="form-control" type="text" name="id" onChange={this.handleChange} value={this.state.id} /></td>
                    </tr>
                    <tr>
                        <td>Tên Nhân Viên:</td>
                        <td><input className="form-control" type="text" name="name" onChange={this.handleChange} value={this.state.name} /></td>
                    </tr>
                    <tr>
                        <td>Số Điện Thoại:</td>
                        <td><input className="form-control" type="number" name="phone" onChange={this.handleChange} value={this.state.phone} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input className="form-control" type="email" name="email" onChange={this.handleChange} value={this.state.email} /></td>
                    </tr>
                    <tr>
                        <td>Địa Chỉ:</td>
                        <td><input className="form-control" type="text" name="address" onChange={this.handleChange}  value={this.state.address} /></td>
                    </tr>
                   
                </table>
                <div className="btn-group">
                <button type="submit" className="btn btn-danger"  >Sửa</button>
                <button onClick={this.closeModal} className="btn btn-success">Close</button>
                </div>
                </form>
          </div>
        </Modal>
            </div>
            </Switch>
           </Router>
        )
    }
}
export default index;