import { ADD_TRANSLATE } from "../actions";

const translation = (state = ADD_TRANSLATE , action) => {
  console.log(action.text);
    switch (action.type) {
      case 'ADD_TRANSLATE':
      
     
        return action.text
        
             
      default:
        return state
    }
  }
  
  export default translation