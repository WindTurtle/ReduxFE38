//Modal reducer là state của modal

const stateModal = {
  thongTinSanPham: {
    tenSP: "tên mặc định",
    hinhAnh: "",
    gia: 100,
  },
};

// Định nghĩa store cho stateModal

const stateModalReducer = (state = stateModal, action) => {
  //action là dữ liệu được dispatch từ component
  switch (action.type) {
    //   xử lý tương tự setState
    case "XEM_CHI_TIET": {
      state.thongTinSanPham = action.sanPham;
      return { ...state };
    }
    default:
  }
  return { ...state };
};

export default stateModalReducer;
