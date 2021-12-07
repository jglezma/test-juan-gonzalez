export const ADD_MAIL = "ADD_MAIL";
export const SELECT_MAIL = "SELECT_MAIL";
export const STATUS_MAIL = "STATUS_MAIL";


const initialState = {
  mails: [],
  mailSelected: {}
};

function rootReducer(state = initialState, action){
  console.log('action', action);
  switch(action.type){
    case ADD_MAIL:
      const addMail = state.mails;
      action.payload.map((mail) => addMail.push({mail, status: 'unread', id: Math.floor(100000 + Math.random() * 900000)}));
      return {
        ...state,
        mails: addMail
      }
    case SELECT_MAIL:
      return {
        ...state,
        mailSelected: action.payload
      }
    case STATUS_MAIL:
      return {
        ...state,
        mails: state.mails.map(mail => mail.id === action.payload.id ?
          { ...mail, status: action.payload.status } : 
          mail
        )
      }
    default:
      return state 
  }
};

export default rootReducer;
