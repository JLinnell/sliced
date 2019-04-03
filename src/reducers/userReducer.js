import {REGISTER, LOGIN} from '../actions/userActions';
import {saveAuthInfo} from '../LocalStorage';



const initialState = {
  user: '',
  users: [],
}
  
  const userReducer = (state = initialState, action) => {
  switch (action.type){
    case REGISTER:
    console.log(saveAuthInfo)

      return state = {...state, loginRedirect: false};

    case LOGIN:
    let {token, userID, email} = action.payload.data.data;

      saveAuthInfo(
        token,
        userID,
        email,
      );

      return state = {...state, loginRedirect: true};

    default:
      return state;
  }
}
export default userReducer;