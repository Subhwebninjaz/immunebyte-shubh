import Accordion from 'react-bootstrap/Accordion';
import { FaMinus } from 'react-icons/fa';

export default function Faq() {
  return (
    <>
    <section className="faq">
      <div className="container">
          <h2 className="sec-title">FAQs</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          <Accordion defaultActiveKey="0" flush>

            <Accordion.Item eventKey="0">
              <Accordion.Header>Lorem Ipsum Dolor Sit Amet Consectetur?<span className="acc-icn"><FaMinus className='faq-mns' /><FaMinus /></span></Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus. Curabitur aliquam pellentesque nulla vitae ullamcorper. Ut iaculis mollis pulvinar. Vestibulum malesuada laoreet urna, nec auctor odio pharetra quis.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Lorem Ipsum Dolor Sit Amet Consectetur?<span className="acc-icn"><FaMinus className='faq-mns' /><FaMinus /></span></Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus. Curabitur aliquam pellentesque nulla vitae ullamcorper. Ut iaculis mollis pulvinar. Vestibulum malesuada laoreet urna, nec auctor odio pharetra quis.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Lorem Ipsum Dolor Sit Amet Consectetur?<span className="acc-icn"><FaMinus className='faq-mns' /><FaMinus /></span></Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus. Curabitur aliquam pellentesque nulla vitae ullamcorper. Ut iaculis mollis pulvinar. Vestibulum malesuada laoreet urna, nec auctor odio pharetra quis.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Lorem Ipsum Dolor Sit Amet Consectetur?<span className="acc-icn"><FaMinus className='faq-mns' /><FaMinus /></span></Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus. Curabitur aliquam pellentesque nulla vitae ullamcorper. Ut iaculis mollis pulvinar. Vestibulum malesuada laoreet urna, nec auctor odio pharetra quis.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Lorem Ipsum Dolor Sit Amet Consectetur?<span className="acc-icn"><FaMinus className='faq-mns' /><FaMinus /></span></Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus. Curabitur aliquam pellentesque nulla vitae ullamcorper. Ut iaculis mollis pulvinar. Vestibulum malesuada laoreet urna, nec auctor odio pharetra quis.</Accordion.Body>
            </Accordion.Item>

          </Accordion>
      </div>
    </section>
    </>
  )
}