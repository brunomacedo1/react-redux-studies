import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song){
    return <div>Selecione uma música.</div>
  }
  return ( 
    <div>
      <h5>Detalhes para:</h5>
      <p>
        Título: {song.title}
        <br/>
        Duração: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail)