import React, { Component } from 'react'
import { NewsItem } from './NewsItem'
import Loader from './Loader';


export default class Hero extends Component {
 
  constructor(){
    super();
    this.state = {
        articles : [],
        loading : true,
        page:1,
        pageSize: 20
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69e96f07a934bb0b0a0ce2b4490f451&page=1&pageSize=20`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles, 
      totalResults : parsedData.totalResults,
      loading: false
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69e96f07a934bb0b0a0ce2b4490f451&page=${this.state.page-1}&pageSize=20`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69e96f07a934bb0b0a0ce2b4490f451&page=${this.state.page+1}&pageSize=15`
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      //this.setState({loading: true});
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  render() {
    return (
          <div className="container">
            
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1}
                type='button' className='btn btn-primary my-4' 
                onClick={this.handlePreviousClick}>
                  &larr; 
                </button>

                <h1 className='d-flex justify-content-center'>dailyNews - Top Stories</h1>

                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)}
                type='button' 
                className='btn btn-primary my-4' 
                onClick={this.handleNextClick}>
                   &rarr;
                </button>
            </div>
            {this.state.loading && <Loader/>}
            <div className="d-flex p-4 row ml-2 my-7">
              {!this.state.loading && this.state.articles.map((element) => {
                  return <div className=" d-flex col-md-3" key={element.url}>
                    <NewsItem  title={element.title?element.title:" "} description={element.description?element.description:" "} imgUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3UgM3iwgnkhNoQm3NuarG41NsSprg7iSAg&usqp=CAU"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
                <button  disabled={this.state.page<=1}
                type='button' className='btn btn-primary my-4' 
                onClick={this.handlePreviousClick}>
                  &larr; Previous
                </button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)}
                type='button' 
                className='btn btn-primary my-4' 
                onClick={this.handleNextClick}>
                  Next &rarr;
                </button>
            </div>
          </div>
    )
  }
}
