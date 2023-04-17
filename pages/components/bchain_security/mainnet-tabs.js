import React, { useState } from 'react';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const Tab1 = () => {
    return <>
    <div className='structure-side'>
      <div className='structure-content'>
        <h4>Sybil Attack</h4>
        <p>A Sybil attack uses a single node to operate many active fake identities (or Sybil identities) simultaneously, within a peer-to-peer network. This type of attack aims to undermine the authority or power in a reputable system by gaining the majority of influence in the network. The fake identities serve to provide this influence.</p>
      </div>
      <div className='structure-content'>
        <h4>Eclipse Attack</h4>
        <p>Eclipse attacks isolate a node on the network and eclipse its view of the other nodes. The attacker then floods the network with illegitimate nodes, which then communicate with the infected node. This redirected inbound and outbound traffic ensures that the attacked node is alienated from the rest of the network.</p>
      </div>
      <div className='structure-content'>
        <h4>Eavesdropping Attack</h4>
        <p>Eavesdropping attacks happen when cyber criminals or attackers listen in to network traffic traveling over computers, servers, mobile devices and Internet of Things (IoT) devices.</p>
      </div>
      <div className='structure-content'>
        <h4>Denial of Service Attack</h4>
        <p>"Denial of service" or "Dosn describes the ultimate goal of a class of cyber attacks designed to render a service inaccessible. The DoS attacks that most people have heard about are those launched against high profile websites, since these are frequently reported by the media.</p>
      </div>
      <div className='structure-content'>
        <h4>BGP Hijack Attack</h4>
        <p>BGP hijacking is when attackers maliciously reroute Internet traffic. Attackers accomplish this by falsely announcing ownership of groups of IP addresses, called IP prefixes, that they do not actually own, control, or route to.</p>
      </div>
      <div className='structure-content'>
        <h4>Alien Attack</h4>
        <p>Alien attack, also known as address pool pollution, refers to an attack method that induces nodes of the same chain to invade and pollute each other. The main reason for the vulnerability is that the same chain system does not identify non-similar nodes in the communication protocol.</p>
      </div>
      <div className='structure-content'>
        <h4>Timejacking</h4>
        <p>Timejacking. It is a highly critical vulnerability that can misinform the nodes. A typical timejacking attack occurs when an adversary corrupts the timestamp of a node to disconnect it from its honest peers. Then utilize the falsified timestamp to connect the node to a dubious alternative blockchain.</p>
      </div>
    </div>
    </>;
  };
  
  const Tab2 = () => {
    return <>
    <div className='structure-side'>
      <div className='structure-content'>
        <h4>Eavesdropping Attack</h4>
        <p>Eavesdropping attacks happen when cyber criminals or attackers listen in to network traffic traveling over computers, servers, mobile devices and Internet of Things (IoT) devices.</p>
      </div>
      <div className='structure-content'>
        <h4>Denial of Service Attack</h4>
        <p>"Denial of service" or "Dosn describes the ultimate goal of a class of cyber attacks designed to render a service inaccessible. The DoS attacks that most people have heard about are those launched against high profile websites, since these are frequently reported by the media.</p>
      </div>
      <div className='structure-content'>
        <h4>The Ethereum Black Valentine's Day Vulnerability</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi.</p>
      </div>
      <div className='structure-content'>
        <h4>Http Input Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
      <div className='structure-content'>
        <h4>Cross-domain Phishing Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
    </div>
    </>;
  };
  
  const Tab3 = () => {
    return <>
    <div className='structure-side'>
      <div className='structure-content'>
        <h4>Denial of Service Attack</h4>
        <p>"Denial of service" or "Dosn describes the ultimate goal of a class of cyber attacks designed to render a service inaccessible. The DoS attacks that most people have heard about are those launched against high profile websites, since these are frequently reported by the media.</p>
      </div>
      <div className='structure-content'>
        <h4>Eavesdropping Attack</h4>
        <p>Eavesdropping attacks happen when cyber criminals or attackers listen in to network traffic traveling over computers, servers, mobile devices and Internet of Things (IoT) devices.</p>
      </div>
      <div className='structure-content'>
        <h4>The Ethereum Black Valentine's Day Vulnerability</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi.</p>
      </div>
      <div className='structure-content'>
        <h4>Http Input Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
      <div className='structure-content'>
        <h4>Cross-domain Phishing Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
    </div>
    </>;
  };
  const Tab4 = () => {
    return <>
    <div className='structure-side'>
      <div className='structure-content'>
        <h4>The Ethereum Black Valentine's Day Vulnerability</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi.</p>
      </div>
      <div className='structure-content'>
        <h4>Eavesdropping Attack</h4>
        <p>Eavesdropping attacks happen when cyber criminals or attackers listen in to network traffic traveling over computers, servers, mobile devices and Internet of Things (IoT) devices.</p>
      </div>
      <div className='structure-content'>
        <h4>Denial of Service Attack</h4>
        <p>"Denial of service" or "Dosn describes the ultimate goal of a class of cyber attacks designed to render a service inaccessible. The DoS attacks that most people have heard about are those launched against high profile websites, since these are frequently reported by the media.</p>
      </div>
      <div className='structure-content'>
        <h4>Http Input Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
      <div className='structure-content'>
        <h4>Cross-domain Phishing Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
    </div>
    </>;
  };
  const Tab5 = () => {
    return <>
    <div className='structure-side'>
      <div className='structure-content'>
        <h4>Http Input Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
      <div className='structure-content'>
        <h4>Eavesdropping Attack</h4>
        <p>Eavesdropping attacks happen when cyber criminals or attackers listen in to network traffic traveling over computers, servers, mobile devices and Internet of Things (IoT) devices.</p>
      </div>
      <div className='structure-content'>
        <h4>Denial of Service Attack</h4>
        <p>"Denial of service" or "Dosn describes the ultimate goal of a class of cyber attacks designed to render a service inaccessible. The DoS attacks that most people have heard about are those launched against high profile websites, since these are frequently reported by the media.</p>
      </div>
      <div className='structure-content'>
        <h4>The Ethereum Black Valentine's Day Vulnerability</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi.</p>
      </div>
      <div className='structure-content'>
        <h4>Cross-domain Phishing Attack</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula mi, non fringilla ipsum vestibulum ac. Proin maximus, dui accumsan feugiat vehicula, tellus nunc bibendum urna, in tincidunt est diam sit amet nisi. In ullamcorper nunc sed nisl sagittis semper. In hac habitasse platea dictumst. Donec ut odio tortor.</p>
      </div>
    </div>
    </>;
  };
  
  return (
    <>
    <section >
    <div className="container">
        <div className="vt-tab">
        <h3 className="od-title">Blockchain Mainnet Security Audit</h3>
        <p className='sec-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, mollitia quo assumenda veniam a debitis? Neque dicta illo provident veniam sed incidunt</p>
      <div className="row g-4">
        <div className="col-lg-3">
            <div className="struct-btn">
                <div className={`vertical-tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                    <button className="btn btn-fill" type="button">P2P</button>
                </div>
                <div className={`vertical-tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                    <button className="btn btn-fill" type="button">RPC</button>
                </div>
                <div className={`vertical-tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                    <button className="btn btn-fill" type="button">Consensus</button>
                </div>
                <div className={`vertical-tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>
                    <button className="btn btn-fill" type="button">RPC</button>
                </div>
                <div className={`vertical-tab ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>
                    <button className="btn btn-fill" type="button">RPC</button>
                </div>
            </div>
        </div>

        <div className="col-lg-9">
                {activeTab === 1 && <Tab1 />}
                {activeTab === 2 && <Tab2 />}
                {activeTab === 3 && <Tab3 />}
                {activeTab === 4 && <Tab4 />}
                {activeTab === 5 && <Tab5 />}
        </div>

     </div>
        </div>
       
    </div>
    </section>
    </>

  );
};

export default VerticalTabs;
