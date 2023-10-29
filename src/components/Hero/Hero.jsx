import React, { Component } from 'react'
import { NewsItem } from './NewsItem'


export default class Hero extends Component {
  constructor(){
    super();
    this.state = {
        articles : [],
        loading : false,
        page:1,
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ce94145377a645868c4c3cf7c57c6f55&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ce94145377a645868c4c3cf7c57c6f55&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async () => {
    console.log(Next)
    if(this.state.page + 1 >= Math.ceil(this.state.totalResults/20)) {
        
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ce94145377a645868c4c3cf7c57c6f55&page=${this.state.page+1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json()
  
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
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

                <button type='button' 
                className='btn btn-primary my-4' 
                onClick={this.handleNextClick}>
                   &rarr;
                </button>
            </div>

            <div className="d-flex p-4 row ml-2 my-7">
              {this.state.articles.map((element) => {
                  return <div className=" d-flex col-md-3" key={element.url}>
                    <NewsItem  title={element.title?element.title:" "} description={element.description?element.description:" "} imgUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3UgM3iwgnkhNoQm3NuarG41NsSprg7iSAg&usqp=CAU"} newsUrl={element.url}/>
                  </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
                <button  disabled={this.state.page<=1}
                type='button' className='btn btn-primary my-4' 
                onClick={this.handlePreviousClick}>
                  &larr; Previous
                </button>
                <button type='button' 
                className='btn btn-primary my-4' 
                onClick={this.handleNextClick}>
                  Next &rarr;
                </button>
            </div>
          </div>
    )
  }
}
