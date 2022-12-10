import React, {useState} from "react";

type RatingPropsType = {
    onChange:(value:number)=>void
    selected:number
}


export function Rating(props: RatingPropsType) {



    return (
        <div>
            <Star  selected={props.selected > 0} onClick={()=>props.onChange(1)}/>
            <Star  selected={props.selected > 1} onClick={()=>props.onChange(2)}/>
            <Star  selected={props.selected > 2} onClick={()=>props.onChange(3)}/>
            <Star  selected={props.selected > 3} onClick={()=>props.onChange(4)}/>
            <Star  selected={props.selected > 4} onClick={()=>props.onChange(5)}/>

        </div>
    )


}


type StarPropsType = {
    selected: boolean
    onClick: () => void


}

function Star(props: StarPropsType) {


    return (
        props.selected === true
            ? <span onClick={props.onClick}><b>star!</b></span>
            : <span onClick={props.onClick}>star!</span>
    )


}