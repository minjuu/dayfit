import React, { useEffect, memo, useState } from 'react';
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import './login.scss';
function Login(props){

    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    let [inputData, inputData변경] = useState('');

    return (
        <div>
            <br/><br/><br/>
            <img className="logo2" src = {'/img/logo.png'} /><br/><br/>
            <h6 className="des"><b>로그인으로 더 많은 서비스를 이용하세요.</b></h6><br/>
            <input className="id" placeholder=" ID 를 입력하세요." onChange = {(e)=>{ inputData변경(e.target.value) }}/><br />
            <input className="pw" placeholder=" PW 를 입력하세요." onChange = {(e)=>{ inputData변경(e.target.value) }}/><br />
            <button className="signin"><b>로그인</b></button><br/><br/>
            <button className="findidpw">ID / PW 찾기</button> | <button className="signup">회원가입</button><br/>
            <br /><hr width = "90%" /><br/>
            <button className="signin2"><img className="ic" src={'/img/naver.png'}/>네이버로 로그인</button><br/><br/>
            <button className="signin3"><img className="ic" src={'/img/kakao.png'}/>카카오로 로그인</button><br/><br/>
        </div>
    )
}



export default Login;
            