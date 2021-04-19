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

export function login<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/login', props)
}

export function sign<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/sign', props)
}

export function getChinaDayList<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getChinaDayList', props)
}

export function getChinaDayAddList<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getChinaDayAddList', props)
}

export function getProvinceConfirmList<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getProvinceConfirmList', props)
}

export function getCountryConfirm<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getCountryConfirm', props)
}

export function getInfoByCountry<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/getInfoByCountry', props)
}

export function countryAnddContinent<T = GetChinaDayListProps>(props: T) {
  return baseQueryFunction<T>('/countryAnddContinent', props)
}
