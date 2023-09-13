

import { useEffect, useRef, useState } from "react"
import { FunctionComponent, PropsWithChildren } from "react"
import { Player } from "../../types/player"
import { Team } from "../../types/team"
import { ApiContext, DataContext } from "../../utils/context"

export const AppContextProvider: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  const cache = useRef(new Map<string, string>())
  const players = useRef<Player[]>([]);
  const teams = useRef<Team[]>([]);

  return (
    <DataContext.Provider value={{players, teams}}>
      <ApiContext.Provider value={{ cache }}>
        {(children)}
      </ApiContext.Provider>
    </DataContext.Provider>
  )
}
