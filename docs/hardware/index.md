# Hardware

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="hardware-intro">
  <div class="intro-section standalone">
    <div class="intro-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    </div>
    <div class="intro-content">
      <h3>Standalone Solution</h3>
      <p>To use MeshCore without using a phone as the client interface, you can run MeshCore on a <strong>T-Deck</strong> or <strong>T-Deck Plus</strong>. It is a complete off-grid secure communication solution.</p>
    </div>
  </div>
  
  <div class="intro-section compatible">
    <div class="intro-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m15.14 4.14 4.24 4.24m-11.5 11.5 4.24 4.24"></path><path d="m8.86 4.14-4.24 4.24m11.5 11.5-4.24 4.24"></path></svg>
    </div>
    <div class="intro-content">
      <h3>Compatible Devices</h3>
      <p>MeshCore is also available on a variety of <strong>868MHz and 915MHz LoRa devices</strong>, including RAK4631, Heltec V3, Xiao S3 WIO, and more. Additional devices will be supported in future updates.</p>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## 📋 Supported Boards

<div class="boards-table-container">
  <table class="boards-table">
    <thead>
      <tr>
        <th>Device Name</th>
        <th>Chipset/Module</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Device Name"><a href="/hardware/heltec/v3/">Heltec V3 LoRa</a></td>
        <td data-label="Chipset/Module"><span class="chipset">SX1262</span></td>
        <td data-label="Notes">Compact and widely used</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/rak/rak4631/">RAK4631 (19003, 19007, 19026)</a></td>
        <td data-label="Chipset/Module"><span class="chipset">SX1262</span></td>
        <td data-label="Notes">Nordic nRF52840 based, very capable</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/xiao/xiaos3-wio/">Xiao S3 WIO (SX1262 combo)</a></td>
        <td data-label="Chipset/Module"><span class="chipset">ESP32-S3 + SX1262</span></td>
        <td data-label="Notes">Combo board with small form factor</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/xiao/xiaoc3-sx126x/">Xiao C3 + SX126x module</a></td>
        <td data-label="Chipset/Module"><span class="chipset">ESP32-C3 + SX126x</span></td>
        <td data-label="Notes">Requires external LoRa module</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/lilygo/t3s3/">LilyGo T3S3</a></td>
        <td data-label="Chipset/Module"><span class="chipset">ESP32-S3 + SX1276</span></td>
        <td data-label="Notes">Great display integration</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/heltec/t114/">Heltec T114</a></td>
        <td data-label="Chipset/Module"><span class="chipset">ESP32-C3 + SX1262</span></td>
        <td data-label="Notes">Newer board, good compact design</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/seeed/station-g2/">Station G2</a></td>
        <td data-label="Chipset/Module"><span class="chipset">Seeed LoRa-E5</span></td>
        <td data-label="Notes">Industrial-grade gateway</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/seeed/sensecap-t1000e/">SenseCAP T1000-E</a></td>
        <td data-label="Chipset/Module"><span class="chipset">LoRa-E5</span></td>
        <td data-label="Notes">Rugged outdoor device</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/heltec/v2/">Heltec V2</a></td>
        <td data-label="Chipset/Module"><span class="chipset">SX1276</span></td>
        <td data-label="Notes">Older board, still usable</td>
      </tr>
      <tr>
        <td data-label="Device Name"><a href="/hardware/lilygo/tlora32-v1-6/">LilyGo TLora32 v1.6</a></td>
        <td data-label="Chipset/Module"><span class="chipset">SX1276</span></td>
        <td data-label="Notes">Widely available budget board</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="compatibility-note">
  <div class="note-icon">💡</div>
  <div class="note-text">
    Check the <a href="/firmware">firmware</a> section to verify compatibility for each board.
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="contribution-section">
  <div class="contribution-content">
    <div class="contribution-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="6" x2="12" y2="12"></line><line x1="16.24" y1="16.24" x2="12" y2="12"></line></svg>
    </div>
    <div class="contribution-text">
      <h3>Want to see a new device supported?</h3>
      <p><a href="https://github.com/ripplebiz/MeshCore" target="_blank">Open a GitHub issue</a> or contribute via pull request!</p>
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

