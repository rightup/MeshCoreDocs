# Manual Updates

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## USB/Serial Updates

To update your MeshCore device firmware via USB, follow these steps:

<div class="update-sequence">
  <h3>Put the device in DFU (Device Firmware Update) mode:</h3>
  <div class="step-container">
    <div class="step">
      <div class="step-number">1</div>
      <div class="step-text">Turn off the device</div>
    </div>
    <div class="step">
      <div class="step-number">2</div>
      <div class="step-text">Connect the USB cable</div>
    </div>
    <div class="step">
      <div class="step-number">3</div>
      <div class="step-text">Hold down the trackball</div>
    </div>
    <div class="step">
      <div class="step-number">4</div>
      <div class="step-text">Power on the device</div>
    </div>
    <div class="step">
      <div class="step-number">5</div>
      <div class="step-text">Wait for the USB connection sound</div>
    </div>
    <div class="step">
      <div class="step-number">6</div>
      <div class="step-text">Release the trackball</div>
    </div>
    <div class="step">
      <div class="step-number">7</div>
      <div class="step-text">The device is now in DFU mode</div>
    </div>
  </div>
</div>

<div class="instruction-card">
  <div class="instruction-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M12 7h.01"/><path d="M17 7h.01"/><path d="M7 12h.01"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 17h.01"/><path d="M12 17h.01"/><path d="M17 17h.01"/></svg>
    <span>Flashing the Firmware</span>
  </div>
  <div class="instruction-content">
    <p>Use the MeshCore flasher tool available at <a href="https://flasher.meshcore.co.uk" class="link">https://flasher.meshcore.co.uk</a> to install the firmware.</p>
  </div>
</div>

<div class="console-example">
  <div class="console-header">
    <div class="console-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="console-title">Setting Up Regional Frequency</div>
  </div>
  <div class="console-body">
    <p>After flashing the firmware, set the frequency for your region or country using the console:</p>
    <div class="code-block">set freq {frequency}</div>
    <p class="console-note">This step is essential so your client can remote administer the repeater or room server over RF.</p>
  </div>
</div>

<div class="note-box">
  <div class="note-icon">ℹ️</div>
  <div class="note-content">
    <h3>Open Source Information</h3>
    <p>MeshCore is free and open source under the MIT license, available on GitHub.</p>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Backup Procedures

<div class="card-container">
  <div class="backup-card">
    <div class="card-marker"></div>
    <div class="card-content">
      <h3>SD Card Preparation</h3>
      <p>For T-Deck devices using SD cards for maps, format the SD card to FAT32 (maximum size 32 GB).</p>
    </div>
  </div>
</div>