import React, { Fragment } from "react";

//in this footer I am passing the prop
const Footer=(props)=>{
    return(
        <Fragment>
             <hr />
            <center>
             {/* in h2  I am binding the property with year, bcz the property name is year im MainHome.jsx */}
                <h2  style={{color:'grey'}}>&copy; Udaya Pujari  {props.year} {props.month}</h2>
            </center>
           
        </Fragment>
    )
}
export default Footer;
