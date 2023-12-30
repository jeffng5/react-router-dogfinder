import { useParams } from "react-router-dom" 
let data = require('/Users/jeffreyng/Downloads/react-router-dogfinder/src/db.json')




function Dog(props) {
    let { id } = useParams()
return ( 
    <>
    

        <h3>{props.name}</h3>

        <img src={props.src}/>
        <div>Hi my name is {props.name}.</div>
        
        <div>I am {props.age} years old.</div>

        
        Here are some facts about me:
        <div>
        {props.facts}</div>
    </>

)

}

export default Dog
