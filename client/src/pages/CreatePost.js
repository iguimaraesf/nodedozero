import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function CreatePost() {
    const initialValues = {
        title: '',
        postText: '',
        usename: ''
    }
    const onSubmit = (data) => {
        axios.post('http://localhost:3001/posts', data).then((response) => {
            console.log("ok, funcionou!!!")
        })
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("O título da publicação é necessário"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })
    return (
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Título</label>
                    <ErrorMessage name='title' component='span'/>
                    <Field id='inputCreatePost' autoComplete='off' name='title' placeholder='Ex. Meu primeiro título'/>

                    <label>Post</label>
                    <ErrorMessage name='postText' component='span'/>
                    <Field id='inputCreatePost' autoComplete='off' name='postText' placeholder='Ex. meu texto'/>

                    <label>Usuário</label>
                    <ErrorMessage name='username' component='span'/>
                    <Field id='inputCreatePost' autoComplete='off' name='username' placeholder='Ex. Joao123'/>
                    <button type='submit'>Criar Post</button>
                </Form>
            </Formik>
        </div>
    
    )
}

export default CreatePost