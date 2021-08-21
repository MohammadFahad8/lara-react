import React from 'react';
import ReactDOM from 'react-dom';
import Historyapp from './Historyapp';
function History(){

    return(
        <Historyapp/>
    )


}

export default History;
if(document.getElementById('history'))
{
    ReactDOM.render(<History/>,document.getElementById('history'));
}
