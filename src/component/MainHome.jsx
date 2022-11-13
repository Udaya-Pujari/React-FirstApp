// import React, { Fragment } from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const MainHome=()=>{
//     return(
//             <Fragment>
//                <Header/>
//               <h1>Hi to React</h1>
//               <h2>Welcome udaya</h2>
//               <Footer year={2022} month={"August"}/>
//             </Fragment>
//           )
// }
// export default MainHome;


import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import JSON from'./db.json';
import NewsDisplay from './NewsDisplay';

class MainHome extends Component{
  constructor()
  {
    super()
    this.state={
           news:JSON,
           filtered:JSON

        }
  }
//using the filter method to filter
filterNews(userInput){
  const output=this.state.news.filter((data)=>{
    return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
  })
  this.setState({filtered:output})
}

  render()
  {
    console.log(this.state.news)
    return(
      <Fragment>
        <Header userText={(data)=>{this.filterNews(data)}}/>
        <NewsDisplay datalist={this.state.filtered}/>
        <Footer year={2022} month={'August'}/>
      </Fragment>
    )
  }
}
export default MainHome