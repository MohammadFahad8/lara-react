import React from 'react';
import axios from 'axios';
import Details from './Details';

class Newsapp extends React.Component {

state={
    imageUrl:'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
    newstitle:'Demo',
    newsDesc:'Random Description about some event',
    searchquery:'',
    news:[],
}
handleInput = (e)=> {
    this.setState({searchquery:e.target.value})
    
  }


  performSearch=(e)=>{

      if(this.state.searchquery.length!=0)
      {
          if(e.key=="Enter")
          {
              this.getNews(this.state.searchquery)
          }
      }
  }
  changeBackImage = (imgurl) =>{
      this.setState({imageUrl:imgurl})

  }
  checkval=(val) =>{
      console.log(val)
  }
getNews=(query)=>
{
    if(query.length != 0)
    {
        const options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: {q: query, lang: 'en'},
            headers: {
              'x-rapidapi-host': 'free-news.p.rapidapi.com',
              'x-rapidapi-key': 'e4b2e7d44bmsh5427dd9c7fb16dbp15d226jsn1fdf62e5a45e'
            }
          };
          
          axios.request(options).then((res)=> {
              
              this.setState({ news : res.data.articles});
              console.log(this.state.news);
          }).catch(function (error) {
              console.error(error);
          });

    }

}


    render() {
        return(
            <div className="main-content" >
            <div className="card" style={{
            backgroundImage:"url("+this.state.imageUrl+")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }} >
                <div className="card-body">

                    <input placeholder="Type to search.." onKeyPress={this.performSearch} onChange={this.handleInput} value={this.state.searchquery} name="query" className="form-control float-center"  />

               { this.state.news.map( newsdata =>(

                    <Details row = {newsdata} key = {newsdata._id} checkingvalues={this.checkval} backImage={this.changeBackImage} />


                    ))}

                    

                    

                </div>
                </div>
                
            </div>
        )
    }
}
export default Newsapp;