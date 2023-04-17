import Link from 'next/link';

export default function AddressMap() {
  return (
    <>
    <section>
      <div className="container pp-map">
          <h3 className="sec-title" id="title5">Concerns,Queries and Contact</h3 >
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus. </p>
           <div className="row">
            <div className="col-lg-6 ">
              <div className="add-text">
                <p className='p-bold'>Office Timings: 10:00 AM- 6:30 PM</p>
                <p>Address:</p>
                <p>ImmunBytes, Spring House</p>
                <p>B1/639 A, 4th Floor, Janakpuri, New Delhi-110058, India</p>
              </div>
        
            </div>
            <div className="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.919509422082!2d77.08283066553804!3d28.632174382418025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05492ef45429%3A0x318b6b7298e385c6!2sSpringhouse%20Coworking%20SHDL002!5e0!3m2!1sen!2sin!4v1681204091108!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           </div>
      </div>
    </section>
    </>
  )
}