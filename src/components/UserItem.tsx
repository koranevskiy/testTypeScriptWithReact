import React, {FC} from 'react';
import {IUser} from "./types/types";
interface UserItemProps{
    user: IUser;
}
const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div  style={{padding: 15,display: 'flex', justifyContent:'center', border: "1px solid black"}}>
            Id: {user.id} lives in {user.address.city} on street {user.address.street}
        </div>
    );
};

export default UserItem;