import React from 'react'
import axios from 'axios';
class EditStudent extends React.Component {
    state = {
        name:'',
        marks:'',
        subject : '',
        
    }
    updateStudent = () => {
        const id = this.props.match.params.id;
        axios.post('/update/'+id,this.state).then((res)=>{
            alert('updated');
        })

    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});

    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('/edit/'+id).then((res)=>{
            this.setState({name:res.data.name})
            this.setState({marks:res.data.marks})
            this.setState({subject:res.data.subject})

        })
    }
    render(){
        return(
            <div>
               
               <div className="card">
                <div className="card-header">New Student</div>
                <div className="card-body">
                    <form onSubmit={this.updateStudent}>
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
                                           className="form-control" name="marks" min="1" max="10" />

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
                    <button className="btn btn-primary" onClick={this.updateStudent}>Update</button>
                </div>
                </div>
            </div>
        )
    }
}
export default EditStudent