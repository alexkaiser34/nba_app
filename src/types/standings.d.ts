interface standingsConference{
    name: string,
    rank: number,
    win: number,
    loss: number
}
interface standingsDivision extends standingsConference{
    gamesBehind: string,
}

interface standingsStat {
    home: number,
    away: number,
    total: number,
    percentage: string,
    lastTen: number
}
export interface Standings{
    TeamID: number,
    season: number,
    conference: standingsConference,
    division: standingsDivision,
    win: standingsStat,
    loss: standingsStat,
    gamesBehind:  string,
    streak: number,
    winStreak: boolean,
    tieBreakerPoints: number | null
};