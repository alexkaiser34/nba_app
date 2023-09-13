import React, { createContext } from "react"
import { Player } from "../types/player"
import { Team } from "../types/team"

export const ApiContext = createContext<ApiContextProps>({});

export const DataContext = createContext<DataContextProps>(
  {
    players: {
      current: []
    },
    teams:{
      current: []
    }
  }
)


type ApiContextProps = {
  cache?: React.MutableRefObject<Map<string, string>>
}

type DataContextProps = {
  players: React.MutableRefObject<Player[]>,
  teams: React.MutableRefObject<Team[]>
}
