import React, {useState} from "react";
import {debug} from "util";

type AccordionPropsType = {
    title: string

}

type PageTitleType={
    title: string
    onClick:()=>void
}

function Accordion(props: AccordionPropsType) {
    const [colapsed, setColapsed] = useState(false)
    return (
        <div>
            <Pagetitle title={props.title} onClick={()=>setColapsed(!colapsed)}/>
             {colapsed && <AccordionBody/>}
        </div>
    )
}

function Pagetitle(props: PageTitleType) {
    return (
        <h1 onClick={props.onClick}>{props.title}</h1>
    )
}

function AccordionBody() {
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

export default Accordion;