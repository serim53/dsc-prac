import React, { Component } from 'react';

class Signup extends Component {


    // select option으로 성별 체크
    state = {
        id: '',
        pw: '',
        pw2: '',
        name: '',
        birth: '',
        gender: '여',
        phonenum: ''
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert('id : ' + this.state.id +'\n'
            + '이름 : ' + this.state.name +'\n'
            + '생년월일 : ' + this.state.date + '\n'
            + '성별: ' + this.state.gender + '\n'
            + '전화번호 : ' + this.state.phonenum);
        this.setState({
            id: '',
            pw: '',
            pw2: '',
            name: '',
            birth: '',
            gender: '여',
            phonenum: ''
        });
    }

    render() {
        return (
            <div>
                <h1>회원가입</h1>
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
                    name="pw"
                    placeholder="비밀번호"
                    value={this.state.pw}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="password"
                    name="pw2"
                    placeholder="비밀번호 재확인"
                    value={this.state.pw}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <br />
                <select
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}>
                    <option value="여">여</option>
                    <option value="남">남</option>
                </select>
                <br />
                <input
                    type="text"
                    name="phonenum"
                    placeholder="휴대전화"
                    value={this.state.phonenum}
                    onChange={this.handleChange}
                />
                <br/>
                <button onClick={this.handleClick}> 가입하기 </button>
            </div>
        );
    }

}

export default Signup;

