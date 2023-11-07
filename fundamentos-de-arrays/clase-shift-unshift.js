// Methods that modify the original array (Mutability).

// shift()

const colors = ['yellow', 'blue', 'red']
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)

// unshift()

const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)

// Exercise: Managing a Playlist

function managePlaylist (playlist, newSong) {
  playlist.shift()
  playlist.unshift(newSong)
  return playlist
}

const initialPlaylist = ['Sweater Weather', 'What you know', 'Eventually']
const newSongToAdd = 'The Adults Are Talking'

const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist: ', updatedPlaylist)