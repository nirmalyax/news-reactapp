import React, { Component } from 'react'

export class NewsItem extends Component{

    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return(
            <div  className="card text-center" style={{width: "18rem"}}>
                <img src={imgUrl}  className="card-img-top" alt="img 123"/>
                <div  className="card-body">
                    <h5  className="card-title text-center">{title}...</h5>
                    <p  className="card-text text-center">{description}...</p>
                    <a href={newsUrl} target='_blank' className="btn btn-primary text-center btn btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

