interface gameDate {
    start: string,
    end: string,
    duration: string
}

interface gamesStatus {
    clock: number | string,
    halftime: boolean,
    short: number,
    long: string
}

interface gamesArena {
    name: string | null,
    city: string | null,
    state: string | null,
    country: string | null

}

interface gamesTeams {
    awayTeamID: number,
    homeTeamID: number
}

interface scoreSeries {
    win: number,
    loss: number
}

interface scoreData {
    win: number,
    loss: number,
    series: scoreSeries,
    lineScore: number[] | string[],
    points: number
}

interface gamesScores {
    visitors: scoreData,
    home: scoreData
}

export interface Game{
    id: number,
    season: number,
    date: gameDate,
    status: gamesStatus,
    arena: gamesArena,
    teams: gamesTeams,
    scores: gamesScores,
    timesTied: number,
    leadChanges: number
}