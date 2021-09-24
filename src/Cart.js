import React, { useEffect, memo } from 'react';
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, Route, Switch } from 'react-router-dom'
import './Detail.scss';
function Cart(props){

    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div>
        <br/>
          <h5 className="left2"><b>장바구니</b></h5> <hr/><br/>
            <Table responsive="sm" className="fontst">
                <thead className="theadd">
                <tr>
                    <th>No.</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.reducer.map((a,i)=>{
                        return(
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{ a.name }</td>
                                <td>{a.quan}</td>
                                <td><button className="btn1" onClick={()=>{dispatch({type :'수량증가', data : a.id})}}><b>+</b></button>&nbsp;
                                <button className="btn1" onClick={()=>{dispatch({type:'수량감소', data: a.id})}}><b>-</b></button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>

            {state.reducer2 === true
             ?  (<div className="my-alert2">
                    ✨일주일동안 매일 출석하면 20% 할인 쿠폰 제공✨ 
                    <button className="x_btn" onClick={()=>{dispatch({type:'닫기'})}}>X</button>
                </div>
                )
             : null
            }
            <br/><br/>
            <Link to="/order">
              <button className="pay"> 주문하기 </button> 
            </Link>

        </div>
    )
}





// function stateToprops(state) {
//     return {
//         state : state.reducer,
//         alertOpen : state.reducer2
//     }

// }

// export default connect(stateToprops)(Cart)

export default Cart;