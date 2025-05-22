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
