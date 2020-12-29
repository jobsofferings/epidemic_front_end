import React from 'react'
import { GET_FOREIGN } from 'src/gql/inews'
import useBaseQuery from 'src/hooks/useBaseQuery'

const Foreign = () => {
  const {
    data: { list },
  } = useBaseQuery({
    query: GET_FOREIGN,
    variables: {},
  })
  console.log(list)

  return <div></div>
}

export default Foreign
