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

const apiList: string[] = [
  'login',
  'sign',
  'getMessages',
  'getChinaDayList',
  'getChinaDayAddList',
  'getProvinceConfirmList',
  'getCountryConfirm',
  'getInfoByCountry',
  'countryAnddContinent',
]

const createQueryFunctionMap: (
  list: string[],
) => OPUtils.Record<string, Function> = (list: string[]) => {
  const funcMap: OPUtils.Record = {}
  list.forEach((api) => {
    funcMap[api] = (props: OPUtils.Record) =>
      baseQueryFunction<OPUtils.Record>(`/${api}`, props)
  })
  return funcMap
}

const {
  login,
  sign,
  getMessages,
  getChinaDayList,
  getChinaDayAddList,
  getProvinceConfirmList,
  getCountryConfirm,
  getInfoByCountry,
  countryAnddContinent,
} = createQueryFunctionMap(apiList)

export {
  login,
  sign,
  getMessages,
  getChinaDayList,
  getChinaDayAddList,
  getProvinceConfirmList,
  getCountryConfirm,
  getInfoByCountry,
  countryAnddContinent,
}
