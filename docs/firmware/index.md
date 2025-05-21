# Firmware

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="firmware-intro">
  <div class="intro-content">
    MeshCore has four firmware types that are not available on other LoRa systems. Each type responds to specific needs in creating flexible and efficient mesh networks.
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

/* Firmware Introduction */
.firmware-intro {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid #333;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.intro-content {
  color: #eee;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Firmware Grid */
.firmware-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.firmware-card {
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #333;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

a {
  text-decoration: none;
}


.firmware-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  border-color: #3884ff;
}

.firmware-header {
  background: linear-gradient(135deg, #2a5298 0%, #304878 100%);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.firmware-header h3 {
  margin: 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.firmware-arrow {
  color: white;
  font-size: 1.5rem;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
}

.firmware-card:hover .firmware-arrow {
  opacity: 1;
  transform: translateX(5px);
}

.firmware-description {
  padding: 1.5rem;
  color: #eee;
  font-size: 1rem;
  line-height: 1.6;
}

/* Resources Grid */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.resource-link {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  border: 1px solid #333;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.resource-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

.resource-icon {
  font-size: 2rem;
  margin-right: 1rem;
  background: linear-gradient(135deg, #3884ff 0%, #2a6ed6 100%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.resource-text {
  flex: 1;
}

.resource-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.resource-description {
  color: #bbb;
  font-size: 0.95rem;
}

/* Configuration Container */
.config-container {
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.config-section {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.config-section:last-child {
  margin-bottom: 0;
}

.config-badge {
  background: linear-gradient(135deg, #3884ff 0%, #2a6ed6 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(56, 132, 255, 0.3);
}

.config-content {
  flex: 1;
}

.config-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.config-text {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
}

/* Resources Grid */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.resource-link {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  border: 1px solid #333;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.resource-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

.resource-icon {
  font-size: 2rem;
  margin-right: 1rem;
  background: linear-gradient(135deg, #3884ff 0%, #2a6ed6 100%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.resource-text {
  flex: 1;
}

.resource-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.resource-description {
  color: #bbb;
  font-size: 0.95rem;
}

.firmware-grid a {
  text-decoration: none;
  color: inherit;
}



</style>