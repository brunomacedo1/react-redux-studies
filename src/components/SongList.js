import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              onClick={() => this.props.selectSong(song)} 
              className="ui button primary"
            >
              Selecionar
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render(){
    return( 
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { songs: state.songs };
};

//connect()(SongList) === function connect(){return function SongList()}
//sintaxe de uma função que retorna uma função
export default connect(
  mapStatetoProps, 
  { selectSong }
)(SongList);
