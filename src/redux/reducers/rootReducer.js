import { combineReducers } from "redux";
import stateModalReducer from "./ModalReducer";
import GioHangReducer from "../reducers/GioHangReducer";
import GameBauCuaReducer from "../reducers/GameBauCuaReducer";
import BurgerReducer from "../reducers/BurgerReducer";
//RootReducer là state (state tổng của toàn ứng dụng)
//reducer là state của redux
const rootReducer = combineReducers({
  //Nơi khai báo các state của ứng dụng
  stateModalReducer: stateModalReducer,
  GioHangReducer,
  GameBauCuaReducer,
  BurgerReducer,
});

export default rootReducer;
