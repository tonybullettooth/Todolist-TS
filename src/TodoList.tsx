import React, {useState} from 'react';
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
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={(e)=>setTitle(e.currentTarget.value)}
                />
                <button onClick={() => props.addTask(title)}>+</button>
            </div>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button
                    title={"All"}
                    onClickHandler={() => props.changeFilter("all")}
                />
                <Button
                    title={"Active"}
                    onClickHandler={() => props.changeFilter("active")}
                />
                <Button
                    title={"Completed"}
                    onClickHandler={() => props.changeFilter("completed")}
                />
            </div>
        </div>
    );
}

export default TodoList;