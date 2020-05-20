const stateGame = {
  tongTien: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./img/game/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/game/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/game/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/game/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/game/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/game/nai.png", diemCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./img/game/bau.png" },
    { ma: "bau", hinhAnh: "./img/game/bau.png" },
    { ma: "bau", hinhAnh: "./img/game/bau.png" },
  ],
};

const gameBauCuaReducer = (state = stateGame, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      // tìm vị trí quân cược trong danhSachCuoc => xử lý tăng điểm
      let danhSachCuocUpdate = [...state.danhSachCuoc];
      let index = danhSachCuocUpdate.findIndex(
        (quanCuoc) => quanCuoc.ma === action.quanCuoc.ma
      );
      if (index !== -1) {
        if (state.tongTien > 0) {
          danhSachCuocUpdate[index].diemCuoc += 10;
          state.tongTien -= 10;
        } else {
          alert("Bạn đã dùng hết hết lộ phí");
        }
      }
      return { ...state, danhSachCuoc: danhSachCuocUpdate };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        //Random 3 lần và tạo xúc xắc 3 lần
        let soNgauNhien = Math.floor(Math.random() * 6);
        //xúc xác Ngẫu nhiên
        let xucXacNgauNhien = {
          ma: state.danhSachCuoc[soNgauNhien].ma,
          hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      mangXucXacNgauNhien.forEach((xucXac, index) => {
        let indexXucXac = state.danhSachCuoc.findIndex(
          (quanCuoc) => quanCuoc.ma === xucXac.ma
        );
        if (indexXucXac !== -1) {
          state.tongTien += state.danhSachCuoc[indexXucXac].diemCuoc;
        }
      });
      // xử lý hoàn tiền
      state.danhSachCuoc.forEach((quanCuoc, index) => {
        let indexXucXac = mangXucXacNgauNhien.findIndex(
          (xucXacNN) => xucXacNN.ma === quanCuoc.ma
        );
        if (indexXucXac !== -1) {
          state.tongTien += quanCuoc.diemCuoc;
        }
      });
      // reset mảng cược
      let resetMangCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
        return { ...quanCuoc, diemCuoc: 0 };
      });
      return {
        ...state,
        xucXac: mangXucXacNgauNhien,
        danhSachCuoc: resetMangCuoc,
      };
    }
    default:
  }
  return { ...state };
};

export default gameBauCuaReducer;
