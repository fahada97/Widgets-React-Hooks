import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    //const [showDropdown, setDropdown] = useState(true);

    return (
        <div>
            {/* <button onClick={()=>setDropdown(!showDropdown)}>Toggle</button>
            {
                showDropdown ?
                <Dropdown 
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                /> : null
            } */}
            <Header />
            <Route path ='/'>
                <Accordion items = {items}/>
            </Route>
            <Route path ='/list'>
                <Search />
            </Route>
            <Route path ='/dropdown'>
                <Dropdown 
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path ='/translate'>
                <Translate />
            </Route>
        </div>
    )
}