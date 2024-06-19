import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./user.css"  // Importing the CSS file

function User() {
    let [users, setUser] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:4000")
        .then((res) => setUser(res.data)).catch(err => console.log(err))
    }, [])
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/deleteUser/' + id)
        .then((res) => {
            console.log(res)
            window.location.reload()
        }).catch((err) => console.log(err))
    }
    
    return (
        <div className="user-container">
            <Link to="create">
                <button className='btn btn-primary'>Add</button>
            </Link>  
            <table className="user-table">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`update/${user._id}`}>
                                        <button className='btn btn-success'>Edit</button>
                                    </Link>    
                                    <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default User
