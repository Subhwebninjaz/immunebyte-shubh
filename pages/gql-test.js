import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { FaEye } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

const all_symbols = gql`
query($symbol_name: String!){
  crypto(symbol: $symbol_name) {
    name
    symbol
    marketCap
  }
}
`;

function ViewAuditReport(varArr) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="" onClick={handleShow}><FaEye/></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> <Modal.Title>Modal heading</Modal.Title> </Modal.Header>
        <Modal.Body>hello</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
// render(<ViewAuditReport />);

export default function Gql() {
  const { loading, error, data } = useQuery(all_portfolio);
  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p> {error.message} </p>}
    {/* <p>{data?.allPortfolio[0].name}</p> */}
    <main className="main-services">
      <div className="container">
        <div className="os-simple port-table">
        <table className="table table-striped">
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
            {data && data.allPortfolio.map((portfolio) => (
            <tr>
              <th scope="row">{portfolio.id}</th>
              <td><div className='gql-port-div'><div className="img-div gql-port"><img src={portfolio.logo} /></div> {portfolio.name} </div></td>
              <td>{portfolio.blockchain}</td>
              <td>{portfolio.onboardDate}</td>
              {<td><CryptoData symbol_name={portfolio.name} /></td>}
              <td><div className="img-div line-graph"><img src="images/graph-green.jpg" /></div></td>
              {/* <td>{portfolio.reports.map((report) => ( <a href={report.link} key={report.id}><FaEye />{report.link} {report.id}</a> ))}</td> */}
              <td className='view-report'><ViewAuditReport varArr = {portfolio.reports} /></td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
    </main>
    </>
  )

  function CryptoData({ symbol_name }) {
    const { loading, error, data } = useQuery(all_symbols, {
      variables: { symbol_name },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const crypto = data.crypto;
  
    return (
      <>
       {crypto.marketCap}
      </>
    );
  }
}