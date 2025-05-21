# LilyGo TLora32 v1.6

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
    <img src="./../../images/LilyGO TTGO T3 LoRa32 868MHz V1.6.1 ESP32.jpg" alt="LilyGo TLora32 v1.6">
  </div>
  <div class="device-intro">
    <p class="device-description">Compact ESP32-based board with LoRa connectivity, OLED display, and support for multiple frequencies.</p>
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
    <div class="specs-value">ESP32</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa Chip</div>
    <div class="specs-value">SX1276</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Frequencies</div>
    <div class="specs-value">433MHz, 868MHz, 915MHz</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Display</div>
    <div class="specs-value">0.96 inch OLED</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">USB Interface</div>
    <div class="specs-value">Micro USB</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Operating Voltage</div>
    <div class="specs-value">1.8~3.7V</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Transmission Power</div>
    <div class="specs-value">+20dBm</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Reception Sensitivity</div>
    <div class="specs-value">-139dBm@LoRa &62.5Khz&SF=12&146bps</div>
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
        <span class="feature-name">SD Card Slot (some versions)</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Battery Interface</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Important Notes</h3>
    <ul class="notes-list">
      <li>Some versions have an issue with the battery charging circuit that can allow overcharging</li>
      <li>SD Card slot is only available on specific versions of this board</li>
      <li>Battery interface includes charging and discharging circuit</li>
      <li>Available in different frequency variants (433MHz, 868MHz, 915MHz)</li>
    </ul>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Power Specifications

<div class="power-specs">
  <div class="power-item">
    <div class="power-header">Accepted Current</div>
    <div class="power-value">10~14mA</div>
  </div>
  
  <div class="power-item">
    <div class="power-header">Transmission Current</div>
    <div class="power-specs-detail">
      <div class="power-spec">
        <span class="power-mode">@+20dBm:</span>
        <span class="power-amount">120mA</span>
      </div>
      <div class="power-spec">
        <span class="power-mode">@+17dBm:</span>
        <span class="power-amount">90mA</span>
      </div>
      <div class="power-spec">
        <span class="power-mode">@+13dBm:</span>
        <span class="power-amount">29mA</span>
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
        <td>ESP32</td>
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1276</td>
      </tr>
      <tr>
        <td>Available Frequencies</td>
        <td>433MHz, 868MHz, 915MHz</td>
      </tr>
      <tr>
        <td>Display</td>
        <td>0.96 inch OLED</td>
      </tr>
      <tr>
        <td>USB Interface</td>
        <td>Micro USB</td>
      </tr>
      <tr>
        <td>Operating Voltage</td>
        <td>1.8~3.7V</td>
      </tr>
      <tr>
        <td>Accepted Current</td>
        <td>10~14mA</td>
      </tr>
      <tr>
        <td>Transmission Current</td>
        <td>120mA@+20dBm, 90mA@+17dBm, 29mA@+13dBm</td>
      </tr>
      <tr>
        <td>Transmission Power</td>
        <td>+20dBm</td>
      </tr>
      <tr>
        <td>Reception Sensitivity</td>
        <td>-139dBm@LoRa &62.5Khz&SF=12&146bps</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="alert-box warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-content">
    <div class="alert-title">Battery Charging Warning</div>
    <div class="alert-text">Some versions of this board have an issue with the battery charging circuit that can allow overcharging. Take appropriate precautions when using the battery charging feature.</div>
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

/* Power specifications */
.power-specs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.power-item {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
}

.power-header {
  background-color: #304878;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
}

.power-value {
  padding: 1rem;
  color: #eee;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 500;
}

.power-specs-detail {
  padding: 1rem;
}

.power-spec {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #eee;
}

.power-spec:last-child {
  margin-bottom: 0;
}

.power-mode {
  color: #888;
}

.power-amount {
  font-weight: 500;
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

/* Alert box */
.alert-box {
  display: flex;
  border-radius: 8px;
  padding: 1.25rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 193, 7, 0.3);
  background-color: rgba(255, 193, 7, 0.1);
}

.alert-box.warning {
  border-color: rgba(255, 193, 7, 0.3);
  background-color: rgba(255, 193, 7, 0.1);
}

.alert-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.alert-box.warning .alert-icon {
  color: #ffc107;
}

.alert-content {
  flex: 1;
}

.alert-title {
  color: #ffc107;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.alert-text {
  color: #eee;
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
  
  .power-specs {
    grid-template-columns: 1fr;
  }
  
  .specs-table th, .specs-table td {
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
  }
}
</style>