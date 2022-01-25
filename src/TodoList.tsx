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
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const tasksComponents = props.tasks.map(t =>
        <Task
            key={t.id} {...t}
            removeTask={props.removeTask}/>)
    const onClickAddTask = () => {
        props.addTask(title)
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
    }
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyPress={onKeyPressAddTack}
                />
                <button onClick={onClickAddTask}>+</button>
            </div>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button
                    title={"All"}
                    onClickHandler={setAllFilter}
                />
                <Button
                    title={"Active"}
                    onClickHandler={setActiveFilter}
                />
                <Button
                    title={"Completed"}
                    onClickHandler={setCompletedFilter}
                />
            </div>
        </div>
    );
}

export default TodoList;