import React from 'react'

const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {
  return (
    <div className="pagination">
      <button>⏮️ First</button>
      <button>⬅️ Previous</button>
      <button>Next ➡️</button>
      <button>Last ⏭️</button>
    </div>
  )
}

export default Pagination