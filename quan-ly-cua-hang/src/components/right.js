import React,{Component} from 'react';

class right extends Component{
  constructor (props){
    super(props);
    this.state={
      banggia:[
        {
      stt:1,
      name:"Nguyễn Hoài Nam",
      thanhtien:"250.000",
      tiennhan:"300.000",
      tientralai:"50.000",
      nhanvien:"Nguyễn Thùy Linh",
      thoigian:"55:21:8 08-11-2019"
        },
        {
          stt:2,
          name:"Đỗ Văn Tuyển",
          thanhtien:"50.000",
          tiennhan:"200.000",
          tientralai:"150.000",
          nhanvien:"Nguyễn Thùy Linh",
          thoigian:"55:21:8 08-11-2019"
            }
      
      ]
      
    };
  };
  
    render(){
        return(
<div className="body-right">
        <section className="content-header" style={{marginBottom: '30px'}}>
        <h1>
          Administration
          <small>Cửa hàng bán lẻ Mickey</small>
        </h1>
        
      </section>
      <div className="row" style={{marginLeft: '15px', marginRight: '15px'}}>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon eye"><i className="fa fa-eye" style={{marginTop: '23px'}} /></span>
            <div className="info-box-content">
              <span className="info-box-text">Loại Hàng</span>
              <span className="info-box-number">0</span>
            </div>
           
          </div>
         
        </div>
       
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon hanghoa"><i className="fa fa-table" style={{marginTop: '23px'}} /></span>
            <div className="info-box-content">
              <span className="info-box-text">Hàng Hóa</span>
              <span className="info-box-number">0</span>
            </div>
            
          </div>
         
        </div>
        
        <div className="clearfix visible-sm-block" />
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon banggia"><i className="fa fa-calendar" style={{marginTop: '23px'}} /></span>
            <div className="info-box-content">
              <span className="info-box-text">Bảng Giá</span>
              <span className="info-box-number">0</span>
            </div>
            
          </div>
         
        </div>
       
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon nhanvien"><i className="fa fa-user" style={{marginTop: '23px'}} /></span>
            <div className="info-box-content">
              <span className="info-box-text">Nhân Viên</span>
              <span className="info-box-number">0</span>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className="view-hoadon">
            <h4>Danh sách bán</h4>
            <table className="table table-hover table-bordered">
                <tr className="tb-right">
                    <th>Stt</th>
                    <th>Tên Khách Hàng</th>
                    <th>Thành Tiền (vnđ)</th>
                    <th>Số Tiền Nhận (vnđ)</th>
                    <th>Số Tiền Trả Lại (vnđ)</th>
                    <th>Nhân Viên</th>
                    <th>Thời Gian</th>
                </tr>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{this.state.banggia[0].name}</td>
                        <td>{this.state.banggia[0].thanhtien}</td>
                        <td>{this.state.banggia[0].tiennhan}</td>
                        <td>{this.state.banggia[0].tientralai}</td>
                        <td>{this.state.banggia[0].nhanvien}</td>
                        <td>{this.state.banggia[0].thoigian}</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>{this.state.banggia[1].name}</td>
                        <td>{this.state.banggia[1].thanhtien}</td>
                        <td>{this.state.banggia[1].tiennhan}</td>
                        <td>{this.state.banggia[1].tientralai}</td>
                        <td>{this.state.banggia[1].nhanvien}</td>
                        <td>{this.state.banggia[1].thoigian}</td>
                    </tr>
                    
                </tbody>
            </table>
            <div className="box-footer clearfix">
        <a href className="btn btn-sm  btn-flat ">View All Orders</a>
      </div>
      </div>
            
 </div>
        )
    }
}

export default right;