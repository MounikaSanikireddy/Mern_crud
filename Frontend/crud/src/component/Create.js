import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './create.css'  // Importing the CSS file

function Create() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: '', email: '' })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        const { name, email } = form
        axios.post('http://127.0.0.1:4000/createUser', { name, email })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="create-container">
            <h5>Add the user</h5>
            <form onSubmit={SubmitHandler} className="create-form">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                />
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create
