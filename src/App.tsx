import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";
import task from "./Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"
const App = () => {
    const todoListTitle: string = "What we learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])
    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title, isDone: false}
        const updateTasks: Array<TaskType> = [newTask, ...tasks]
        setTasks(updateTasks)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean ) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone} : t))
    }

    const [filter, setFilter] = useState<FilterValuesType>("all")
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
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
