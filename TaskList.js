import {TaskItem} from './TaskItem.js'
const taskList = ['first', 'second', 'third']


export class TaskList extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = ''
        this.render()
        this.deleteItem()
    }

    render(){
        taskList.map(task => {
            this.shadowRoot.innerHTML += `<task-item taskName="${task}"></task-item>`
        })       
    }

    deleteItem(){
        this.addEventListener('delete-task', event => {
            taskList = taskList.filter(task => task !== event.detail)
            console.log('test')
            this.render()
            
        })
    }

    
    
    
}

window.customElements.define('task-list', TaskList)