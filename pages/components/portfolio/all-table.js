import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AllTable from './api-table'

export default function ApiTabTable() {
return (
    <>
	<section className="Api-Tabs">
        <div className='container'>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Security Audits">
                <AllTable/>
                </Tab>
                <Tab eventKey="second" title="Blockchain Security">
                <AllTable/>
                </Tab>
                <Tab eventKey="third" title="Penetration Testing">
                <AllTable/>
                </Tab>
                <Tab eventKey="four" title="Web3 Security Consulting">
                <AllTable/>
                </Tab>
                <Tab eventKey="five" title="Digital Asset Security">
                <AllTable/>
                </Tab>
            </Tabs>
        </div>
    </section>
    </>
);
}
