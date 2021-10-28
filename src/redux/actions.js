import { LOADING,SUCCESS,ERROR, LOBBY} from "./actiontypes"

export const loading=()=>{
    
    return{
        type: LOADING,
        
    }
}
export const sucess=(data,other)=>{
let orgdata=''
if(other==="latest")
{
     orgdata=[data] 
}
else{
    orgdata=data
}
    return{
        type: SUCCESS,
        payload:orgdata
    
    }
}
export const error=()=>{
    return{
        type: ERROR
    }

}
export const returnToLobby=()=>{
    return{
        type:LOBBY
    }
}
export const fetchDataByName=(name)=>{
    return(async (dispatch)=>{
        console.log(name)
        await dispatch(loading())
             await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
             .then(async res=>await res.json())
             .then(data=>dispatch(sucess(data.meals)))
             .catch(e=>{
                 dispatch(error())
                 return
             })
            })
}
export const sortByLetter=(l)=>{
    console.log("veera",l)
    return(async (dispatch)=>{
        console.log("veera1",l)
        await dispatch(loading())
             await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`)
             .then(async res=>await res.json())
             .then(data=>dispatch(sucess(data.meals)))
             .catch(e=>{
                 dispatch(error())
                 return
             })
            })
        
}
export const randomMeal=()=>{
    console.log()
    return(async (dispatch)=>{
        await dispatch(loading())
            await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(async res=>await res.json())
            .then(data=>dispatch(sucess(data.meals)))
            .catch(e=>{
                console.log(e.message)
                dispatch(error())
                return
            })
            
    })
}
export const latestMale=()=>{
    return(async (dispatch)=>{
        await dispatch(loading())
            await fetch(`https://www.themealdb.com/api/json/v1/1/latest.php`)
            .then(async res=>await res.json())
            .then(data=>dispatch(sucess(data.meals,"latest")))
            .catch(e=>{
                console.log(e.message)
                dispatch(error())
                return
            })
            
    })
}