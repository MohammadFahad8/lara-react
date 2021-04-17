import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'

class Studentlist extends React.Component {
    delStudent = (id) =>{
        this.props.deleteStudent(id);
    }
    
    render(){
        const {student} = this.props;
        return(
            
                <tr>                 
                   <td>{student.name}</td>
                   <td>{student.marks} / 25</td>
                   <td>{student.subject}</td>
                   <td><Link to ={`/edit/${student.id}`} className="btn btn-warning">Edit</Link></td>
                   <td><button onClick ={()=> this.delStudent(student.id)} className="btn btn-danger">Delete</button></td>
                   
                   

               </tr>
           
        )
    }
}
export default Studentlist;