import gql from 'graphql-tag'

export const GET_FOREIGN = gql`
  query getForeignList {
    getForeignList {
      list {
        name
        continent
        date
        isUpdated
        confirmAdd
        confirmAddCut
        confirm
        suspect
        dead
        heal
        nowConfirm
        confirmCompare
        nowConfirmCompare
        healCompare
        deadCompare
        children {
          name
          date
          nameMap
          isUpdated
          confirmAdd
          confirmAddCut
          confirm
          suspect
          dead
          heal
        }
      }
    }
  }
`

export const GET_COUNTRY_CONFIRM_ADD = gql`
  query getCountryConfirmAdd {
    getCountryConfirmAdd {
      data
    }
  }
`

export const GET_CHINA_DAY_LIST = gql`
  query getChinaDayList {
    getChinaDayList {
      list
    }
  }
`
