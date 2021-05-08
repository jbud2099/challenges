import React from 'react';
import EditButton from 'react-edit-button'

class ToDoDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ["Hey", "Hello World", "Hello There", "Hola"],
            newList: "",
            text: 'edit me later on' //Plan to edit later
        };
        this.addList = this.addList.bind(this);
    }

    onAccept = (text) => {
        this.setState({ text })
    }

    onChangeValue = event => {
        this.setState({ newList: event.target.value });
        console.log(this.state.newList)
    };

    addList(event) {
        event.preventDefault();
        this.setState({
            list: [...this.state.list, this.state.newList]
        })
    }

    onAddItem = (e) => {
        this.setState((preState) => ({
            //const list = state.list.push(state.value);
            list: [...preState.list, preState.value],
            
        }))
    }

    removeItem(item) {
        const list = this.state.list.slice();
         
    list.some((el, i) => {
        if (el === item) {
        
          list.splice(i, 1);
          return true;
        }
      });
      this.setState({
        list: list
      }); 
    }

    onUpdateItem = i => {
        this.setState(state => {
            const list = state.list.map((item, j) => {
                if (j === i) {
                    return item + 'Item is completed';
                } else {
                    return item;
                }
            });

            return {
                list
            }
        })
    }

    render() {
        return (
            <div>

                <input
                type="text"
                value={this.state.value}
                onChange={this.onChangeValue}
                />
                <button
                type="button"
                onClick={this.addList}
                > Add </button>
                <ul>
                    {this.state.list.map(item => (
                    <li key={item}><input type="checkbox" onChange={() => this.onUpdateItem}/>{item}
                    <button className="button" onClick={() => this.removeItem(item)}>Delete</button>
                    </li>
                    
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDoDisplay;



// export class Button extends Component {
//     handleClick(e) {MouseEvent} {
//       e.preventDefault();
//       alert(e.currentTarget.tagName); // alerts BUTTON
//     }
    
//     render() {
//       return <button onClick={this.handleClick}>
//         {this.props.children}
//       </button>
//     }
//   } {/* <input type="checkbox" onInput={this.handleInput} checked/> */}