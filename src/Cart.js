import React, { useEffect, memo } from 'react';
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props){

    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
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
                                <td><button onClick={()=>{dispatch({type :'수량증가', data : a.id})}}>+</button>&nbsp;
                                <button onClick={()=>{dispatch({type:'수량감소', data: a.id})}}>-</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>

            {state.reducer2 === true
             ?  (<div className="my-alert2">
                    ✨지금 바로 구매 시 신규 할인 20%✨ 
                    <button className="x_btn" onClick={()=>{dispatch({type:'닫기'})}}>X</button>
                </div>
                )
             : null
            }
            <Parent 이름 = "강민주  " 나이="24"/>

        </div>
    )
}

function Parent(props){
    return (
      <div>
        <Child1 이름={props.이름} />
        <Child2 나이={props.나이} />
      </div>
    )
  }
  
  function Child1(){
    useEffect( ()=>{ console.log('렌더링됨1') } );
    return <div>1111</div>
  }
  let Child2 = memo(function(){
    useEffect( ()=>{ console.log('렌더링됨2') } );
    return <div>2222</div>
  });

// function stateToprops(state) {
//     return {
//         state : state.reducer,
//         alertOpen : state.reducer2
//     }

// }

// export default connect(stateToprops)(Cart)

export default Cart;