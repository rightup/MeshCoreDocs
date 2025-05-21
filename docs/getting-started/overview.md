<div class="welcome-banner">
  <h1>Welcome to MeshCore!</h1>
  <div class="banner-glow"></div>
</div>

## What is MeshCore?

MeshCore is a multi-platform system that enables secure text communications using LoRa radio hardware. It can be used for off-grid communication, emergency response and disaster recovery, outdoor activities, tactical security (including law enforcement and private security), as well as IoT sensor networks.

MeshCore's mission is to create the most reliable and secure decentralized radio mesh networking system that can be used for communications by anyone.

## MeshCore Architecture

MeshCore is a lightweight, portable C++ library that enables multi-hop packet routing for embedded projects using LoRa and other packet radios. It is designed for developers who want to create resilient, decentralized communication networks that work without the internet.

## Key Features

<div class="key-features">
  <div class="key-feature">
    <div class="feature-icon">📡</div>
    <h3>Multi-Hop Packet Routing</h3>
    <p>Devices can forward messages across multiple nodes, extending range beyond a single radio's reach. MeshCore supports up to a configurable number of hops to balance network efficiency and prevent excessive traffic.</p>
  </div>
  
  <div class="key-feature">
    <div class="feature-icon">🔌</div>
    <h3>Supports LoRa Radios</h3>
    <p>Works with Heltec, RAK Wireless, and other LoRa-based hardware.</p>
  </div>
  
  <div class="key-feature">
    <div class="feature-icon">🌐</div>
    <h3>Decentralized & Resilient</h3>
    <p>No central server or internet required; the network is self-healing.</p>
  </div>
  
  <div class="key-feature">
    <div class="feature-icon">🔋</div>
    <h3>Low Power Consumption</h3>
    <p>Ideal for battery-powered or solar-powered devices.</p>
  </div>
  
  <div class="key-feature">
    <div class="feature-icon">🚀</div>
    <h3>Simple to Deploy</h3>
    <p>Pre-built example applications make it easy to get started.</p>
  </div>
</div>

## Is MeshCore Open Source?

MeshCore is free and open source:

- MeshCore routing and firmware are available on GitHub under the MIT license
- There are community-created clients, like web clients, which are free and some are also open source
- The cross-platform mobile app developed by Liam Cottle for Android/iOS/PC is free to download and use
- The T-Deck firmware developed by Scott at Ripple Radios, the creator of MeshCore, is also free to flash onto your devices

Some optional advanced features are available on T-Deck if you register your device to get an unlock key, and on MeshCore smartphone clients, you can unlock the wait timer for remote management of repeaters and room servers via RF. These features are entirely optional and not necessary for the basic messaging experience.

<style>
.welcome-banner {
  background: linear-gradient(135deg, #1e3b70 0%, #29539b 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.welcome-banner h1 {
  font-size: 2.5rem;
  margin: 0;
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.architecture-diagram {
  margin: 2rem 0;
  text-align: center;
}

.architecture-placeholder {
  background-color: #f8f9fa;
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.architecture-placeholder h4 {
  margin-top: 0;
  color: #3eaf7c;
  font-size: 1.4rem;
}

.key-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 2rem 0;
}

.key-feature {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.key-feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #3eaf7c;
}

.key-feature h3 {
  margin-top: 0;
  color: #1e3b70;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0.5rem;
}

.key-feature p {
  margin-bottom: 0;
  color: #222;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 650px) {
  .key-features {
    grid-template-columns: 1fr;
  }
  
  .welcome-banner h1 {
    font-size: 2rem;
  }
}

</style>