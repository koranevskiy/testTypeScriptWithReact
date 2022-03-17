import React, {FC} from 'react';
import {ITodo} from "./types/types";
interface TodoProps{
    todo: ITodo
}
const TodoItem: FC<TodoProps> = ({todo}) => {
    return (
        <div>
            Id {todo.id} Title {todo.title} checked <input type="checkbox" checked={todo.completed}/>
        </div>
    );
};

export default TodoItem;