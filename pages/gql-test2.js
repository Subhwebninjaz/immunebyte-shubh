import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';
import { FaEye, FaStackExchange } from 'react-icons/fa';

const all_portfolio = gql`
  query {
    allPortfolio(first:10, after:1) {
      id
      name
      blockchain
      onboardDate
      logo
      reports {
        link
      }
    }
  }
`;

const all_symbols = gql`
  query($symbol_name: String!) {
    crypto(symbol: $symbol_name) {
      name
      symbol
      marketCap
    }
  }
`;

export default function Gql() {
  const { loading, error, data } = useQuery(all_portfolio);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.allPortfolio.map((portfolio) => {
        return (
          <div className='name-cap' key={portfolio.id}>
            <h3>{portfolio.name}</h3>
            <PortfolioDetails symbol_name={portfolio.name} />
          </div>
        );
      })}
    </>
  );
}

function PortfolioDetails({ symbol_name }) {
  const { loading, error, data } = useQuery(all_symbols, {
    variables: { symbol_name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const crypto = data.crypto;

  return (
    <>
      <span className='c_mcap'>{crypto.marketCap}</span>
    </>
  );
}
