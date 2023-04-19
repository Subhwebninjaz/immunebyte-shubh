import AllTable from '../portfolio/api-table'

export default function HomeLeagueProjects() {
  return (
    <>
    <section className="league-projects">
      <div className="container">
          <h2 className="sec-title">Top A-League Projects</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          
          <div className="api-data-table">
            {/* <div className="img-div"> <img src="images/home-api-data-table.jpg" alt="" /> </div> */}
            <AllTable />
          </div>
      </div>
    </section>
    </>
  )
}