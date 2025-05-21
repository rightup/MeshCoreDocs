# Station G2

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
    <img src="./../../images/station_g2_mechanical_design_case.jpg" alt="Station G2">
  </div>
  <div class="device-intro">
    <p class="device-description">High-power LoRa gateway with 5W transmit capability, excellent sensitivity, and robust construction for fixed or vehicle installations.</p>
    <div class="device-highlights">
      <div class="highlight-tag">
        <span class="highlight-icon">⚡</span>
        <span class="highlight-text">High Power (5W)</span>
      </div>
      <div class="highlight-tag">
        <span class="highlight-icon">📡</span>
        <span class="highlight-text">Extended Range</span>
      </div>
      <div class="highlight-tag">
        <span class="highlight-icon">🏗️</span>
        <span class="highlight-text">Industrial Grade</span>
      </div>
    </div>
    <div class="firmware-support">
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Companion Radio Firmware</span>
      </div>
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Repeater</span>
      </div>
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Room Server</span>
      </div>
    </div>
  </div>
</div>

<div class="specs-overview">
  <div class="specs-item">
    <div class="specs-label">Processor</div>
    <div class="specs-value">ESP32-S3</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Chip</div>
    <div class="specs-value">SX1262</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Max RF Output Power</div>
    <div class="specs-value">US915: 36.5 dBm (4.46 W)<br>EU868: 37 dBm (5 W)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Amplifier</div>
    <div class="specs-value">P1dB of 35 dBm (3.16 W)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Antenna Connector</div>
    <div class="specs-value">Robust SMA</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Power Supply</div>
    <div class="specs-value">USB Type-C (15V PD) or external 9-19VDC</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Frequency Bands</div>
    <div class="specs-value">US (902-928MHz), EU_868 (869.4-869.65MHz), and others</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Construction</div>
    <div class="specs-value">Stacked PCBs with aluminum substrate as heat sink</div>
  </div>
</div>

<div class="device-features">
  <div class="features-group">
    <h3 class="features-title">Key Features</h3>
    <div class="features-grid">
      <div class="feature-item unavailable">
        <span class="feature-name">Display</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Bluetooth</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">WiFi</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Rich External I/Os</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">High TX Power</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Enhanced Sensitivity</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Robust Design</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Application Notes</h3>
    <ul class="notes-list">
      <li>Ideal for fixed station or vehicle mounted applications</li>
      <li>LoRa sensitivity is 4 dB higher than most other devices thanks to an ultra-low noise figure LNA</li>
      <li>Main application as a base station for extended mesh networks</li>
      <li>Solid construction designed for permanent installations</li>
    </ul>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Performance Advantages

<div class="advantages-container">
  <div class="advantage-card">
    <div class="advantage-icon">📡</div>
    <div class="advantage-title">Extended Range</div>
    <div class="advantage-description">
      <p>With its high-power 5W transmitter and enhanced receiver sensitivity, the Station G2 can achieve significantly longer range than standard LoRa devices.</p>
      <p>The ultra-low noise figure LNA provides 4 dB better sensitivity than typical LoRa devices, improving weak signal reception.</p>
    </div>
  </div>
  
  <div class="advantage-card">
    <div class="advantage-icon">🔌</div>
    <div class="advantage-title">Flexible Power Options</div>
    <div class="advantage-description">
      <p>The Station G2 can be powered via USB Type-C with 15V Power Delivery support or through an external power supply accepting 9-19V DC.</p>
      <p>This flexibility makes it suitable for permanent installations with backup power systems or mobile applications such as vehicle mounting.</p>
    </div>
  </div>
  
  <div class="advantage-card">
    <div class="advantage-icon">🌐</div>
    <div class="advantage-title">Network Extension</div>
    <div class="advantage-description">
      <p>As a high-power, high-sensitivity device, the Station G2 excels as a network extender when configured as a repeater or room server.</p>
      <p>Its robust design and excellent RF performance make it the ideal backbone component for large-scale MeshCore deployments.</p>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Detailed Specifications

