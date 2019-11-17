import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
class add extends Component{

    constructor(props){
        super(props);
        this.state = {
          name: '',
          phone:'',
          email:'',
          address:'',
          createdAt:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }    
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      };
      handleSubmit(event){
        event.preventDefault();
        const items = {
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          address: this.state.address,
          createdAt: this.state.createdAt
        }
        let uri = 'http://localhost:8080/api/employees/';
        axios.post(uri, items).then((response) => {
            return <Redirect push to='/indexql' />
        });
      }
    render(){
        return(
            <div className="col-lg-10 add-BG">
                <h3>Thêm Nhân Viên</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <form onSubmit={this.handleSubmit}>
                <table className="table table-hover">
                    
                    <tr>
                        <td>Tên Nhân Viên:</td>
                        <td><input className="form-control" name="name" onChange={this.handleChange}  /></td>
                    </tr>
                    <tr>
                        <td>Số Điện Thoại:</td>
                        <td><input className="form-control" name="phone" onChange={this.handleChange}  /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input className="form-control" type="email" onChange={this.handleChange} name="email"  /></td>
                    </tr>
                    <tr>
                        <td>Địa Chỉ:</td>
                        <td><input className="form-control" type="" onChange={this.handleChange} name="address"  /></td>
                    </tr>
                    <tr>
                        <td>Ngày Tạo:</td>
                        <td><input className="form-control" type="date" onChange={this.handleChange} name="createdAt"  /></td>
                    </tr>
                </table>
                <div>
                <button type="submit" className="btn btn-danger"  >Thêm</button>
                 <Link to={'/indexnv'}><button type="" className="btn btn-danger"  >Trở lại</button></Link>
                </div>
                </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            
            </div>
            
        )
    }
}
export default add;