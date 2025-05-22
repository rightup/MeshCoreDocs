# Best Practices

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Version Compatibility

The MeshCore system supports a configurable number of hops between devices, balancing maximum range and network efficiency.

<div class="practice-card">
  <div class="card-header">
    <div class="card-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="L12,6 L12,12 L16,14"></path></svg>
    </div>
    <h3>Preventing Bricking</h3>
  </div>
  <p>For T-Deck devices, ensure you follow the DFU mode entry procedure correctly as described above.</p>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Recovery Procedures

If a device becomes unresponsive after an update:

<div class="recovery-grid">
  <div class="recovery-item">
    <div class="recovery-header">
      <div class="recovery-icon gps">📡</div>
      <h4>GPS Issues</h4>
    </div>
    <p>For T-Deck Plus devices with GPS issues, verify that the GPS baud rate is set to 38400.</p>
  </div>
  
  <div class="recovery-item">
    <div class="recovery-header">
      <div class="recovery-icon bluetooth">🔵</div>
      <h4>Bluetooth Connectivity</h4>
    </div>
    <p>If you experience Bluetooth connection issues with Heltec V3, be aware that they may frequently disconnect from smartphones.</p>
  </div>
</div>
