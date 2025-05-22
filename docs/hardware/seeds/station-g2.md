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
