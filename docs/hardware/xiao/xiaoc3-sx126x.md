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

<style>
li {
  list-style-type: none;
  padding-left: 0;
}

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
  position: relative;
}

.device-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.module-illustration {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
}

.plus-sign {
  font-size: 2rem;
  color: #eee;
  margin: 0 1rem;
  font-weight: bold;
}

.module-image {
  width: 120px;
}

.module-image img {
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

.less-documented-notice {
  display: flex;
  align-items: center;
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid #ffc107;
  padding: 0.75rem 1rem;
  border-radius: 0 4px 4px 0;
  margin-bottom: 1.5rem;
}

.notice-icon {
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.notice-text {
  color: #eee;
  font-size: 0.95rem;
  line-height: 1.4;
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

/* Module Setup Illustration */
.module-setup {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
}

.module-setup-illustration {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 1rem;
}

.board-illustration, .module-illustration-right {
  background-color: #242424;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  flex: 1;
  min-width: 0;
}

.board-label, .module-label {
  text-align: center;
  color: #fff;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #444;
  font-size: 0.95rem;
  word-wrap: break-word;
  hyphens: auto;
}

.connection-points {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.connection-point {
  background-color: #304878;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.connection-lines {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  min-width: 40px;
}

.connection-line {
  height: 2px;
  background: linear-gradient(90deg, #304878, #3884ff);
  width: 100%;
  position: relative;
}

.connection-line::before, .connection-line::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: -2px;
}

.connection-line::before {
  left: 0;
  background-color: #304878;
}

.connection-line::after {
  right: 0;
  background-color: #3884ff;
}

.setup-note {
  background-color: rgba(56, 132, 255, 0.1);
  border-left: 4px solid #3884ff;
  padding: 0.75rem 1rem;
  border-radius: 0 4px 4px 0;
  color: #eee;
  font-size: 0.95rem;
  margin-top: 1.5rem;
}

/* Limited info notice */
.limited-info-notice {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
  color: #eee;
  line-height: 1.6;
  font-size: 1.05rem;
}

/* Considerations */
.considerations {
  margin-top: 2rem;
}

.considerations-title {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
}

.consideration-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.consideration-item {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.25rem;
  border: 1px solid #333;
  display: flex;
  align-items: flex-start;
}

.consideration-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.consideration-content {
  flex: 1;
  min-width: 0;
}

.consideration-title {
  color: #eee;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}

.consideration-text {
  color: #ddd;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Responsive adjustments améliorés */
@media (max-width: 768px) {
  .device-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .device-image {
    max-width: 100%;
  }
  
  .module-setup-illustration {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .board-illustration, .module-illustration-right {
    width: 100%;
    flex: none;
  }
  
  .connection-lines {
    flex-direction: row;
    justify-content: center;
    padding: 0.5rem 0;
    gap: 0.5rem;
  }
  
  .connection-line {
    width: 30px;
    height: 2px;
  }
  
  .board-label, .module-label {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.4rem;
  }
  
  .connection-point {
    font-size: 0.75rem;
    padding: 0.25rem 0.4rem;
  }
  
  .consideration-items {
    grid-template-columns: 1fr;
  }
  
  .specs-overview {
    grid-template-columns: 1fr;
  }
  
  .device-features {
    grid-template-columns: 1fr;
  }
  
  .firmware-support {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .support-item {
    margin-right: 0;
  }
}

@media (max-width: 480px) {
  .module-setup {
    padding: 1rem;
  }
  
  .board-illustration, .module-illustration-right {
    padding: 0.75rem;
  }
  
  .board-label, .module-label {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  
  .connection-point {
    font-size: 0.7rem;
    padding: 0.2rem 0.3rem;
  }
  
  .specs-overview {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .consideration-item {
    padding: 1rem;
  }
  
  .consideration-icon {
    font-size: 1.25rem;
    margin-right: 0.75rem;
  }
}
</style>