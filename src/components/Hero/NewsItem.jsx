import React, { Component } from 'react'

export class NewsItem extends Component{

    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return(
            <div  className="card text-center my-3" style={{width: "18rem"}}>
                <img src={imgUrl}  className="card-img-top w-25 h-25" alt="img" />
                <div  className="card-body">
                    <h5  className="card-title text-center">{title}</h5>
                    <p  className="card-text text-center">{description}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-primary text-center btn btn-sm" rel="noreferrer">Read More</a>
                </div>
            </div>
        )
    }
}

