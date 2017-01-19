import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component {

  state = { albums: [] }

  //This method is called right before this component is loaded
  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
      );
  }

  render() {
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
      );
  }
}

export default AlbumList;
