# Server Administration

<div class="section-divider">
  <div class="divider-line"></div>
</div>

> This section covers the configuration and management of repeaters and room servers in MeshCore.

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Repeater and Room Server Configuration

### How to configure a repeater or room server?

<div class="config-container">
  <div class="config-heading">
    <div class="config-icon">⚙️</div>
    <h3>Initial Configuration Required</h3>
  </div>
  
  <p>When MeshCore is first flashed onto a LoRa device, it is necessary to set the server device frequency so that it uses the legal frequency in your country or region.</p>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Administration Methods

<div class="methods-grid">
  <div class="method-card">
    <div class="method-icon">🌐</div>
    <h3>Web Configuration Interface</h3>
    <p>Access <strong>config.meshcore.dev</strong> to connect to the LoRa device via USB serial port and configure server name, frequency, location, passwords and other settings.</p>
    <div class="repo-link">
    <a href="https://config.meshcore.dev" target="_blank" class="github-link">
      <span class="link-text">Open Configuration Tool</span>
    </a>
  </div>

  
  </div>
  
  <div class="method-card">
    <div class="method-icon">💻</div>
    <h3>MeshCore Flasher Console</h3>
    <p>Connect the server device using a USB cable to a computer running Chrome. Access <strong>flasher.meshcore.co.uk</strong> and use the console function to connect to the device.</p>
    <div class="code-example">
      <code>set freq {frequency}</code>
    </div>
     <div class="repo-link">
    <a href="https://flasher.meshcore.co.uk/" target="_blank" class="github-link">
      <span class="link-text">https://flasher.meshcore.co.uk/</span>
    </a>
  </div>


  </div>
  
  <div class="method-card">
    <div class="method-icon">📱</div>
    <h3>Remote Administration via Smartphone</h3>
    <p>Use a MeshCore smartphone client to administer servers remotely via LoRa communication.</p>
  </div>
  
  <div class="method-card">
    <div class="method-icon">🔓</div>
    <h3>Administration via Unlocked T-Deck</h3>
    <p>A T-Deck running unlocked/registered MeshCore firmware allows remote server administration. Registration supports MeshCore development.</p>
      <div class="repo-link">
    <a href="https://buymeacoffee.com/ripplebiz/e/249834" target="_blank" class="github-link">
      <span class="link-text">Register T-Deck</span>
    </a>
  </div>


    
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Configuration Interface

<div class="interface-container">
  <div class="interface-info">
    <h3>Repeater / Room Server USB Setup</h3>
    <p>The web interfaces allow you to configure all essential parameters through intuitive graphical interfaces. The configuration tool provides real-time access to device settings and radio parameters.</p>
  </div>
  
  <div class="interface-image">
    <img src="./../../images/admin.png" alt="MeshCore Configuration Interface" style="width: 100%; height: 1000px; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); border-radius: 8px; border: 1px solid #333; display: flex; align-items: center; justify-content: center; color: #888; font-size: 14px;" />
 
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Configuration Parameters

<div class="params-container">
  <div class="param-section">
    <h3>Device Settings</h3>
    <ul>
      <li>Device name</li>
      <li>Latitude and longitude</li>
      <li>Guest password</li>
      <li>New administrator password</li>
    </ul>
  </div>
  
  <div class="param-section">
    <h3>Radio Settings</h3>
    <ul>
      <li>Regional preset (e.g., USA)</li>
      <li>Frequency (MHz): e.g., 910.525</li>
      <li>Bandwidth (kHz): e.g., 250</li>
      <li>Spreading factor: e.g., 10</li>
      <li>TX Power (dBm): e.g., 22</li>
      <li>Coding rate: e.g., 5</li>
      <li>Airtime factor: e.g., 1</li>
    </ul>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Room Server Specific Configuration

<div class="room-server-container">
  <div class="room-server-heading">
    <h3>Room Server Settings</h3>
  </div>
  
  <div class="room-server-content">
    <div class="custom-info-block">
      <div class="custom-info-title">MESSAGE RETRIEVAL</div>
      <div class="custom-info-content">When a client connects to a room server, they will receive the last 16 unseen messages.</div>
    </div>
    <div class="custom-tip-block">
      <div class="custom-tip-title">COMBINED ROLE</div>
      <div class="custom-tip-content">A room server can also take on the repeater role. Use the command: set repeat {on|off}</div>
    </div>
    <div class="room-server-params">
      <h4>Available Parameters:</h4>
      <ul>
        <li><strong>Repeat:</strong> Enable repeater role</li>
        <li><strong>Read only:</strong> Read-only mode</li>
      </ul>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Advanced Administration

<div class="advanced-grid">
  <div class="advanced-card">
    <h3>Remote Firmware Updates</h3>
    <p>For RAK4631 repeaters, remote firmware updates are possible. This feature allows maintaining devices up to date without physical access.</p>
  </div>
  
  <div class="advanced-card">
    <h3>Location Management</h3>
    <p>Setting location for repeaters is not mandatory, but it can be useful for mapping and network organization.</p>
  </div>
  
  <div class="advanced-card">
    <h3>Bluetooth Access</h3>
    <p>Repeaters can be accessed via BLE (Bluetooth Low Energy) for configuration and remote administration from compatible clients. Default pairing code: 123456</p>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## CLI Reference

<div class="cli-container">
  <div class="cli-heading">
    <div class="cli-icon">⌨️</div>
    <h3>Command Line Reference</h3>
  </div>
  
  <p>For a complete CLI command reference for repeaters and room servers, visit:</p>
  <a href="https://github.com/ripplebiz/MeshCore/wiki/Repeater-&-Room-Server-CLI-Reference" class="cli-link">
    <span class="cli-link-icon">📚</span>
    <span>Repeater & Room Server CLI Reference</span>
  </a>
</div>

