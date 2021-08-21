import React from 'react';
import axios from 'axios';
import Historydetail from './Historydetail';
class Historyapp extends React.Component {

    state={
        query:'',
        fact_type:'',
        displayDate:false,
        history:{},

    }


    handleTypeInput = (e) =>{

        this.setState({[e.target.name]: e.target.value})
        
        
       
    }
    handleTypeCheckInput = (e) =>
    {
        
        this.setState({[e.target.name]: e.target.value})
       


    }
    findFact = (e) => {
        

        if(this.state.query.length !=0)
        {
            if(e.key == "Enter" )
            {
                
                this.performSearchFact(this.state.query,this.state.fact_type);
              
            }
        }
       

    }
    performSearchFact =(query,type)=>{

        var options;

        if(type  == "Year")
          {
            options = {
            method: 'GET',
            url: 'https://numbersapi.p.rapidapi.com/'+query+'/year',
            params: {json: 'true', fragment: 'true'},
            headers: {
              'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
              'x-rapidapi-key': 'e4b2e7d44bmsh5427dd9c7fb16dbp15d226jsn1fdf62e5a45e'
            }
          };

        }else if(type == "Trivia")
        {
            options = {
                method: 'GET',
                url: 'https://numbersapi.p.rapidapi.com/'+query+ '/trivia',
                params: {json: 'true', notfound: 'floor', fragment: 'true'},
                headers: {
                  'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
                  'x-rapidapi-key': 'e4b2e7d44bmsh5427dd9c7fb16dbp15d226jsn1fdf62e5a45e'
                }
              };
        }
        else if(type == "Random")
        {
            options = {
                method: 'GET',
                url: 'https://numbersapi.p.rapidapi.com/random/'+query,
                params: {json: 'true', fragment: 'true', max: '20', min: '10'},
                headers: {
                  'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
                  'x-rapidapi-key': 'e4b2e7d44bmsh5427dd9c7fb16dbp15d226jsn1fdf62e5a45e'
                }
              };
        }
        else if(type=="Math")
        {
            options = {
                method: 'GET',
                url: 'https://numbersapi.p.rapidapi.com/'+query+'/math',
                params: {json: 'true', fragment: 'true'},
                headers: {
                  'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
                  'x-rapidapi-key': 'e4b2e7d44bmsh5427dd9c7fb16dbp15d226jsn1fdf62e5a45e'
                }
              };
        }
    else
        {
            options = {
                method: 'GET',
                url: 'https://numbersapi.p.rapidapi.com/'+query+'/year',
                params: {json: 'true', fragment: 'true'},
                headers: {
                  'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
                  'x-rapidapi-key': 'e4b2e7d44bmsh5427dd9c7fb16dbp15d226jsn1fdf62e5a45e'
                }
              };

        }
          
          axios.request(options).then( (res) =>{
              console.log(res.data)
              this.setState({ history : res.data})
              
          }).catch(function (error) {
              console.error(error);
          });

    }

    render(){
        return(
            
            <div className="main container " style={{backgroundImage:"url("+'https://analyticsindiamag.com/wp-content/uploads/2021/01/pasted-image-0-2.png'+")",
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:"cover"

            }}>
             <div className="row mt-2">
                    <div className="col-md-12">
                        <div className="input-group">
                        <input className="form-control" name="query" placeholder="Enter Year,date,number etc" autoComplete="off" value={this.state.query} onKeyUp={this.findFact}  onChange={this.handleTypeInput}/>
                        <div className="input-group-append">
                            <select className="input-group-text" name="fact_type" onChange={this.handleTypeCheckInput} value={this.state.fact_type}>
                                <option value="Year">Year</option>
                                <option value="Trivia">Trivia</option>
                                <option value="Random">Random</option>
                                <option value="Math">Math</option>
                                <option value="Date">Date</option>
                            </select>
                        </div>
                        </div>
                    </div>

                </div>
    
                
                <div className="card mt-5">
                <div className="card-body">
                

                {/* {this.state.history.map(row =>( */}
                
                    
                    <div  className="numberSearched text-center">
                    <h1>
                    {this.state.history.number!=null ?this.state.history.number:'0'}
                    </h1>

                    <p> {this.state.history.number!=null ?this.state.history.type:'Abc'}</p>
                    <p className="font-italic"> {this.state.history.number!=null ?this.state.history.date:'14 aug,1947'}</p>
                    <p> {this.state.history.number!=null ?this.state.history.text:'Some description'}</p>
                    </div>

                
               
               
                </div>
                </div>




            </div> 



        )
    }

}
export default  Historyapp;