/* Hardware Introduction */
.hardware-intro {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.intro-section {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  align-items: flex-start;
}

.intro-icon {
  background-color: #3884ff;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.intro-icon svg {
  color: white;
  width: 24px;
  height: 24px;
}

.intro-content {
  flex: 1;
}

.intro-content h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
  font-weight: 600;
}

.intro-content p {
  color: #eee;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.intro-content strong {
  color: #fff;
}

/* Boards Table */
.boards-table-container {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin: 1.5rem 0;
}

.boards-table {
  width: 100%;
  border-collapse: collapse;
}

.boards-table thead th {
  background-color: #242424;
  color: #fff;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #333;
}

.boards-table tbody td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #333;
  color: #eee;
  font-size: 0.95rem;
}

.boards-table tbody tr:last-child td {
  border-bottom: none;
}

.boards-table tbody tr:hover {
  background-color: #242424;
}

.boards-table a {
  color: #5ba3f5;
  text-decoration: none;
  font-weight: 500;
}

.boards-table a:hover {
  color: #7bb8f7;
  text-decoration: underline;
}

.chipset {
  background-color: #304878;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

/* Compatibility Note */
.compatibility-note {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-left: 4px solid #3884ff;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.note-icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.note-text {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
}

.note-text a {
  color: #5ba3f5;
  text-decoration: none;
  font-weight: 500;
}

.note-text a:hover {
  color: #7bb8f7;
  text-decoration: underline;
}

/* Contribution Section */
.contribution-section {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin: 2rem 0;
}

.contribution-content {
  display: flex;
  align-items: center;
}

.contribution-icon {
  background-color: #28a745;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.contribution-icon svg {
  color: white;
  width: 24px;
  height: 24px;
}

.contribution-text {
  flex: 1;
}

.contribution-text h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
}

.contribution-text p {
  color: #eee;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.contribution-text a {
  color: #5ba3f5;
  text-decoration: none;
  font-weight: 500;
}

.contribution-text a:hover {
  color: #7bb8f7;
  text-decoration: underline;
}

/* Responsive Design - Desktop et Tablette */
@media (max-width: 1024px) {
  .hardware-intro {
    grid-template-columns: 1fr;
  }
}

/* Responsive Design - Mobile */
@media (max-width: 768px) {
  .boards-table-container {
    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
  }
  
  .boards-table thead {
    display: none;
  }
  
  .boards-table tbody {
    display: block;
  }
  
  .boards-table tbody tr {
    display: block;
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .boards-table tbody tr:hover {
    background-color: #222;
  }
  
  .boards-table tbody td {
    display: block;
    padding: 0.75rem 0;
    border: none;
    text-align: left;
    font-size: 0.9rem;
    position: relative;
  }
  
  .boards-table tbody td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #bbb;
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.85rem;
  }
  
  .boards-table tbody td:first-child {
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #333;
  }
  
  .boards-table tbody td:first-child::before {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .boards-table tbody td:first-child a {
    display: block;
    font-size: 1.05rem;
    font-weight: 600;
    color: #5ba3f5;
    line-height: 1.3;
  }
  
  .boards-table tbody td:nth-child(2) {
    margin-bottom: 0.75rem;
  }
  
  .chipset {
    display: inline-block;
    margin-top: 0.5rem;
  }
  
  .contribution-content {
    flex-direction: column;
    text-align: center;
  }
  
  .contribution-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}


@media (max-width: 480px) {
  .intro-section {
    flex-direction: column;
    text-align: center;
  }
  
  .intro-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .boards-table tbody td::before {
    font-size: 0.8rem;
  }
  
  .boards-table tbody td {
    font-size: 0.85rem;
    padding: 0.6rem 0;
  }
  
  .boards-table tbody td:first-child a {
    font-size: 1rem;
  }
  
  .chipset {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
  }
  
  .compatibility-note {
    flex-direction: column;
    text-align: center;
  }
  
  .note-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>