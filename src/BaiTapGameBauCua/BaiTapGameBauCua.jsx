import React, { Component } from 'react';
import XucXac from './XucXac';
import DanhSachCuoc from './DanhSachCuoc';

class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">BÀI TẬP GAME BẦU CUA</h3>
                <XucXac />
                <DanhSachCuoc />
            </div>
        );
    }
}

export default BaiTapGameBauCua;