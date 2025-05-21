# Heltec WiFi LoRa 32 (V3)

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
    <img src="https://heltec.org/wp-content/uploads/2023/09/2.png" alt="Heltec WiFi LoRa 32 (V3)">
  </div>
  <div class="device-intro">
    <p class="device-description">Modern, MeshCore-ready ESP32-S3 board with LoRa, BLE 5, and OLED display.</p>
    <div class="firmware-support">
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Companion Radio Firmware</span>
      </div>
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Repeater</span>
      </div>
      <div class="support-item unsupported">
        <span class="support-icon">✗</span>
        <span class="support-text">Room Server</span>
      </div>
    </div>
  </div>
</div>

<div class="specs-overview">
  <div class="specs-item">
    <div class="specs-label">MCU</div>
    <div class="specs-value">ESP32-S3FN8 (Dual-core Xtensa LX7)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Flash</div>
    <div class="specs-value">8MB SiP</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Chip</div>
    <div class="specs-value">SX1262</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Connectivity</div>
    <div class="specs-value">Wi-Fi 802.11 b/g/n, BLE 5, LoRa</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">USB</div>
    <div class="specs-value">Type-C (with CP2102)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Antenna</div>
    <div class="specs-value">u.FL (IPEX1.0)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Battery</div>
    <div class="specs-value">3.7V Li-ion w/ charging circuit</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Dimensions</div>
    <div class="specs-value">50.2 × 25.5 × 10.2 mm</div>
  </div>
</div>

<div class="device-features">
  <div class="features-group">
    <h3 class="features-title">Key Features</h3>
    <div class="features-grid">
      <div class="feature-item available">
        <span class="feature-name">Display</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Bluetooth</span>
      </div>
      <div class="feature-item unavailable">
        <span class="feature-name">Buttons</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Deep Sleep</span>
      </div>
      <div class="feature-item unavailable">
        <span class="feature-name">GPS</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Battery Charging</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Low Power Modes</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Implementation Notes</h3>
    <ul class="notes-list">
      <li>Same pinout as LoRa32 V2 for backward compatibility</li>
      <li>Ideal for smart city, farm, home automation, and industrial mesh networking</li>
      <li>Onboard OLED over I2C (GPIO21: SDA, GPIO22: SCL)</li>
      <li>Powered via USB-C or 3.7V lithium battery</li>
    </ul>
  </div>
</div>

<div class="wiring-diagram">
  <h3 class="wiring-title">Wiring Diagram</h3>
  <div class="wiring-visual">
    <div class="board-outline">
      <div class="board-header">Heltec WiFi LoRa 32 (V3)</div>
      <div class="board-components">
        <div class="component oled">OLED Display</div>
        <div class="component antenna">LoRa Antenna</div>
      </div>
      <div class="connections">
        <div class="connection">
          <div class="pin">GPIO21</div>
          <div class="wire"></div>
          <div class="destination">SDA (I2C)</div>
        </div>
        <div class="connection">
          <div class="pin">GPIO22</div>
          <div class="wire"></div>
          <div class="destination">SCL (I2C)</div>
        </div>
        <div class="connection">
          <div class="pin">GPIO26</div>
          <div class="wire"></div>
          <div class="destination">LoRa Reset</div>
        </div>
        <div class="connection">
          <div class="pin">GPIO18</div>
          <div class="wire"></div>
          <div class="destination">LoRa CLK</div>
        </div>
      </div>
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
        <td>Master Chip</td>
        <td>ESP32-S3FN8 (Xtensa® 32-bit LX7 Dual Core Processor)</td>
      </tr>
      <tr>
        <td>LoRa Node Chip</td>
        <td>SX1262</td>
      </tr>
      <tr>
        <td>USB to Serial Chip</td>
        <td>CP2102</td>
      </tr>
      <tr>
        <td>Frequency Range</td>
        <td>470–510MHz, 863–928MHz</td>
      </tr>
      <tr>
        <td>Max TX Power</td>
        <td>21±1dBm</td>
      </tr>
      <tr>
        <td>Max RX Sensitivity</td>
        <td>-134dBm @ SF12 BW=125KHz</td>
      </tr>
      <tr>
        <td>Wi-Fi</td>
        <td>802.11 b/g/n, up to 150Mbps</td>
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>Bluetooth 5 (LE)</td>
      </tr>
      <tr>
        <td>Hardware Resources</td>
        <td>7 × ADC1, 2 × ADC2, 7 × Touch, 3 × UART, 2 × I2C, 2 × SPI, etc.</td>
      </tr>
      <tr>
        <td>Memory</td>
        <td>384KB ROM, 512KB SRAM, 16KB RTC SRAM, 8MB Flash</td>
      </tr>
      <tr>
        <td>Interfaces</td>
        <td>Type-C USB, 2 × 1.25 battery connectors, LoRa ANT (IPEX1.0), 2 × 18 2.54mm pins</td>
      </tr>
      <tr>
        <td>Battery Support</td>
        <td>3.7V lithium battery with onboard charging</td>
      </tr>
      <tr>
        <td>Operating Temperature</td>
        <td>-20°C ~ 70°C</td>
      </tr>
      <tr>
        <td>Dimensions</td>
        <td>50.2 × 25.5 × 10.2 mm</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Summary

<div class="summary-container">
  <p>The <strong>Heltec WiFi LoRa 32 V3</strong> is a next-gen IoT board tailored for mesh networking. It supports:</p>
  
  <ul class="summary-list">
    <li>High-efficiency wireless comms (Wi-Fi, BLE, LoRa)</li>
    <li>Full compatibility with previous Heltec V2 boards</li>
    <li>Smart power management with Li-ion charging</li>
    <li>Versatile for MeshCore deployments in any environment — indoor or out</li>
  </ul>
</div>

<style>
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

.feature-name {
  font-size: 0.9rem;
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
    list-style-type: none;

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

/* Wiring Diagram */
.wiring-diagram {
  margin: 2rem 0;
}

.wiring-title {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
}

.wiring-visual {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.board-outline {
  background-color: #1e2735;
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border: 1px solid #304878;
}

.board-header {
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
}

.board-components {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.component {
  background-color: #304878;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.oled {
  background-color: #3884ff;
}

.antenna {
  background-color: #3eaf7c;
}

.connections {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.connection {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pin {
  background-color: #304878;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  flex: 0 0 80px;
  text-align: center;
}

.wire {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #304878, #3884ff);
  margin: 0 0.75rem;
  position: relative;
}

.wire::before, .wire::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #3884ff;
  top: -2px;
}

.wire::before {
  left: 0;
}

.wire::after {
  right: 0;
}

.destination {
  background-color: #242424;
  color: #eee;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  flex: 0 0 120px;
  text-align: center;
  border: 1px solid #3884ff;
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

/* Summary */
.summary-container {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
}

.summary-container p {
  color: #eee;
  font-size: 1.05rem;
  line-height: 1.5;
  margin-top: 0;
}

.summary-list {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.summary-list li {
  color: #eee;
  margin-bottom: 0.5rem;
  line-height: 1.5;
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
}
</style>