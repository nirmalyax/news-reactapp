import React, { Component } from 'react'

export class NewsItem extends Component{

    render() {
        let {title, description, imgUrl, newsUrl, author, date} = this.props;
        return(
            <div  className="card text my-4" style={{width: "18rem"}}>
                <img src={imgUrl}  className="card-img-top" alt="img" />
                <div  className="card-body">
                    <h5  className="card-title text-justify"><b>{title}</b></h5>
                    <p  className="card-text text-justify">{description}</p>
                    <p className="card-text py-3"><small className="text-body-secondary">By {author ? author :  "Unknown"} on - <br /> {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-primary text-center btn btn-sm" rel="noreferrer">Read More  &nbsp; &#10148;</a>
                    
                </div>
            </div>
        )
    }
}

