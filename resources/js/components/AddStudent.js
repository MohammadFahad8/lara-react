import React from 'react';
import axios from 'axios';
class AddStudent extends React.Component {
    state = {
        name:'',
        marks:'',
        subject:'',
    }
    handleInput = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    saveStudent = (e)=>
    {
        e.preventDefault();
        
        axios.post('/add',this.state).then((res)=>{

        })
    }
    render(){
        return(
            <div>
                <div className="card">
                <div className="card-header">New Student</div>
                <div className="card-body">
                    <form onSubmit={this.saveStudent}>
                        <div className="form-group row">
                            <label className="col-md-4">Name</label>
                            <div className="col-md-6">
                            <input id="name" type="text" value={this.state.name} onChange={this.handleInput} className="form-control" name="name" />

                        </div>
                      </div>
                      <div className="form-group row">
                            <label className="col-md-4">Marks</label>
                            <div className="col-md-6">
                            <input id="marks" type="number"  value={this.state.marks} onChange={this.handleInput}
                                           className="form-control" name="marks" min="1" max="25" />

                        </div>
                      </div>
                      <div className="form-group row">
                            <label className="col-md-4">Subject</label>
                            <div className="col-md-6">
                            <input id="subject" type="text"  value={this.state.subject} onChange={this.handleInput}
                                           className="form-control" name="subject" />

                        </div>
                      </div>
                        
                    </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={this.saveStudent}>Add Student</button>
                </div>
                </div>
            </div>
        )
    }
}
export default AddStudent;