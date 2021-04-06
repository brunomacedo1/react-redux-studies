//Função para criar ação(Action creator)
export const selectSong = (song) => {
  //Retorna uma ação
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

