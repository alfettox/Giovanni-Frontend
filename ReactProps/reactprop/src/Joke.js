import React from "react";


export default function Joke(props){
    return(
        <div>
            <h1>Setup: {props.setup}</h1>
            <h2>PunchLine: {props.punchline}</h2>
            <h3>isPun: {props.isPun}</h3>
            <p>{props.comments}</p>
            <hr />
        </div>

    )
}