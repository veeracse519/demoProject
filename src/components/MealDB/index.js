import React,{useState} from "react";
import { connect } from "react-redux";
import { fetchDataByName, latestMale, randomMeal, returnToLobby, sortByLetter } from "../../redux/actions";
import "./styles.css"
const MealDb=({data,fetchDataByName,randomMeal,lobby,latestMeal})=>{
    const[text,setText]=useState('')
    const[text1,sortText]=useState('')
    const handleChange=(e)=>{
        setText(e.target.value)
        if(e.target.value.length!==0)
        {
            fetchDataByName(e.target.value)
            return
        }
        lobby()
     
    }
    const handleSortChange=(e)=>{
        sortText(e.target.value)
        if(e.target.value.length!==0)
        {
            sortByLetter(e.target.value)
            return
        }
        lobby()
     
    }
    console.log("final",data)
    return(
        <div>
            <p className="data">I am Male Db, Hey I am Integrated 3 api's</p>
            <div className="search-btns">
            <div className="search-bar">
            <span >Search Meal</span>
            <input type="text" value={text} onChange={handleChange}/>
            </div>
            <div className="Sort-bar">
            <span>Sort</span>
            <input type="text" className="sort-input" maxLength={1}  value={text1} onChange={handleSortChange}/>
            </div>
            <button onClick={randomMeal}>Random Meal</button>
            <button onClick={latestMeal}>Latest Meal</button>
            </div>
            
           {data.loading?<p className="data">Loading</p>:data.error.length!==0?<p className="data">Something went Wrong</p>:data.data===null?<p className="data">Not found</p>:
           
           data.data.map(item=>(
                <p className="data">{item.strMeal}</p>
            ))}
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        data:state
    }
}
const mapDispatchToProps=dispatch=>{
    return{
             fetchDataByName:(name)=>dispatch(fetchDataByName(name)),
             randomMeal:()=>dispatch(randomMeal()),
             latestMeal:()=>dispatch(latestMale()),
             sortByLetter:(letter)=>dispatch(sortByLetter(letter)),
             lobby:()=>dispatch(returnToLobby())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MealDb)
 
