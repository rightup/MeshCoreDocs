# Firmware

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="firmware-intro">
  <div class="intro-content">
    MeshCore has diffrent types of firmware that are not available on other LoRa systems. Each type responds to specific needs in creating flexible and efficient mesh networks.
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Available Firmware Types

<div class="firmware-grid">
  <a href="/firmware/companion" class="firmware-card">
    <div class="firmware-header">
      <h3>Companion Radio Firmware</h3>
      <div class="firmware-arrow">→</div>
    </div>
    <div class="firmware-description">
      Companion radios serve as an interface between your LoRa devices and messaging applications. Available in two variants: <strong>BLE Companion</strong> (Bluetooth connection) and <strong>USB Serial Companion</strong> (USB connection).
    </div>
  </a>

  <a href="/firmware/repeater" class="firmware-card">
    <div class="firmware-header">
      <h3>Repeater</h3>
      <div class="firmware-arrow">→</div>
    </div>
    <div class="firmware-description">
      Repeaters intelligently extend the range of your MeshCore network. Unlike other LoRa systems, they do not retransmit all packets but route in an optimized manner to destinations.
    </div>
  </a>

  <a href="/firmware/room-server" class="firmware-card">
    <div class="firmware-header">
      <h3>Room Server</h3>
      <div class="firmware-arrow">→</div>
    </div>
    <div class="firmware-description">
      Room servers function as BBS servers for message sharing with history storage. They allow users to retrieve missed messages during their movements.
    </div>
  </a>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Recommended Initial Setup

<div class="config-container">
  <div class="config-section">
    <div class="config-badge">1</div>
    <div class="config-content">
      <div class="config-title">One device</div>
      <div class="config-text">
        Flash the <strong>BLE Companion</strong> firmware to start communicating via the mobile application.
      </div>
    </div>
  </div>

  <div class="config-section">
    <div class="config-badge">2</div>
    <div class="config-content">
      <div class="config-title">Two devices</div>
      <div class="config-text">
        Use two <strong>BLE Companion</strong> for local communication, or one <strong>BLE Companion</strong> + one <strong>Repeater</strong> to extend range.
      </div>
    </div>
  </div>

  <div class="config-section">
    <div class="config-badge">∞</div>
    <div class="config-content">
      <div class="config-title">Multiple devices</div>
      <div class="config-text">
        Add <strong>Room Servers</strong> to create persistent communication zones.
      </div>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Resources

<div class="resources-list">
  <div class="resource-item">
    <strong>Firmware Flasher:</strong> <a href="https://flasher.meshcore.co.uk">https://flasher.meshcore.co.uk</a>
  </div>
  <div class="resource-item">
    <strong>Mobile Applications:</strong> <a href="https://meshcore.co.uk/apps.html">https://meshcore.co.uk/apps.html</a>
  </div>
  <div class="resource-item">
    <strong>Source Code:</strong> <a href="https://github.com/ripplebiz/MeshCore">https://github.com/ripplebiz/MeshCore</a>
  </div>
</div>