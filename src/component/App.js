import React, { Component } from 'react';
import Unsplash from '../APIs/unsplash';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state={images:[]}
  onSubmitHandler = async (term)=>{
    const response = await Unsplash.get('search/photos',{
    params:{
      query:term
      }
    });
    console.log(response.data);
    this.setState({images:response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSubmitHandler}/>
        <ImageList imgs={this.state.images}/>
      </div>
    );
  }
}

export default App;
