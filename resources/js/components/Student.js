import React from 'react';
import axios from 'axios';
import Studentlist from './Studentlist';
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

                console.log(this.state.students)
        })
    }
    deleteStudent = (id)=>{
        axios.get('/delete/'+id).then((res)=>{
            this.getStudents()
        })
    }
    componentDidMount(){
        this.getStudents()
    }
    render(){
        return(
            <div>
                <h1>Students List</h1>
            <table className="table table-bordered table-striped">
               <thead>
                <tr>
                    <th>Name</th>
                    <th>Marks</th>
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