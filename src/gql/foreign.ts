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
