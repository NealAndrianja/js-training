

export class TaskItem extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.render()
    }

    render(){
        const taskName = this.getAttribute('taskName')
        this.shadowRoot.innerHTML = `
        <h3>${taskName}</h3>
        <button>Delete</button>`
        
        const btn = this.shadowRoot.querySelector('button')
        console.log('hello', taskName)
        btn.addEventListener('click', () => {
           const delEvent = new CustomEvent('delete-task', {detail: taskName})
           console.log('event:', delEvent.detail)
           this.shadowRoot.dispatchEvent(delEvent)
        })
    }
}
window.customElements.define('task-item', TaskItem)
