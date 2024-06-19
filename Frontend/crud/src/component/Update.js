import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import './update.css'  // Importing the CSS file

function Update() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/getUser/" + id)
            .then((res) => {
                console.log(res)
                setName(res.data.name)
                setEmail(res.data.email)
            }).catch(err => console.log(err))
    }, [id])

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.put('http://127.0.0.1:4000/updateUser/' + id, { name, email })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="update-container">
            <h5>Update the user</h5>
            <form onSubmit={SubmitHandler} className="update-form">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                />
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Update
