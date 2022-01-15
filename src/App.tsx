import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"
const App = () => {
    const todoListTitle: string = "What we learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    const [filter, setFilter] = useState<FilterValuesType>("completed")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const getTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }
        const tasksForRender = getTasksForRender()

        return (
            <div className="App">
                <TodoList
                    title={todoListTitle}
                    tasks={tasksForRender}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                />
            </div>
        );
    }

    export default App;
