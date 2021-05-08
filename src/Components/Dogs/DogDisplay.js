import React from "react";

const DogDisplay = (props) => {
    return (
        <div>
            <img src={props.message} alt="dog"/>
        </div>
    )
}

export default DogDisplay;