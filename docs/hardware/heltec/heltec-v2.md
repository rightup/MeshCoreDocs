# Heltec WiFi LoRa 32 (V2)

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
    <img src="./../../images/wifi-lora-32-v2-1.png" alt="Heltec WiFi LoRa 32 (V2)">
  </div>
  <div class="device-intro">
    <p class="device-description">Classic ESP32-based LoRa + Wi-Fi + OLED board with battery management.</p>
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
    <div class="specs-label">Main Chip</div>
    <div class="specs-value">ESP32 (dual-core 32-bit MCU + ULP core)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Chip</div>
    <div class="specs-value">SX1276/SX1278</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">CPU Frequency</div>
    <div class="specs-value">240 MHz</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Flash Memory</div>
    <div class="specs-value">8MB</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Bands</div>
    <div class="specs-value">EU_433, CN_470_510, EU_863_870, US_902_928</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">USB Interface</div>
    <div class="specs-value">Type-C with various protections</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Display</div>
    <div class="specs-value">0.96 inch OLED screen (128×64)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Standby Current</div>
    <div class="specs-value">≤ 800uA</div>
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
        <span class="feature-name">WiFi</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Bluetooth</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Built-in Antenna</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">USB to Serial</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Deep Sleep</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Battery Charging</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Implementation Details</h3>
    <ul class="notes-list">
      <li>Dedicated 2.4 GHz metal spring antenna for WiFi and Bluetooth</li>
      <li>Integrated CP2102 chip for programming and debugging</li>
      <li>SH1.25-2 battery interface with integrated lithium battery management system</li>
      <li>Battery management includes charging/discharging control, overcharge protection, and power detection</li>
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
        <td>Main Chip</td>
        <td>ESP32 (dual-core 32-bit MCU + ULP core)</td>
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1276/SX1278</td>
      </tr>
      <tr>
        <td>Max CPU Frequency</td>
        <td>240 MHz</td>
      </tr>
      <tr>
        <td>Flash Memory</td>
        <td>8MB</td>
      </tr>
      <tr>
        <td>Supported LoRa Bands</td>
        <td>EU_433, CN_470_510, EU_863_870, US_902_928</td>
      </tr>
      <tr>
        <td>USB Interface</td>
        <td>Type-C with voltage regulator, ESD protection, short-circuit protection, RF protection</td>
      </tr>
      <tr>
        <td>Battery</td>
        <td>SH1.25-2 battery interface, integrated lithium battery management system (charging and discharging, overcharge protection, power detection, automatic USB/battery switching)</td>
      </tr>
      <tr>
        <td>Display</td>
        <td>0.96 inch OLED screen 128*64 dots</td>
      </tr>
      <tr>
        <td>Standby Current</td>
        <td>≤ 800uA</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
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

/* Compatibility Section */
.compatibility-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.compatibility-item {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
}

.compatibility-header {
  background-color: #304878;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
}

.compatibility-status {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.status-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}

.supported .status-icon {
  background-color: rgba(62, 175, 124, 0.2);
  border: 1px solid rgba(62, 175, 124, 0.5);
  color: #3eaf7c;
}

.unsupported .status-icon {
  background-color: rgba(255, 82, 82, 0.1);
  border: 1px solid rgba(255, 82, 82, 0.3);
  color: #ff5252;
}

.partial .status-icon {
  background-color: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  color: #ffc107;
}

.status-text {
  color: #eee;
  font-size: 1rem;
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
  
  .compatibility-container {
    grid-template-columns: 1fr;
  }
}
</style>