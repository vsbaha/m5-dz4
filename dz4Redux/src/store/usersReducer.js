
const defaultState = {
	user: {
		name: '',
		age: '',
		gender: ''
	},
	profile: '' // или 'private'
}

export const userReducer = (state = defaultState, action) => {
  
  switch (action.type){
    case 'CHANGE_NAME':
      {
        console.log(state);
      return {...state, user: {...state.user, name: action.payload}}
      }
    case 'CHANGE_AGE':{
      return  {...state, user: {...state.user, age: action.payload}}
    }
    case 'CHANGE_GENDER':{
      return  {...state, user: {...state.user, gender: action.payload}}
    }
    case 'CHANGE_PROFILE':{
      return {...state,profile : action.payload}
    }
    default:return state
    
  }

  
  return state
}