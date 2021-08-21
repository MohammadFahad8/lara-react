import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class AddStudent extends React.Component {
    state = {
        name:'',
        marks:'',
        subject:'',
        loading:false,
    }
    handleInput = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    saveStudent = (e)=>
    {
        e.preventDefault();
        
        axios.post('/add',this.state).then((res)=>{
            this.setState({loading:true})
            console.log(this.state.loading);
        })
    }
    render(){
        if(this.state.loading == true)
        {
       return <div  className="toast show offset-4 mt-lg-5" role="alert" aria-live="assertive" aria-atomic="true">
<div className="toast-header">
<strong className="mr-auto">New Record</strong>

<Link to="/" type="button"  className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</Link>
</div>
<div className="toast-body">
New Student Record has been Added Successfully.
<br></br>
<a className="btn btn-info w-100 mt-2" href='/'>ok</a>
</div>

</div>
        }
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
                                <select name="subject" className="form-control" id="subject" onChange={this.handleInput} value={this.state.subject}>
                                    <option value="Mathematics" >Mathematics</option>
                                    <option value="Science" >Science</option>
                                    <option value="Arts" >Arts</option>
                                  
                                </select>
                         

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