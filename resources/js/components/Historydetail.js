import React from 'react';

class Historydetail extends React.Component
{

render(){
    const {hist} = this.props
    console.log(this.props)
    return(

        <h1>{hist}</h1>
    )
}

}
export default Historydetail;