import React from 'react';
import { GET_CITY } from '../../gql/city';
import useBaseQuery from '../../hooks/useBaseQuery';
import './index.less';

const DevicesMapThird = () => {

  const { data } = useBaseQuery({
    query: GET_CITY,
    variables: { req: { city: 2 } }
  })
  console.log(data);

  return <div>Apollo与gql测试</div>;

}

export default DevicesMapThird;