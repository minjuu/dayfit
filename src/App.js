/* eslint-disable*/
import React, {useState, useContext} from 'react';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'

export let 재고context = React.createContext();

function App() {

  let [clothes, clothes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12,15,15,16,14,2,62]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <b><Navbar.Brand as={Link} to="/">d a y f i t</Navbar.Brand></b>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to = "/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    <Switch>
      <Route exact path="/">
        <div class="jumbotron">

          <div class="box">
            <h1 class="titleDes"><b>#이번주_뭐입지</b></h1>
            <div class="description">
              10% 기본 할인 + 30% 단독 쿠폰 제공!
            </div>
            <div class="description2">
              9.10 - 9.25
            </div>
            <p>
              <Button variant="light" size="sm">할인 받으러 가기</Button>
            </p>
          </div>

        </div>

        <div className="box2">
          <div className="container-fluid">

            <재고context.Provider value={재고}>

              <div className="row">
              {
                clothes.map(function(clothes, i){
                  return( 
                    <Info clothes={clothes} i={i}></ Info>
                  )
                })
              }
              </div>

            </재고context.Provider>

            <button className="btn btn-primary" onClick={()=>{

              axios.post('서버url', {id: 'dd', pw : 1234 })
              
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data)
                clothes변경([...clothes, ...result.data])
              })
              .catch(()=>{
                console.log("실패!")
              })

            }}>더보기</button>

          </div>
        </div>
      </Route>

      <Route path="/detail/:id">
        <Detail clothes = {clothes} 재고 = {재고} 재고변경 = {재고변경}></Detail>
      </Route>

      {/* <Route path = "/어쩌구" component={Modal} ></Route> */}

    
    </Switch>
    </div>

    
  );
}



export default App;

function Info(props){
  let 재고 = useContext(재고context);
  return(
    <div className="col-md-3" key={props.i}>
              <img src = {'/img/product'+props.clothes.id+'.JPG'} width="100%"/><br/>
              <a>{props.clothes.title}</a>
              <b>{props.clothes.price}</b>
              {재고[props.i]}
              <br/>
            </div>
            
  )
}

