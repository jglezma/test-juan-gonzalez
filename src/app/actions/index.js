import mailData from '../Help/mail-data.json'
import { ADD_MAIL, SELECT_MAIL, STATUS_MAIL} from '../reducers';

export const addMail=() => (dispatch)=>{
  dispatch({ type: ADD_MAIL, payload: mailData });
};

export const selectMail = (data) => (dispatch)=>{
  dispatch({ type: SELECT_MAIL, payload: data });
};

export const statusMail = (data) => (dispatch)=>{
  dispatch({ type: STATUS_MAIL, payload: data });
};