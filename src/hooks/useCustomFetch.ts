import { useCallback, useContext } from "react"
import { ApiContext } from "../utils/context"
import { useWrappedRequest } from "./useWrappedRequest";
import { registeredEndpoints }  from "../types/endpoints";
import { fetch } from "../utils/fetch";

export function useCustomFetch(){
    const { cache } = useContext(ApiContext);
    const { loading, wrappedRequest } = useWrappedRequest();

    const fetchWithCache = useCallback(
        async <TData, TParam>(
            endpoint: registeredEndpoints,
            params?: TParam
        ) : Promise<TData | null> =>
            wrappedRequest<TData>(async () => {
                const cacheKey = getCacheKey(endpoint, params);
                const cacheResponse = cache?.current.get(cacheKey);
                if (cacheResponse){
                    const data = JSON.parse(cacheResponse);
                    return data as Promise<TData>;
                }

                const result = await fetch<TData, TParam>(endpoint, params);
                cache?.current.set(cacheKey, JSON.stringify(result));
                return result;
            }),
        [cache, wrappedRequest]
    )

    const fetchWithoutCache = useCallback(
        async <TData, TParam>(
            endpoint: registeredEndpoints,
            params?: TParam
        ) : Promise<TData | null> =>
            wrappedRequest<TData>(async () => {
                const result = await fetch<TData, TParam>(endpoint, params);
                return result;
            }),
        [wrappedRequest]
    )

    return { fetchWithCache, fetchWithoutCache, loading};
}


function getCacheKey(endpoint: registeredEndpoints, params?: any) {
    return `${endpoint}${params ? `@${JSON.stringify(params)}` : ""}`
  }