import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'

class Studentlist extends React.Component {
    state={
        loading:true,
        fahad:true,
    }
    delStudent = (id) =>{
        this.props.deleteStudent(id);
    }
    componentDidMount(){
        this.props.onTestEvent('Fahad fires the event');
    }
    
    render(){
        const {student} = this.props;
        let { isLoggedIn } = this.state;
        return(
            
                <tr>                 
                   <td>{student.name}</td>
                   <td>{student.marks} / 25</td>
                   <td>{student.subject}</td>
                   
                  {student.name=='Fahad' ? <td><p>fnsignsigundsuignsduignsdignsdgnuis
                      gusdingusdnginsdgui
                      gsndigunsdui</p>
                      <span>multiple block </span></td> :null}
                   <td><Link to ={`/edit/${student.id}`} className="btn btn-warning">Edit</Link></td>
                   <td><button onClick ={()=> this.delStudent(student.id)} className="btn btn-danger">Delete</button></td>
                   
                   

               </tr>
           
        )
    }
}
export default Studentlist;