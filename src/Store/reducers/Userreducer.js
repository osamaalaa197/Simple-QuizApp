import { getUserGmail } from "../Actions/ActionsCreation";
import { getUserName } from "../Actions/ActionsCreation";

const intialstate = {
  UserName: "",
  Gmail: "",
};

export const GetDataFromUserUserReducer = (state = intialstate, action) => {
  switch (action.type) {
    case getUserName:
      return {
        ...state,
        UserName:action.payload
      };
    case getUserGmail:
      return {
        ...state,
        Gmail: action.payload
      };
    default:
      return state;
  }
};

// export const GetDataFromUserGmailReducer=(state=intialstate,action)=>{
//     switch (action.type) {
//         case action.type===getUserGmail:
//             return{
//                 ...state,
//                 Gmail:action.payload
//             }
//             break;

//         default:
//             break;
//     }
// }
