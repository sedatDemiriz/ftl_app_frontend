// import { useMemo, useEffect, useState } from 'react'
// import { render } from 'react-dom'
// import { useTable } from 'react-table'
import { Form, Button } from 'react-bootstrap'
import { Container } from '@material-ui/core'

const axios = require('axios')

const LoginForm = () => {
    return (
        <Container fixed>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control size='lg' type='email' placeholder='Email address' />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control size='lg' type='password' placeholder='Password' />
                </Form.Group>
                <Button variant='primary' type='submit'>Log In</Button>
            </Form>
        </Container>
    )
}

export default LoginForm