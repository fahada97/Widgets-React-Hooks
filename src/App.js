import React from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is one of the favorite JS libraries among engineers.'
    },
    {
        title: 'How to use React?',
        content: 'Use react by creating components.'
    }
]

export default () => {
    return (
        <div>
            {/* <Accordion items ={items} /> */}
            <Search/>
        </div>
    )
}