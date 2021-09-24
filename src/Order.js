import React, { useEffect, memo } from 'react';
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, Route, Switch } from 'react-router-dom'
import './Detail.scss';
import './App.css';
import './order.scss';

function Order(props){

    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    
    var sum = 0;
    return (
        <div>
          <br/>
          <h5 className="left2"><b>주문하기</b></h5>
          <Table responsive="sm" className="fontst">
                <thead className="theadd">
                <tr>
                    <th>No.</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>가격</th>
                    <th>합계</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.reducer.map((a,i)=>{
                        return(
                          <tr key={i} className="ordertr">
                          <td><img src = {'/img/product'+a.id+'.JPG'} width="120px"/></td>
                          <td>{ a.name }</td>
                          <td>{ a.quan }개</td>
                          <td>{ numberWithCommas(a.price) }원</td>
                          <td>{ numberWithCommas(sum += Number(a.price)*Number(a.quan)) }원</td>
                          
                      </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <h5 className="right2"><b><b>총 결제금액: &nbsp;</b><b className="redt">{numberWithCommas(sum)}원</b></b></h5><br/>
            <h5 className="left2"><br/><b>무통장 입금</b></h5><hr/><br/>
            <div>
            <b className="leftt">입금자 명: &nbsp;&nbsp;<input className="id" placeholder=" 입금자 명을 입력하세요."/></b><br/>
            <b className="leftt">계좌 번호: &nbsp;&nbsp;<input className="id" placeholder=" 계좌 번호를 입력하세요."/></b><br />
            </div>
            <button className="pay3"> 입금 완료하기 </button> 
            
        </div>
    )
}

  
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// function stateToprops(state) {
//     return {
//         state : state.reducer,
//         alertOpen : state.reducer2
//     }

// }

// export default connect(stateToprops)(Cart)

export default Order;

