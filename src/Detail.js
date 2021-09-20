import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './Detail.scss';
import axios from 'axios';
import {재고context} from './App.js'

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

            <Button variant="dark" onClick={()=>{props.재고변경([1,1,1,1,1,1,1,1])}}>주문하기</Button> <t />
            <Button variant="success">N pay 주문</Button> 

        </div>
    </div>
    </div>
    )
  }


  function Info(props) {
    return (
      <p>재고 : {props.재고[0]}</p>
    )
  }

  export default Detail;