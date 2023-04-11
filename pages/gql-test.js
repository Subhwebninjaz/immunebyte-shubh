import React from 'react'
import { gql, useQuery } from '@apollo/client';

const all_portfolio = gql`
query{
  allPortfolio(first:10, after:1){
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

export default function Gql() {

  const { loading, error, data } = useQuery(all_portfolio);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // if (!data || !data.portfolioByName) return <p>No job listings found.</p>;
  // console.log(data);

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p> {error.message} </p>}
    {/* <p>{data?.allPortfolio[0].name}</p> */}
    <main className="main-services">
      <div className="container">
        <div className="os-simple port-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Blockchain</th>
              <th scope="col">Onboard Time</th>
              <th scope="col">Market Cap</th>
              <th scope="col">24 Change</th>
              <th scope="col">View Audit Report</th>
            </tr>
          </thead>
          <tbody>
            {data && data.allPortfolio.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.logo}{item.name}</td>
              <td>{item.blockchain}</td>
              <td>{item.onboardDate}</td>
              <td>589.6M</td>
              <td>{item.blockchain}</td>
              <td>{item.reports.map((report) => ( <a href={report.link} key={report.id}>View Report {report.id}</a> ))}</td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </main>
    </>
  )

}