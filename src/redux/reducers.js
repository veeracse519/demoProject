import {  LOADING,SUCCESS,ERROR, LOBBY } from "./actiontypes"
const intialstate={
    data:[],
    loading:false,
    error:'',
}
export const mealReducer=(state=intialstate,action)=>{
switch(action.type){
    case LOADING:
    return state={
        ...state,
        loading:true,
        error:''
    }
    case SUCCESS:
    return state={
        ...state,
        loading:false,
        data:action.payload,
        error:''
    }
    case ERROR:
    return state={
        ...state,
        data:[],
        loading:false,
        error:'Something went Wrong'
    }
    case LOBBY:
        return state={
            ...state,
            data:[],
            loading:false,
            error:''
        }
    default: return state
}
}