import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './Detail.scss';
import axios from 'axios';
import {재고context} from './App.js'

import { CSSTransition } from "react-transition-group"

import { connect } from 'react-redux'

let 박스 = styled.p`
  padding-top : 30px;
`;

let 제목 = styled.p`
  font-size : 25px;
  color : ${ props => props.색상 }
`;




function Detail(props){

  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let 재고 = useContext(재고context)

  useEffect(()=>{

    let 타이머 = setTimeout(()=>{ alert변경(false) } , 2000);
    return ()=>{ clearTimeout(타이머) }
  },[]);



    let { id } = useParams();
    let history =  useHistory()
    let 찾은상품 = props.clothes.find(function(상품){
      return 상품.id == id
    });

    

    return(
      <div className="container">
        <박스>
          <제목 className="black">Detail</제목>
        </박스>

        <input onChange = {(e)=>{ inputData변경(e.target.value) }}/><br /><br />


        {
          alert === true
          ? <div className="my-alert2">
          <p>⏰ 재고가 얼마 남지 않았습니다.</p>
        </div>
          : null
        }

        
        <div className="row">          
          <div className="col-md-6"><br />
              <img src = {'/img/product'+찾은상품.id+'.JPG'} width="100%"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.price}원</p>
            <Info 재고 = {props.재고} ></Info>
            <hr />

            <Button variant="dark" onClick={()=>{
              
              props.재고변경([1,1,1,1,1,1,1,1])
              props.dispatch({type : '항목추가', payload : {id:찾은상품.id, name : 찾은상품.title, quan : 1}})
              history.push('/cart');

              }}>주문하기</Button> <t />
            <Button variant="success">N pay 주문</Button> 

          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="linjk-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{ 스위치변경(false); 누른탭변경(2) }}>Option 3</Nav.Link>
          </Nav.Item>
        </Nav>

        <CSSTransition in={true} className="wow" timeout={500}>
          <TabContent 누른탭 = {누른탭} 스위치변경 = {스위치변경}/>
        </CSSTransition>
      </div>
    )
  }

  function TabContent(props){
    useEffect(()=>{
      props.스위치변경(true);
    })

    if(props.누른탭 === 0){
      return <div>0번째</div>
    }
    else if(props.누른탭 === 1){
      return <div>1번째</div>
    }
    else if(props.누른탭 === 2){
      return <div>2번째</div>
    }
    
  }

  function Info(props) {
    return (
      <p>재고 : {props.재고[0]}</p>
    )
  }


  function stateToprops(state) {
    return {
        state : state.reducer,
        alertOpen : state.reducer2
    }

}

export default connect(stateToprops)(Detail)