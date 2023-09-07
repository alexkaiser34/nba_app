

import { useRef, useState } from "react"
import { FunctionComponent, PropsWithChildren } from "react"
import { AppContext } from "../../utils/context"

export const AppContextProvider: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  const cache = useRef(new Map<string, string>())

  return (
    <AppContext.Provider value={{ cache }}>
      {(children)}
    </AppContext.Provider>
  )
}
