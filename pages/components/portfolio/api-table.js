import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const portfoliosPerPage = 3;

const all_portfolio = gql`
  query ($first: Int!, $after: Int!) {
    totalPortfolio
    allPortfolio(first: $first, after: $after) {
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

function ViewAuditReport(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="" onClick={handleShow}><FaEye/></Button>
      <Modal show={show} onHide={handleClose} className='audit-modal'>
        <Modal.Header closeButton> <Modal.Title>View Audit Report</Modal.Title> </Modal.Header>
        <Modal.Body>{props.varArr.map((report) => ( <a href={report.link} key={report.id}>{report.link} {report.id}</a> ))}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
// render(<ViewAuditReport />);

export default function Gql() {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [currentAfter, setCurrentAfter] = useState(1); // start with 0 to fetch first page

  const { loading, error, data, refetch } = useQuery(all_portfolio, {
    variables: {
      first: portfoliosPerPage,
      after: currentAfter,
    },
  });

  console.log(currentAfter)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const totalPortfolios = data.totalPortfolio;

  const handleNextPage = () => {
    
    setCurrentAfter((after) => after + 1);
    refetch({  after: currentAfter });
  };

  const handlePrevPage = () => {
  
    setCurrentAfter((after) => after - 1);
    refetch({  after: currentAfter });
  };

  const totalPages = Math.ceil(totalPortfolios / portfoliosPerPage);

  const portfolios = data.allPortfolio;

  

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p> {error.message} </p>}
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
              <td className='view-report'><ViewAuditReport varArr = {portfolio.reports} /></td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>

        
    <div className="pagination-div">
        <div className="pagination">
            <button onClick={() => setCurrentAfter(currentAfter - 1)} disabled={currentAfter === 1}><FaChevronLeft /></button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button key={index + 1} onClick={() => setCurrentAfter(index + 1) } className={currentAfter === index + 1 ? 'active' : ''} >
                  {index + 1}
                </button>
              ))}
              <button onClick={() => setCurrentAfter(currentAfter + 1)} disabled={currentAfter === totalPages}><FaChevronRight /></button>
        </div>
        </div>

      </div> {/* container close */}
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