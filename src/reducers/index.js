import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'Rat Salad', duration: '4:05'},
    {title: 'Planet Caravan', duration: '2:30'},
    {title: 'Iron Man', duration: '3:15'},
    {title: 'Sympthon of the Universe', duration: '1:45'},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};


export default combineReducers({
  //Cria os states que vão ser passados para o createStore()
  songs: songsReducer,
  selectedSong: selectedSongReducer
});