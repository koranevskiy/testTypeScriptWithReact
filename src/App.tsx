import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./components/types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExamples from "./components/EventExamples";

const App = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])
    const fetchUsers = async () => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }
    const fetchTodos = async () => {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
    }
    return (
        <div>
            <Card width={'300px'} height={'300px'} variant={CardVariant.fill} onClick={() => console.log('Click')}>
                <button>Hello</button>
            </Card>
            <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
            <div style={{backgroundColor: 'aliceblue', display: 'flex', justifyContent: 'center'}}>
                <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
            </div>
            <EventExamples/>
        </div>
    );
};

export default App;