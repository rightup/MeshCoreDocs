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

/* Update Sequence */
.update-sequence {
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid #333;
}

.update-sequence h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.step-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #304878;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.step-text {
  color: #eee;
  font-size: 1rem;
  line-height: 1.4;
}

/* Instruction Card */
.instruction-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #333;
}

.instruction-header {
  background-color: #2c2c2c;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.instruction-header svg {
  color: #3884ff;
}

.instruction-content {
  padding: 1rem 1.5rem;
}

.instruction-content p {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.link {
  color: #3884ff;
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  text-decoration: underline;
  color: #5497ff;
}

/* Console Example */
.console-example {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid #333;
}

.console-header {
  background-color: #2c2c2c;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.console-dots {
  display: flex;
  gap: 0.4rem;
  margin-right: 1rem;
}

.console-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #333;
}

.console-dots span:nth-child(1) {
  background-color: #ff5f57;
}

.console-dots span:nth-child(2) {
  background-color: #febc2e;
}

.console-dots span:nth-child(3) {
  background-color: #28c840;
}

.console-title {
  color: #aaa;
  font-size: 0.9rem;
}

.console-body {
  padding: 1rem 1.5rem;
}

.console-body p {
  color: #eee;
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
}

.code-block {
  background-color: #262626;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  color: #3eaf7c;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  overflow-x: auto;
}

.console-note {
  color: #ccc;
  font-size: 0.9rem !important;
  font-style: italic;
  margin-top: 0.75rem !important;
}

/* Note Box */
.note-box {
  display: flex;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1rem;
  margin: 2rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #333;
  align-items: flex-start;
  gap: 1rem;
}

.note-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.note-content {
  flex: 1;
}

.note-content h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.note-content p {
  color: #eee;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

/* Backup Card */
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.backup-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #333;
}

.card-marker {
  width: 8px;
  background-color: #3884ff;
  flex-shrink: 0;
}

.card-content {
  padding: 1.25rem;
  flex: 1;
}

.card-content h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.card-content p {
  color: #eee;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}
</style>