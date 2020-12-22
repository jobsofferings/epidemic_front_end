export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const APOLLO_URI = isProduction
  ? '/graphql'
  : 'http://localhost:4397/graphql'


export const PAGE_LIMIT = 10;

export const TOKEN = 'token'
export const PERSIST_USER_KEY = 'userInfo'