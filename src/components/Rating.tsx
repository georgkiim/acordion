import React, {useState} from "react";

type RatingPropsType = {}


export function Rating(props: RatingPropsType) {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star val={1} selected={value > 0} onClick={setValue}/>
            <Star val={2} selected={value > 1} onClick={setValue}/>
            <Star val={3} selected={value > 2} onClick={setValue}/>
            <Star val={4} selected={value > 3} onClick={setValue}/>
            <Star val={5} selected={value > 4} onClick={setValue}/>


        </div>
    )


}


type StarPropsType = {
    selected: boolean
    onClick: (h: number) => void
    val:number

}

function Star(props: StarPropsType) {


    return (
        props.selected === true
            ? <span onClick={()=>props.onClick(props.val)}><b>star!</b></span>
            : <span onClick={()=>props.onClick(props.val)}>star!</span>
    )


}