import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
class update extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: '',
          phone:'',
          email:'',
          address:''
        };
      }    
      componentDidMount(){
        axios.get("http://localhost:8080/api/employees/")
        .then(response => {
          console.log(response);
          this.setState({ 
            name: response.data.name,
            phone: response.data.phone,
            email: response.data.email,
            address: response.data.address,
            redirect: false
            });
        })
        .catch(function (error) {
          console.log(error);
        })
      }
     
    render(){
        
        return(
            <div className="col-lg-10 add-BG">
                <h3>Sửa Thông Tin Nhân Viên</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <form onSubmit={this.handleSubmit}>
                <table className="table table-hover">
                    
                    <tr>
                        <td>Tên Nhân Viên:</td>
                        <td><input className="form-control" name="name" onChange={this.handleChange} value={this.state.name} /></td>
                    </tr>
                    <tr>
                        <td>Số Điện Thoại:</td>
                        <td><input className="form-control" name="phone" onChange={this.handleChange} value={this.state.phone} /></td>
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
                <button type="submit" className="btn btn-danger"  >Sửa</button>
                </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            
            </div>
            
        )
    }
}
export default update;