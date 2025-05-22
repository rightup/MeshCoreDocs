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
