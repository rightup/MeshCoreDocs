# Xiao S3 WIO

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
    <img src="./../../images/xiao-esp32s3-wio-sx1262-kit-for-meshtastic-lora-seeed-106179-72494757806465_800x.png" alt="Xiao S3 WIO">
  </div>
  <div class="device-intro">
    <p class="device-description">Compact ESP32-S3 based development board with integrated Wio-SX1262 LoRa module for long-range wireless communication.</p>
    <div class="firmware-support">
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Companion Radio Firmware</span>
      </div>
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Repeater</span>
      </div>
      <div class="support-item partial">
        <span class="support-icon">?</span>
        <span class="support-text">Room Server (To be confirmed)</span>
      </div>
    </div>
  </div>
</div>

<div class="specs-overview">
  <div class="specs-item">
    <div class="specs-label">Processor</div>
    <div class="specs-value">ESP32-S3 dual-core Xtensa LX7 up to 240 MHz</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Memory</div>
    <div class="specs-value">8MB Flash and 8MB PSRAM</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Module</div>
    <div class="specs-value">Wio-SX1262</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Frequency</div>
    <div class="specs-value">862-930 MHz</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Connectivity</div>
    <div class="specs-value">WiFi 2.4 GHz, BLE 5.0</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Dimensions</div>
    <div class="specs-value">21 × 18 mm (compact format)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Power Interface</div>
    <div class="specs-value">USB Type-C</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Antenna Connector</div>
    <div class="specs-value">IPEX/U.FL</div>
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
        <span class="feature-name">LoRa</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">USB-C</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Extensibility</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Arduino Compatible</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">MicroPython</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Optional Case</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Implementation Notes</h3>
    <ul class="notes-list">
      <li>Extremely compact form factor (21 × 18 mm) ideal for space-constrained projects</li>
      <li>Display not integrated but can be added via expansion cards</li>
      <li>Impressive LoRa range of 2-5 km with external antenna</li>
      <li>WiFi and BLE range of 100+ meters</li>
    </ul>
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
        <td>ESP32-S3 with dual-core Xtensa 32-bit LX7 processor up to 240 MHz</td>
      </tr>
      <tr>
        <td>Memory</td>
        <td>8MB Flash and 8MB PSRAM</td>
      </tr>
      <tr>
        <td>LoRa Module</td>
        <td>Wio-SX1262</td>
      </tr>
      <tr>
        <td>LoRa Frequency Range</td>
        <td>862-930 MHz</td>
      </tr>
      <tr>
        <td>WiFi</td>
        <td>2.4 GHz</td>
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>BLE 5.0</td>
      </tr>
      <tr>
        <td>LoRa Range</td>
        <td>2-5 km with external antenna</td>
      </tr>
      <tr>
        <td>WiFi/BLE Range</td>
        <td>100m+</td>
      </tr>
      <tr>
        <td>Dimensions</td>
        <td>21 x 18 mm (compact format)</td>
      </tr>
      <tr>
        <td>Power Interface</td>
        <td>USB Type-C</td>
      </tr>
      <tr>
        <td>Power Management</td>
        <td>Integrated power management chip</td>
      </tr>
      <tr>
        <td>LoRa Antenna Connector</td>
        <td>IPEX/U.FL</td>
      </tr>
      <tr>
        <td>Extensibility</td>
        <td>Via I2C, UART and GPIO interfaces</td>
      </tr>
      <tr>
        <td>Development Compatibility</td>
        <td>Arduino and MicroPython</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Integration Options

<div class="options-container">
  <div class="option-card">
    <div class="option-header">Expansion Capabilities</div>
    <div class="option-content">
      <p>The Xiao S3 WIO offers numerous integration possibilities through its expansion interfaces:</p>
      <ul class="option-list">
        <li>Add displays via I2C interface</li>
        <li>Connect sensors through GPIO pins</li>
        <li>Interface with other devices using UART</li>
        <li>Enhance functionality with expansion cards</li>
      </ul>
    </div>
  </div>
  
  <div class="option-card">
    <div class="option-header">Enclosure Options</div>
    <div class="option-content">
      <p>Available in different package configurations:</p>
      <ul class="option-list">
        <li>Basic board only for integration into custom projects</li>
        <li>Version with 3D printed enclosure for ready-to-deploy solutions</li>
        <li>Compatible with various third-party cases and enclosures</li>
      </ul>
    </div>
  </div>
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

/* Integration Options */
.options-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.option-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
}

.option-header {
  background-color: #304878;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.option-content {
  padding: 1rem;
}

.option-content p {
  color: #eee;
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.option-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0 0 0.5rem 0;
}

.option-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #eee;
  line-height: 1.4;
}

.option-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 6px;
  height: 6px;
  background-color: #3884ff;
  border-radius: 50%;
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
  
  .options-container {
    grid-template-columns: 1fr;
  }
}
</style>