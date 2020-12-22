import gql from 'graphql-tag'

export const GET_CITY = gql`
  query city($req: CityReq) {
    city(req: $req) {
      msg {
        name
        sort
      }
      flag
    }
  }
`