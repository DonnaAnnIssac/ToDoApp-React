import React from 'react'
import ReactDOM from 'react-dom'
// import createReactClass from 'create-react-class'

const Title = () => {
  return (
    <div>
      <div>
        <h1>to-do</h1>
      </div>
    </div>
  )
}

const TodoForm = ({addTodo}) => {
  // Input tracker
  let input
  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        addTodo(input.value)
        input.value = ''
      }}>
        +
      </button>
    </div>
  )
}

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={() => {
    console.log(todo.id)
    remove(todo.id)
  }}> {todo.text} </li>)
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove} />)
  })
  return (<ul>{todoNode}</ul>)
}

window.id = 0
class TodoApp extends React.Component {
  constructor (props) {
    // Pass props to parent class
    super(props)
    // Set initial state
    this.state = {
      data: []
    }
  }
  // Add todo handler
  addTodo (val) {
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    this.state.data.push(todo)
    // Update state
    this.setState({data: this.state.data})
  }
  // Handle remove
  handleRemove (id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo
    })
    // Update state with filter
    this.setState({data: remainder})
  }

  render () {
    // Render JSX
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList todos={this.state.data} remove={this.handleRemove.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'))

// const AddTask = createReactClass({
//   getInitialState: function () {
//     return {
//       counter: 0,
//       task: null
//     }
//   },
//   render: function () {
//     return (
//       <div>
//         <button onClick={this.addCounter} >+</button>
//         <div onClick={this.addTask} contentEditable onKeyPress={this.checkForEnter}> What do you have to do {this.props.naam} ?</div>
//         <div>{this.state.counter}</div>
//       </div>
//     )
//   },
//   addCounter () {
//     this.setState({counter: this.state.counter + 1})
//   },
//   addTask (event) {
//     event.target.innerText = ''
//   }
// })

// const App = createReactClass({
//   render: function () {
//     return (
//       <div>
//         <p>Hello {this.props.name}</p>
//         <AddTask naam={this.props.name} />
//       </div>
//     )
//   }
// })

// ReactDOM.render(<App name='Donna' />, document.getElementById('app'))

export default TodoApp
