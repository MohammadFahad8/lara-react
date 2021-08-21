import React from 'react';
 

 class Details extends React.Component
 {
    
     changeBI = (e)=>{
         e.preventDefault();
        this.props.backImage(this.props.row.media)
        // this.props.checkingvalues(this.props.row.title)
        
     }
     



     render(){
         const {row} = this.props
         return(
                <a   onClick={this.changeBI}>
             {/* EXample of conditional rendering */}
                    {row._id.match(1) &&
              <div className="card mt-3">
                        <div className="card-body"><div className="row">
                            <div className="col-md-12">
                            <img className="img-thumbnail"  src={row.media}/>
                            </div></div>
                           <h3>{row.title}</h3>
                            <p >{row.summary}</p>
                            
                        </div>
                    </div>
                    }
                    </a>
         )
     }
 }
 export default Details;