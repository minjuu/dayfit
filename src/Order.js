import React, { useEffect, memo } from 'react';
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, Route, Switch } from 'react-router-dom'
import './Detail.scss';
import './App.css';
function Order(props){

    let state = useSelector((state) => state);
    let dispatch = useDispatch();


    return (
        <div><br/>
          <h6 className="left2">주문하기</h6> <hr/><br/>
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

export default Order;