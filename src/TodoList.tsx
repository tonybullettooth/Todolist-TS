import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    filter: FilterValuesType
}

const TodoList = (props: TodoListPropsType) => {
    const [error, setError] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")
    const tasksComponents = props.tasks.map(t =>
        <Task
            key={t.id} {...t}
            removeTask={props.removeTask}
            changeTaskStatus={props.changeTaskStatus}
        />
    )
    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }
    const onKeyPressAddTack = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickAddTask()
    const setAllFilter = () => {
        props.changeFilter("all")
    }
    const setActiveFilter = () => {
        props.changeFilter("active")
    }
    const setCompletedFilter = () => {
        props.changeFilter("completed")
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const errorMessageStyle = {color: "white", backgroundColor: "red"}
    const errorMessage = <div style={errorMessageStyle}> Title is required!</div>

return (
    <div>
        <TodoListHeader title={props.title}/>
        <div>
            <input
                value={title}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressAddTack}
                className={error ? "error" : ""}
            />
            <button onClick={onClickAddTask}>+</button>
            {error && errorMessage}
        </div>
        <ul>
            {tasksComponents}
        </ul>
        <div>
            <Button
                active={props.filter === "all"}
                title={"All"}
                onClickHandler={setAllFilter}
            />
            <Button
                active={props.filter === "active"}
                title={"Active"}
                onClickHandler={setActiveFilter}
            />
            <Button
                active={props.filter === "completed"}
                title={"Completed"}
                onClickHandler={setCompletedFilter}
            />
        </div>
    </div>
)
    ;
}

export default TodoList;