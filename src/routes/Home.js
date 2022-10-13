import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'
import { Link } from 'react-router-dom';



export default class Home extends Component {
    
  // 6초후 true에서 false으로 전환하기
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log(movies)
    this.setState({isLoading:false,movies})//키:키값 이름이 동일하면 하나만 써줘도 됨 movies:movies
  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000);
    this.getMovies();
  }

  // true 일땐 Loading .. 이 뜨게하고 false일때 We are ready로 전환하게끔 해라
  render() {
    const {isLoading, movies} = this.state;
    return (

      <section className='container'>{isLoading ? 
        (<div className='loader'>
          <span className='loder_text'>'Loading...'</span>
        </div>)
         : 
         (<div className='movies'>
          {movies.map( (movie,index) => (<Movie 
                              key={index}
                              id={movie.id}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                              genres={movie.genres}
                            />))}
         </div>)
         
       }    
      </section>
    )
  }
}