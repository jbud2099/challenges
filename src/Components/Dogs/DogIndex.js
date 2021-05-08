import React from "react";
import DogDisplay from "./DogDisplay"

class DogIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ""
        }
    }

    refreshPage() {
        window.location.reload()
    }

    dogFetch = () => {
        console.log("Component Mounted");
        console.log(this.state.img)
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
            })
            .catch(console.log)
        console.log(this.state.img);
    }

    render() {
        return(
            <div>
                
                <DogDisplay message={this.state.img} />
                <button onClick={this.dogFetch}>Press Me!</button>
            </div>
        )
    }
}

export default DogIndex;