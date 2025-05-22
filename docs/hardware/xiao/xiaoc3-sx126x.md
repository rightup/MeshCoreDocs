# Xiao C3 + SX126x Module

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="device-header">
  <div class="device-image">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010611-wio-sx1262-with-xiao-esp32s3.jpg" alt="SX126x LoRa Module">
  </div>
  <div class="device-intro">
    <p class="device-description">Compact ESP32-C3 board requiring an external SX126x LoRa module for MeshCore functionality.</p>
    <div class="less-documented-notice">
      <div class="notice-icon">ℹ️</div>
      <div class="notice-text">This model is less documented online compared to other more popular models.</div>
    </div>
    <div class="firmware-support">
      <div class="support-item supported">
        <span class="support-icon">✓</span>
        <span class="support-text">Companion Radio Firmware</span>
      </div>
      <div class="support-item partial">
        <span class="support-icon">?</span>
        <span class="support-text">Repeater (Possible)</span>
      </div>
      <div class="support-item partial">
        <span class="support-icon">?</span>
        <span class="support-text">Room Server (Possible)</span>
      </div>
    </div>
  </div>
</div>

<div class="specs-overview">
  <div class="specs-item">
    <div class="specs-label">Processor</div>
    <div class="specs-value">ESP32-C3</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">LoRa</div>
    <div class="specs-value">External SX126x module required</div>
  </div>
  <div class="specs-item">
    <div class="specs-label">Format</div>
    <div class="specs-value">Compact (basic XIAO format)</div>
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
        <span class="feature-name">External LoRa Module</span>
      </div>
      <div class="feature-item available">
        <span class="feature-name">Flexibility</span>
      </div>
    </div>
  </div>
  
  <div class="notes-group">
    <h3 class="notes-title">Implementation Notes</h3>
    <ul class="notes-list">
      <li>Display is not integrated but can be added via expansion cards</li>
      <li>Requires an external SX126x LoRa module to function with MeshCore</li>
      <li>Can be configured according to needs with different modules</li>
      <li>This is a modular solution rather than an all-in-one device</li>
    </ul>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Hardware Configuration

<div class="module-setup">
  <div class="module-setup-illustration">
    <div class="board-illustration">
      <div class="board-label">Xiao C3 Board</div>
      <div class="connection-points">
        <div class="connection-point">GPIO1</div>
        <div class="connection-point">GPIO2</div>
        <div class="connection-point">GPIO3</div>
        <div class="connection-point">GPIO4</div>
        <div class="connection-point">GPIO5</div>
        <div class="connection-point">3.3V</div>
        <div class="connection-point">GND</div>
      </div>
    </div>
    <div class="connection-lines">
      <div class="connection-line"></div>
      <div class="connection-line"></div>
      <div class="connection-line"></div>
    </div>
    <div class="module-illustration-right">
      <div class="module-label">SX126x LoRa Module</div>
      <div class="connection-points module-points">
        <div class="connection-point">MOSI</div>
        <div class="connection-point">MISO</div>
        <div class="connection-point">SCK</div>
        <div class="connection-point">NSS</div>
        <div class="connection-point">DIO1</div>
        <div class="connection-point">VCC</div>
        <div class="connection-point">GND</div>
      </div>
    </div>
  </div>
  <div class="setup-note">
    Exact wiring depends on the specific SX126x module used. Refer to the module's documentation for precise connection details.
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Additional Information

<div class="limited-info-notice">
  This model appears to be a combination of a Xiao C3 board with an external SX126x module. Limited specific information is available online compared to other more popular models.
</div>

<div class="considerations">
  <h3 class="considerations-title">Key Considerations</h3>
  <div class="consideration-items">
    <div class="consideration-item">
      <div class="consideration-icon">🔌</div>
      <div class="consideration-content">
        <div class="consideration-title">Modular Design</div>
        <div class="consideration-text">You'll need to purchase and connect the SX126x module separately</div>
      </div>
    </div>
    <div class="consideration-item">
      <div class="consideration-icon">⚙️</div>
      <div class="consideration-content">
        <div class="consideration-title">Assembly Required</div>
        <div class="consideration-text">This solution requires manual connection of components</div>
      </div>
    </div>
    <div class="consideration-item">
      <div class="consideration-icon">📋</div>
      <div class="consideration-content">
        <div class="consideration-title">Limited Documentation</div>
        <div class="consideration-text">Less documentation available compared to integrated solutions</div>
      </div>
    </div>
  </div>
</div>
