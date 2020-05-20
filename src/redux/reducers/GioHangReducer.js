const stateGioHang = [];

const gioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xử lý nghiệp vụ
      //b1: duyệt xem giỏ hàng có sản phẩn đó hay không
      const gioHangUpdate = [...state];
      let index = gioHangUpdate.findIndex(
        (sp) => sp.maSP === action.sanPhamGioHang.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
        return gioHangUpdate;
      }
      return [...state, action.sanPhamGioHang];
    }
    case "XOA_GIO_HANG": {
      //   tìm phần tử cần xóa trong giỏ hàng
      const gioHangUpdate = [...state];
      let index = state.findIndex((sp) => sp.maSP === action.maSP);
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
        return gioHangUpdate;
      }
      break;
    }
    case "TANG_GIAM_SO_LUONG": {
      const gioHangUpdate = [...state];
      let index = state.findIndex((sp) => sp.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          if (gioHangUpdate[index].soLuong > 1) {
            gioHangUpdate[index].soLuong -= 1;
          } else {
            alert("Số lượng tối thiểu phải là 1");
          }
        }
      }
      return gioHangUpdate;
    }
    default:
  }
  return state;
};

export default gioHangReducer;
