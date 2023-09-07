import { useCallback, useContext, useState } from "react"
import { AppContext } from "../utils/context"

export function useWrappedRequest() {
  const [loading, setLoading] = useState(false)

  const wrappedRequest = useCallback(
    async <TData>(promise: () => Promise<TData>): Promise<TData | null> => {
      try {
        setLoading(true)
        const result = await promise()
        return result
      } catch (error) {
        console.log(error as string)
        return null
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return { loading, wrappedRequest }
}