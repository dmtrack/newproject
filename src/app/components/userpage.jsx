import React, {useState, useEffect} from 'react';
import api from '../api';
import QualitiesList from './qualitiesList';
import { Link } from "react-router-dom";


const UserPage = ({id, match}) => {
const userId = match.params.userId;

    const [user,  setUser] = useState()
    useEffect(() => {
        api.users.getById(userId).then((data) => 
        setUser(data));
    });

    if (user) {
    return <div>
            <ul>
                <li>{user.name}</li>
                <li>{`Профессия: ${user.profession.name}`}</li>
                <li>{<QualitiesList qualities={user.qualities} />}</li>
                <li>{`Количество встреч: ${user.completedMeetings}`}</li>
                <li>{`Rate:${user.rate}`}</li>
                <Link to="/users"><button>Все пользователи</button></Link>
            </ul>
        </div>
    }
    return <><h1>Loading...</h1>
    </>
    }

export default UserPage;

