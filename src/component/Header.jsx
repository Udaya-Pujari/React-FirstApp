
//-----------USING Function Component------------
// import React, { Fragment } from 'react';

// //I am creating one functional component called Header
// const Header=()=>{
//        return(
//         <Fragment>
//             <center>
//                 <h2>Techy</h2>
//             </center>
//             <hr />
//         </Fragment>
//        )
// }
// //since I don't have ReactDom,so I am gonna export this component
// export default Header;


//-------------------USING Class componet----------

// import React,{Fragment,Component} from "react";
// class Header extends Component{
//     render()
//     {
//         return(
//             <Fragment>
//                 <center>
//                     <h2>Techy</h2>
//                 </center>
//                 <hr />
//             </Fragment>
//         )
//     }
// }
// export default Header;




//-------Using class component ,in that I am passsing constructor-----
//----This constructor method must contain "super()" key word
//----This super keyword helps to inherit the properties

// import React,{Fragment,Component} from "react";
// class Header extends Component{
//     constructor(){
//         super()
//         this.state={
//             title:'Techy',
//             Keyword:'User Input Here'
//         }
//     }
//     render()
//     {
//         return(
//             <Fragment>
//                 <header>
//                     <div>{this.state.title}</div>
//                     <center>
//                         <input type="text" />
//                         {/* Applying inline css */}
//                         <div style={{color:'red'}}>{this.state.Keyword}</div>
//                     </center>
//                 </header>
//                 <hr />
//             </Fragment>
//         )
//     }
// }
// export default Header;



//applying CSS internally by creating object
// import React,{Fragment,Component} from "react";
// class Header extends Component{
//     constructor(){
//         super()
//         this.state={
//             title:'Techy',
//             Keyword:'User Input Here'
//         }
//     }
//     render()
//     {
//         const mystyle={
//             header:{
//                 backgroundColor:'teal'
//             },
//             logo:{
//                  fontSize:'30px',
//                  textAlign:'center',
//                  color:'#fff'
//             }
//         }


//         return(
//             <Fragment>
//                 <header style={mystyle.header}>
//                     <div style={mystyle.logo}>{this.state.title}</div>
//                     <center>
//                         <input type="text" />
//                         {/* Applying inline css */}
//                         <div style={{color:'white'}}>{this.state.Keyword}</div>
//                     </center>
//                 </header>
//                 <hr />
//             </Fragment>
//         )
//     }
// }
// export default Header;


import React,{Fragment,Component} from "react";
import './Header.css'
class Header extends Component{
    constructor(){
        super()
        this.state={
            title:'Techy',
            Keyword:'User Input Here'
        }
    }

    handleChange=(event)=>{
      console.log(event.target.value);
      //what ever the value coming to it , here the state is updating 
      this.setState({Keyword:event.target.value?event.target.value:'User Input Here'})
      //in the above line I am using ternry operator to bring back the initial data present
      this.props.userText(event.target.value);
    }

    render()
    {
        return(
            <Fragment>
                <header >
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input type="text"  onChange={this.handleChange}/>
                        {/* Applying inline css */}
                        <div style={{color:'white'}}>{this.state.Keyword}</div>
                    </center>
                </header>
                <hr />
            </Fragment>
        )
    }
}
export default Header;