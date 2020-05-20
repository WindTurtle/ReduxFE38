import React, { Component } from "react";
import SanPham from "./SanPham";
class DanhSachSanPham extends Component {
  renderSanPham = () => {
    return this.props.mangSP.map((sanPham, index) => {
      return (
        <div className="col-3" key={index}>
          <SanPham sp={sanPham} />
        </div>
      );
    });
  };
  render() {
    return <div className="container-fluid">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">
            {this.renderSanPham()}
        </div>
    </div>;
  }
}

export default DanhSachSanPham;
