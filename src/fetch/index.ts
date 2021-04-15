import { axiosPost } from './axios'

export interface GetChinaDayListProps {
  offset?: number
  limit?: number
  id?: string
  key?: string
}

export interface GetChinaDayListByIdProps {
  id: string
}

function baseQueryFunction<T = any>(query: string, props: T) {
  return new Promise((resolve, reject) => {
    axiosPost(query, props)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function getChinaDayList<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getChinaDayList', props)
}

export function getChinaDayAddList<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getChinaDayAddList', props)
}

export function getCountryConfirm<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getCountryConfirm', props)
}
