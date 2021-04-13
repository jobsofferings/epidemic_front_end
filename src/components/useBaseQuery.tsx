import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

const LAZY_QUERY_OPTIONS = {}

export interface useBaseQueryProps
  extends Omit<UseQueryOptions<any>, 'service'> {
  query: QueryKey
  queryFunction: Function
}

function useBaseQuery({
  query,
  queryFunction,
  ...queryOptions
}: useBaseQueryProps) {
  const { data, isLoading, ...result } = useQuery(query, {
    ...LAZY_QUERY_OPTIONS,
    ...queryOptions,
    queryFn: ({ queryKey }) => queryFunction(queryKey[0]),
  })

  return { data: data?.data || {}, loading: isLoading, ...result }
}

export default useBaseQuery
