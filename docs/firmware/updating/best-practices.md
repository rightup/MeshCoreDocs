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

/* Practice Card */
.practice-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid #333;
}

.card-header {
  background: linear-gradient(135deg, #304878 0%, #3d5a8f 100%);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}

.card-icon {
  margin-right: 1rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-header h3 {
  margin: 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.practice-card p {
  padding: 1.5rem;
  margin: 0;
  color: #eee;
  line-height: 1.6;
  font-size: 1rem;
}

/* Recovery Grid */
.recovery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.recovery-item {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  border: 1px solid #333;
  transition: transform 0.3s ease;
}

.recovery-item:hover {
  transform: translateY(-3px);
}

.recovery-header {
  background-color: #242424;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.recovery-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.recovery-icon.gps {
  background-color: #2d5a27;
  color: #4caf50;
}

.recovery-icon.bluetooth {
  background-color: #1a237e;
  color: #3f51b5;
}

.recovery-header h4 {
  margin: 0;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
}

.recovery-item p {
  padding: 1rem;
  margin: 0;
  color: #eee;
  line-height: 1.5;
  font-size: 0.95rem;
}
</style>