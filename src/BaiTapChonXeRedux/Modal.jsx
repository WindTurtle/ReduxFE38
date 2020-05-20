import React, { Component } from "react";
//Để kết nối vs store dùng hàm connect từ thư viện react-redux
import {connect} from "react-redux";
 
class Modal extends Component {
  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.thongTinSanPham.tenSP}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                  <img style={{width:'200px'}} src={this.props.thongTinSanPham.hinhAnh} alt=""/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//tạo 1 hàm chuyển state của redux thành props của component
const mapStateToProps = (state) => {
  // state là rootReducer
  //tạo ra props cho component to state redux
  return {
    thongTinSanPham: state.stateModalReducer.thongTinSanPham,
  };
};

//tạo ra 1 component mới cho props từ redux truyền vào
export default connect(mapStateToProps)(Modal);
