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
