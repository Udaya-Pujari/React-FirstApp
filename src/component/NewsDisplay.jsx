import React from "react";
import './NewsDisplay.css'
import { Fragment } from "react";
const  NewsDisplay=(props)=>{
    const renderList=props.datalist.map((data)=>{
        return(
            <div  key={data.id}>
                <h3 className="title">{data.title}</h3>
                <p className="feed">{data.feed}</p>
                <p className="link">Copy the link and paste in browser :-- 
                     <a href="true">{data.link}</a>
                </p>
            </div>
        )
    })
    return(
        <Fragment>
            {renderList}
        </Fragment>
    )
}
export default NewsDisplay; 