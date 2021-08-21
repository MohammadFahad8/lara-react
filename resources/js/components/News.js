import React from 'react';
import ReactDOM from 'react-dom';   
import axios from 'axios';
import Newsapp from './Newsapp';        
function News(){
    return(

        <Newsapp/>

        
    )
}
export default News;

if(document.getElementById('news'))
{
    ReactDOM.render(<News/>,document.getElementById('news'));
}