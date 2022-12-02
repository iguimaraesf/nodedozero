import React from 'react'
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function Registration() {
    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    })

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/auth', data).then(() => {
            console.log(data)
        })
    }
    return (
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Usuário</label>
                    <ErrorMessage name='username' component='span'/>
                    <Field id='inputCreatePost' autoComplete='off' name='username' placeholder='Ex. usuario123'/>

                    <label>Senha</label>
                    <ErrorMessage name='password' component='span'/>
                    <Field id='inputCreatePost' autoComplete='off' name='password' type='password' placeholder='Ex. suasenha'/>

                    <button type='submit'>Registrar-se</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration