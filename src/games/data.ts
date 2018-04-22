export interface Game {
  id: number,
  name: Text,
  color: Text,
  board: JSON
}

interface GameDatabase {
  [id: number]: Game
}

const defaultBoard = [
  ['O','O','O'],
  ['O','O','O'],
  ['O','O','O'],
]

const gamesById: GameDatabase = {
  1: {
      id: 1,
      name: 'game1',
      color: 'red',
      board: defaultBoard
  },
  2: {
    id: 1,
    name: 'game2',
    color: 'blue',
    board: defaultBoard
  },
  3: {
    id: 1,
    name: 'game3',
    color: 'yellow',
    board: defaultBoard
  }
}

export default gamesById
