import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {
    const tasksComponents = props.tasks.map(t => <Task key={t.id} {...t} removeTask={props.removeTask}/>)
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
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