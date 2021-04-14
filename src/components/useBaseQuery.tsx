import { useQuery, UseQueryOptions } from 'react-query'

export interface useBaseQueryProps
  extends Omit<UseQueryOptions<any>, 'service'> {}

function useBaseQuery(query: any, ...queryOptions: any[]) {
  const { data, isLoading, ...result } = useQuery<any>(query, ...queryOptions)
  return { data: data?.data || {}, loading: isLoading, ...result }
}

export default useBaseQuery
