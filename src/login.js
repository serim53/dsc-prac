import React, { Component } from 'react';

class Login extends Component {


    state = {
        id: '',
        pw: ''
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert('id : ' + this.state.id );
        this.setState({
            id: '',
            passwd: ''
        });
    }

    render() {
        return (
            <div>
                <h1>로그인</h1>
                <input
                    type="text"
                    name="id"
                    placeholder="아이디"
                    value={this.state.id}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="password"
                    name="passwd"
                    placeholder="비밀번호"
                    value={this.state.passwd}
                    onChange={this.handleChange}
                />
                <br/>
                <button onClick={this.handleClick}> 로그인 </button>
                <button> 회원가입 </button>
            </div>
        )
    }
}

export default Login;

