import React from 'react';
import axios from 'axios';
import Studentlist from './Studentlist';
import {Link} from 'react-router-dom';
class Student extends React.Component {
    state = {
        students :[],
        loading:false,
    }
    handleInput = (e) =>
    {
        e.preventDefault();
    }
    getStudents = () =>{
        
        axios.get('/getStudents').then((res)=>{
            
                this.setState({students : res.data})
                this.state.loading = false;

                console.log(this.state.students)
        })
    }
    deleteStudent = (id)=>{
        axios.get('/delete/'+id).then((res)=>{
            this.state.loading = true;
            this.getStudents()
        })
    }
    componentDidMount(){
        this.getStudents()
    }
    render(){
        if(this.state.loading == true)
            {
           return <div  className="toast show offset-4 mt-lg-5" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <strong className="mr-auto">Deletion</strong>
    
    <Link to="/" type="button"  className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </Link>
  </div>
  <div className="toast-body">
    Student Record has been deleted.
    <br></br>
    <a className="btn btn-primary w-100 mt-2" href='/'>ok</a>
  </div>
  
</div>
            }
        return(
            
            <div>
                <h1>Students List</h1>
            <table className="table table-bordered table-striped">
               <thead>
                <tr>
                    <th>Name</th>
                    <th>Marks Obt. / Total </th>
                    <th>Subject</th>
                    <th colSpan="2" className="offset-3">Actions</th>
                </tr>
                </thead>
                <tbody>
                     {this.state.students.map(student =>(

                      
  <Studentlist student = {student} key = {student.id} deleteStudent = {this.deleteStudent}/>
                        
                     ))}
             
             </tbody>
           </table>
             </div>
        )
    }
}
export default Student;