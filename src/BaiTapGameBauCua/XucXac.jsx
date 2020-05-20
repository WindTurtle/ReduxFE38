import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((item, index) => {
      return (
        <img key={index} style={{ width: "70px" }} src={item.hinhAnh} alt="" />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-8">
            <div className="xuc-xac text-center">{this.renderXucXac()}</div>
          </div>
          <div className="col-2">
            <span className="display-4">${this.props.tongTien}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXac: state.GameBauCuaReducer.xucXac,
    tongTien: state.GameBauCuaReducer.tongTien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // xử lý random
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
