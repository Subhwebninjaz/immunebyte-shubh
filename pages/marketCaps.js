import React from 'react'
import { gql, useQuery } from '@apollo/client';

const marketCaps = gql`
query{
  crypto(symbol: "SOL") {
    name
    symbol
    marketCap
  }
}
`;

export default function marketCap() {
  const { loading, error, data } = useQuery(marketCaps);
  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p> {error.message} </p>}
    <span>{data?.crypto?.marketCap ?? '-'}</span>
    </>
  )

}