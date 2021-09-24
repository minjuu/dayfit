import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar,Container,Nav,NavDropdown,Button,Table } from 'react-bootstrap';
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
      <br />     
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
            <div className="left">
            <h4 className="pt-5"><b>{찾은상품.title}</b>&nbsp;<b className="best2">&nbsp;BEST&nbsp;</b></h4><br/>
            <p><b className="price">판매가</b>{찾은상품.price}원</p>
            <p className="desc"><r className="desc">배송 방식</r>국내배송</p>
            <p className="desc"><r className="desc">배송 방법</r>택배</p>
            <p className="desc"><r className="desc">배송비&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</r>무료</p>
            <Info 재고 = {props.재고} ></Info>
            </div>
            <hr /><br/>

            <button className="pay" onClick={()=>{
              
              props.재고변경([1,1,1,1,1,1,1,1])
              props.dispatch({type : '항목추가', payload : {id:찾은상품.id, name : 찾은상품.title, quan : 1, price : 찾은상품.price2}})
              history.push('/cart');

              }}>장바구니 / 주문</button> <t />
            <button className="npay"><b>N</b> pay 주문</button> 

          </div>
        </div>
        <br />
        <body id="bootstrap-overrides">
          <Nav fill variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}><h4 className="black">상품 정보</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}><h4 className="black">리뷰</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={()=>{ 스위치변경(false); 누른탭변경(2) }}><h4 className="black">문의 사항</h4></Nav.Link>
            </Nav.Item>
          </Nav>
        </body>

        <CSSTransition in={true} className="wow" timeout={500}>
          <TabContent 누른탭 = {누른탭} 스위치변경 = {스위치변경} 찾은상품 = {찾은상품}/>
        </CSSTransition>
      </div>
    )
  }

  function TabContent(props){
    useEffect(()=>{
      props.스위치변경(true);
    })

    if(props.누른탭 === 0){
      return <div><img src = {'/img/des'+props.찾은상품.id+'.png'} width="100%"/></div>
    }
    else if(props.누른탭 === 1){
      return <div><br/><Table responsive="sm">
      <thead>
        <tr>
            <th>No.</th>
            <th>상품명</th>
        </tr>
      </thead>
      <tbody>
        <br/>
      </tbody>
      </Table>
      <h6>등록된 리뷰가 없습니다.</h6>
      </div>
    }
    else if(props.누른탭 === 2){
      return <div><br/><Table responsive="sm">
      <thead>
        <tr>
            <th>No.</th>
            <th>상품명</th>
        </tr>
      </thead>
      <tbody>
        <br/>
      </tbody>
      </Table>
      <h6>등록된 문의 사항이 없습니다.</h6></div>
    }
    
  }

  function Info(props) {
    return (
      <p className="desc">{props.재고[0]}개 구매중 </p>
    )
  }


  function stateToprops(state) {
    return {
        state : state.reducer,
        alertOpen : state.reducer2
    }

}

export default connect(stateToprops)(Detail)