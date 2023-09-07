import { Game } from "./game";
import { Team } from "./team";
import { Player } from "./player";


interface Stat{
    points: number,
    fgm: number,
    fga: number,
    fgp: string,
    ftm: number,
    fta: number,
    ftp: string,
    tpm: number,
    tpa: number,
    tpp: string,
    offReb: number,
    defReb: number,
    totReb: number,
    assists: number,
    pFouls: number,
    steals: number,
    turnovers: number,
    blocks: number,
    plusMinus: string
}

interface TeamStat extends Stat {
    TeamID: number,
    fastBreakPoints: number,
    pointsInPaint: number,
    biggestLead: number,
    secondChancePoints: number,
    pointsOffTurnovers: number,
    longestRun: number
}

export interface PlayerStatGame extends Stat {
    PlayerID: number,
    GameID: number,
    TeamID: number,
    min: string
}

export interface TeamStatGame extends TeamStat {
    min:  string,
    GameID: number
}

export interface TeamStatSeason extends TeamStat {
    games: number,
    season: number
}

export interface BoxScore {
    game: Game,
    teams: Team[],
    players: Player[],
    teamGameStats: TeamStatGame,
    playerGameStats: PlayerStatGame
}