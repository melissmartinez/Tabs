import React, { useState, useRef } from 'react';

const Tabs = ({ tabNames, tabContents }) => {
    const [state, setState] = useState({
        selectedTabIndex: 0,
    })

    const onClickHandler = (event, idx) => {
        // set state selectedTabIndex to the tab that was clicked
        setState({
            selectedTabIndex: idx
        });
    }

    const selectedStyle = {
        border: '1px solid white',
        backgroundColor: 'black',
        color: 'white',
    };

    return (
        <div>
            <ul>
                {tabNames.map((tabName, idx) => {
                    return (idx == state.selectedTabIndex) ? <li key={idx} onClick={(event) => onClickHandler(event, idx)} style={selectedStyle}>{tabName}</li> : <li key={idx} onClick={(event) => onClickHandler(event, idx)}>{tabName}</li>
                })}
            </ul>

            <h4>{tabContents[state.selectedTabIndex]}</h4>
        </div>
    );
}

export default Tabs;