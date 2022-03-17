import React, {FC} from 'react';
import {IUser} from "./types/types";
import UserItem from "./UserItem";
interface UserListProps{
    users: Array<IUser>
}
const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div style={{width: '800px', backgroundColor: 'blueviolet', margin: '0 auto'}}>
            {users.map(user =>
                <UserItem user={user} key={user.id}/>
            )}
        </div>
    );
};

export default UserList;