import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import Layout from '../components/layout'
import axios from 'axios'

const Contact = ({ location }) => {

    const [loading, setLoading] = useState(false)

    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const mailOptions = {
            name: formValues.name,
            email: formValues.email,
            message: formValues.description
        }

        console.log(mailOptions)

        setFormValues({
            name: '',
            email: '',
            description: ''
        })

        setLoading(true)
        axios.post('https://simple-portfolio-mailer.herokuapp.com/contact', mailOptions).then(res => {
            alert("Your email has been sent. I will contact you as soon as possible")
        }).catch(err => {
            console.log(err.response)
            alert("Unable to send email. Please try again or contact me via LinkedIn")
        }).finally(() => {
            setLoading(false)
        })
    }
    

    return (
        <Layout location={location}>
            <div className='form-container'>
                <div className='text-field-containers'>
                    <TextField value={formValues.name} onChange={handleChange} color='secondary' type='text' label='Name' name='name' required></TextField>
                    <TextField value={formValues.email} onChange={handleChange} color='secondary' type='text' label='Email' name='email' required></TextField>
                    <TextField multiline rows={8} value={formValues.description} onChange={handleChange} color='secondary' type='text' label='How can I make your life easier?' name='description' required></TextField>
                    <Button onClick={handleSubmit} color='secondary' variant='outlined' >Submit</Button>
                </div>
            </div>
        </Layout>
    )
}

export default Contact