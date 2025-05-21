# LilyGo T3S3

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
    <img src="./../../images/T3S3-LILYGO_7.webp" alt="LilyGo T3S3">
  </div>
  <div class="device-intro">
    <p class="device-description">Compact ESP32-S3 based LoRa development board with built-in OLED display and multiple LoRa chip options.</p>
    <div class="model-variants">
      <div class="variant-tag lora-868">868/915MHz (SX1262/SX1276)</div>
      <div class="variant-tag lora-24g">2.4GHz (SX1280)</div>
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
    <div class="specs-label">LoRa Chip Options</div>
    <div class="specs-value">SX1262 (868/915MHz), SX1276 (868/915MHz), SX1280 (2.4GHz)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Display</div>
    <div class="specs-value">0.96 inch OLED</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Antenna Connector</div>
    <div class="specs-value">IPEX/U.FL or SMA (depending on version)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Memory Card</div>
    <div class="specs-value">TF card (microSD) support</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Output Power</div>
    <div class="specs-value">20 dBm (SX1280 version with PA)</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Power Supply</div>
    <div class="specs-value">USB and 3.7V LiPo battery</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Connectivity</div>
    <div class="specs-value">WiFi, BLE 5.0</div>
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
      <div class="feature-item available">
        <span class="feature-name">WiFi</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">External Antenna</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">microSD Support</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Battery Support</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Available LoRa Variants</h3>
    <div class="variants-compare">
      <div class="variant-card">
        <div class="variant-header lora-868">868/915MHz Version</div>
        <ul class="variant-features">
          <li>Available with SX1262 or SX1276 LoRa chips</li>
          <li>Compatible with standard MeshCore frequency bands</li>
          <li>Ideal for long-range communication</li>
          <li>Regional regulations apply to frequency use</li>
        </ul>
      </div>
      <div class="variant-card">
        <div class="variant-header lora-24g">2.4GHz Version</div>
        <ul class="variant-features">
          <li>Equipped with SX1280 LoRa chip</li>
          <li>Higher frequency allows for global use</li>
          <li>Power amplifier (PA) provides 20 dBm output</li>
          <li>Shorter range but higher data rates</li>
        </ul>
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
        <td>Processor</td>
        <td>ESP32-S3</td>
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>Multiple options available: SX1262 (868/915MHz), SX1276 (868/915MHz), SX1280 (2.4GHz)</td>
      </tr>
      <tr>
        <td>Display</td>
        <td>0.96 inch OLED</td>
      </tr>
      <tr>
        <td>Antenna Connector</td>
        <td>IPEX/U.FL or SMA (depending on version)</td>
      </tr>
      <tr>
        <td>Memory Card Support</td>
        <td>Yes, TF card (microSD)</td>
      </tr>
      <tr>
        <td>Output Power</td>
        <td>For the SX1280 version with PA, output power of 20 dBm</td>
      </tr>
      <tr>
        <td>Power Supply</td>
        <td>USB and 3.7V LiPo battery</td>
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>Yes, BLE 5.0 (inferred from ESP32-S3)</td>
      </tr>
      <tr>
        <td>WiFi</td>
        <td>Yes (inferred from ESP32-S3)</td>
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
  margin-bottom: 1rem;
  line-height: 1.5;
}

.model-variants {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.variant-tag {
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
}

.lora-868 {
  background-color: rgba(56, 132, 255, 0.2);
  border: 1px solid rgba(56, 132, 255, 0.5);
  color: #3884ff;
}

.lora-24g {
  background-color: rgba(255, 152, 0, 0.2);
  border: 1px solid rgba(255, 152, 0, 0.5);
  color: #ff9800;
}

.firmware-support {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
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


li {
  list-style-type: none;
  padding-left: 0;
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

/* Variant Cards */
.variants-compare {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.variant-card {
  flex: 1;
  min-width: 250px;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
}

.variant-header {
  padding: 0.75rem 1rem;
  font-weight: 600;
  text-align: center;
}

.variant-header.lora-868 {
  background-color: #3884ff;
  color: white;
}

.variant-header.lora-24g {
  background-color: #ff9800;
  color: white;
}

.variant-features {
  list-style-type: none;
  padding: 1rem;
  margin: 0;
}

.variant-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #eee;
  line-height: 1.4;
}

.variant-features li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 6px;
  height: 6px;
  background-color: #3884ff;
  border-radius: 50%;
}

.variant-features li:last-child {
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