import React from 'react'
import PropTypes from 'prop-types'

class SignupForm extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handle_change = e => {
        const name = e.props.username
        const value = e.props.value
        this.setState(prevState => {
            const newState = {...prevState}
            newState[name] = value
            return newState
        })
    }

    render() {
        return (
            <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                <h4>Signup</h4>
                <label htmlFor='username'>Username</label>
                <input 
                    type='name'
                    name='username'
                    value={this.state.username}
                    onChange={this.handle_change}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handle_change}
                />
                <input type='submit' />
            </form>
        )
    }
}

export default SignupForm

SignupForm.propTypes = {
    handle_signup: PropTypes.func.isRequired
}