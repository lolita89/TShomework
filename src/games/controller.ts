// src/pages/controller.ts
import { JsonController, Get, Param } from 'routing-controllers'
//import gamesById, { Game } from './data'
import Game from './entity'

type GameList = { Games: Game[] }

@JsonController()
export default class GameController {

    @Get('/games/:id')
    getPage(
        @Param('id') id: number
    ): Game {
        return gamesById[id]
    }

    @Get('/games')
      allPages():GameList {
        return gamesById
}
}
