import React, { Component } from "react";
import DanhSachSanPham from './DanhSachSanPham'
import Modal from './Modal'
import GioHang from "./GioHang";
class BaiTapChonXeRedux extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Car",
      gia: 500,
      hinhAnh: "./img/products/black-car.jpg",
    },
    {
      maSP: 2,
      tenSP: "Red Car",
      gia: 600,
      hinhAnh: "./img/products/red-car.jpg",
    },
    {
      maSP: 3,
      tenSP: "Silver Car",
      gia: 700,
      hinhAnh: "./img/products/silver-car.jpg",
    },
    {
      maSP: 4,
      tenSP: "Steel Car",
      gia: 700,
      hinhAnh: "./img/products/steel-car.jpg",
    },
  ];
  render() {
    return <div>
        <DanhSachSanPham mangSP = {this.mangSanPham}/>
        <Modal />
        <GioHang />
    </div>;
  }
}

export default BaiTapChonXeRedux;
