
type playersEndpoints = '/players' | '/players/getAll' | '/players/getByPlayerID' | '/players/getByTeamID' | '/players/getByConference' | '/players/getByDivision' | '/players/getByName';
type scoreEndpoints = '/scores' | '/scores/getByDay' | '/scores/getByGameID' | '/scores/getByTeam';
type standingEndpoints = '/standings' | '/standings/season/teamStandings' | '/standings/season/conferenceStandings' | '/standings/season/divisionStandings';
type statsEndpoints = '/stats' | '/stats/getBoxScore' | '/stats/getPlayerGameStats' | '/stats/getTeamGameStats' | '/stats/getTeamSeasonStats';
type teamsEndpoints = '/teams' | '/teams/getAll' | '/teams/getByTeamID' | '/teams/getByConference' | '/teams/getByDivision' | '/teams/getByName';
type currentEndpoints = '/current' | '/current/boxScores';



export type registeredEndpoints = playersEndpoints | scoreEndpoints | standingEndpoints | statsEndpoints | teamsEndpoints | currentEndpoints | any;