<div class="specs-table">
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Processor</td>
        <td>ESP32-S3</td>
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1262</td>
      </tr>
      <tr>
        <td>LoRa Amplifier</td>
        <td>1 dB compression point (P1dB) of 35 dBm (3.16 W)</td>
      </tr>
      <tr>
        <td>Max RF Output Power</td>
        <td>36.5 dBm (4.46 W) for US915 and 37 dBm (5 W) for EU868</td>
      </tr>
      <tr>
        <td>LoRa Sensitivity</td>
        <td>4 dB higher than most other devices thanks to an ultra-low noise figure LNA</td>
      </tr>
      <tr>
        <td>Antenna Connector</td>
        <td>Robust SMA</td>
      </tr>
      <tr>
        <td>Power Supply</td>
        <td>USB Type-C (15V PD) or external power supply 9-19VDC</td>
      </tr>
      <tr>
        <td>Supported Frequency Bands</td>
        <td>US (902-928MHz), EU_868 (869.4-869.65MHz), and several other global regions</td>
      </tr>
      <tr>
        <td>Construction</td>
        <td>Stacked PCBs with aluminum substrate PCB as heat sink</td>
      </tr>
    </tbody>
  </table>
</div>

<style>


li {
  list-style-type: none;
  padding-left: 0;
}


.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}

.divider-line {
  height: 2px;
  background: linear-gradient(90deg, rgba(30, 59, 112, 0.1), rgba(30, 59, 112, 0.8) 50%, rgba(30, 59, 112, 0.1));
  flex-grow: 1;
}

/* Device Header */
.device-header {
  display: flex;
  margin: 2rem 0;
  gap: 2rem;
  align-items: center;
}

.device-image {
  flex: 0 0 auto;
  max-width: 300px;
}

.device-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.device-intro {
  flex: 1;
}

.device-description {
  font-size: 1.25rem;
  color: #eee;
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.device-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.highlight-tag {
  display: flex;
  align-items: center;
  background-color: rgba(30, 59, 112, 0.2);
  border: 1px solid rgba(30, 59, 112, 0.4);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
}

.highlight-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.highlight-text {
  color: #eee;
  font-weight: 500;
}

.firmware-support {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.support-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.supported {
  background-color: rgba(62, 175, 124, 0.2);
  border: 1px solid rgba(62, 175, 124, 0.5);
}

.unsupported {
  background-color: rgba(255, 82, 82, 0.1);
  border: 1px solid rgba(255, 82, 82, 0.3);
}

.partial {
  background-color: rgba(255, 193, 7, 0.2);
  border: 1px solid rgba(255, 193, 7, 0.5);
}

.support-icon {
  margin-right: 0.5rem;
  font-weight: bold;
}

.supported .support-icon {
  color: #3eaf7c;
}

.unsupported .support-icon {
  color: #ff5252;
}

.partial .support-icon {
  color: #ffc107;
}

.support-text {
  color: #eee;
}

/* Specs Overview */
.specs-overview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.specs-item {
  background-color: #1a1a1a;
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid #333;
}

.specs-label {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.specs-value {
  color: #eee;
  font-size: 1rem;
  font-weight: 500;
}

/* Features */
.device-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.features-title, .notes-title {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}

.feature-item {
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  text-align: center;
}

.available {
  background-color: rgba(62, 175, 124, 0.3);
  border: 1px solid rgba(62, 175, 124, 0.6);
  color: #4ae68c;
  font-weight: 500;
}

.unavailable {
  background-color: rgba(102, 102, 102, 0.2);
  border: 1px solid rgba(102, 102, 102, 0.4);
  color: #888;
}

.notes-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.notes-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #eee;
  line-height: 1.4;
}

.notes-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 6px;
  height: 6px;
  background-color: #3884ff;
  border-radius: 50%;
}

/* Performance Advantages */
.advantages-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.advantage-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #333;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.advantage-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #3884ff;
  text-align: center;
}

.advantage-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
}

.advantage-description p {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.advantage-description p:last-child {
  margin-bottom: 0;
}

/* Specifications Table */
.specs-table {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.specs-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1a1a1a;
  border-radius: 6px;
  overflow: hidden;
}

.specs-table th, .specs-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #333;
}

.specs-table th {
  background-color: #304878;
  color: #fff;
  font-weight: 600;
}

.specs-table tr:nth-child(even) {
  background-color: #222;
}

.specs-table td:first-child {
  color: #888;
  font-weight: 500;
  white-space: nowrap;
}

.specs-table td:last-child {
  color: #eee;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .device-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .device-image {
    max-width: 100%;
  }
  
  .specs-table th, .specs-table td {
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
  }
  
  .advantages-container {
    grid-template-columns: 1fr;
  }
}
</style>