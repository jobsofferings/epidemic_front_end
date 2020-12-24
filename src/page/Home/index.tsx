import React from 'react'
import { GET_COUNTRY_CONFIRM_ADD } from '../../gql/global'
import useBaseQuery from '../../hooks/useBaseQuery'

const Home = () => {
  const {
    data: { data },
  } = useBaseQuery({
    query: GET_COUNTRY_CONFIRM_ADD,
    variables: {},
  })
  console.log(data)

  return <div></div>
}

export default Home
