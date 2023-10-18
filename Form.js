export class Form extends HTMLElement{
    constructor(){
        super()
        this.render()
    }

    render(){
        this.innerHTML = `
        <h2>Add task</h2>
        <input type="text" placeholder="Enter the name of the new task"/>
        <button>Add</button>`
    }
}

window.customElements.define('task-form', Form)