import { createContext } from "react"

export const AppContext = createContext<AppContextProps>({})

type AppContextProps = {
  cache?: React.MutableRefObject<Map<string, string>>
}
