import { Component } from "react";
import imagePen from './pen.png';

export class ToDoList extends Component {
    state = {
        userInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert("Пожалуйста, введите задание")
        } else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input
                type="text"
                placeholder="Что необходимо сделать?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Добавить</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) => (
                    <li onClick={this.crossWord} key={index}><img src={imagePen} alt="Pen" width="30px"/> {item}</li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Удалить всё</button>    
            </div>
            </form>
        </div>
    }
}