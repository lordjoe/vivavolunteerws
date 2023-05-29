import React, {useState} from 'react';
import PersistentObject from "./PersistentObject";
import {CallbackFunction, CallbackHolder} from "./Holders";

function isActive(active: Set<string>,s: string) : boolean {
  //  if(active.size === 0)
  //      return true;
    return active.has(s);
}

function getRowSize() : number {
    let size = window.innerWidth;
    return   (size / 100);
}
function FilterButtons(props: CallbackHolder) {

        const [buttonStat , setButtonState] = useState (false)

        let onChange: CallbackFunction = props.onchange;
        const handleButtonClick = (value: string) => {
            let active : Set<string> = PersistentObject.getInstance().activeFilters;
            if(active.has(value))
                active.delete(value);
            else
                active.add(value);
            setButtonState(!buttonStat);
            onChange();
        };

    const handleAllButtonClick = () => {
        let active : Set<string> = PersistentObject.getInstance().activeFilters;
        if(active.size > 0)
            active.clear();
          setButtonState(!buttonStat);
        onChange();
    };


    let set: Set<string> = PersistentObject.getInstance().allFilters;
    let activeSet: Set<string> = PersistentObject.getInstance().activeFilters;
    if(getRowSize() > set.size) {
        return (
            <div className={"button-row"}>
                <button
                    key="all"
                    onClick={() => handleAllButtonClick()}
                    className={`button ${ activeSet.size === 0  ? 'in' : 'out'}`}
                >
                    All
                </button>

                {Array.from(set).map((value) => (
                    <button
                        key={value}
                        onClick={() => handleButtonClick(value)}
                        className={`button ${isActive(activeSet,value)  ? 'in' : 'out'}`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    };




    return (
            <div className={"button-row"}>
                <button
                    key="all"
                    onClick={() => handleAllButtonClick()}
                    className={`button ${ activeSet.size === 0  ? 'in' : 'out'}`}
                >
                 All
                </button>
                <br/>
                {Array.from(set).map((value) => (
                    <button
                        key={value}
                        onClick={() => handleButtonClick(value)}
                        className={`button ${isActive(activeSet,value)  ? 'in' : 'out'}`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    };


export default FilterButtons;