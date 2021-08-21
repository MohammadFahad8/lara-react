import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {browserHistory} from 'react-router'
import { HashRouter } from 'react-router-dom'
import Nav from "./Nav"
import Student from "./Student"
import AddStudent from "./AddStudent"
import EditStudent from "./EditStudent"

function Example() {
    return (
     <Router history={browserHistory}>
         <Nav />
         <Switch>
             <Route path='/' exact component ={Student} />
             <Route path='/add-student' exact component ={AddStudent} />
             <Route path='/edit/:id' exact component ={EditStudent} />
         </Switch>
     </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<HashRouter><Example /></HashRouter>, document.getElementById('example'));
}
