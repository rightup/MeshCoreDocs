# Companion Radio Firmware

<div class="section-divider">
  <div class="divider-line"></div>
</div>

> Companion radios are for connecting to the Android app or web app as a messenger client. These devices serve as the bridge between physical LoRa networks and user-friendly interfaces, enabling secure, off-grid text communication. The Companion firmware is designed to be flashed onto supported LoRa devices, allowing them to connect via Bluetooth or USB to smartphones, tablets, or computers.

There are two different companion radio firmware versions:


<div class="custom-container ble-container">
  <div class="firmware-type-heading">
    <div class="firmware-type-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10-5 5V2l5 5L7 17"/></svg>
    </div>
    <h3>BLE Companion (via Bluetooth)</h3>
  </div>
  
  <p>BLE Companion firmware runs on a supported LoRa device and connects to a smart device running the Android or iOS MeshCore client over BLE.</p>
  
  <div class="custom-info-block">
    <div class="custom-info-title">PLATFORM AVAILABILITY</div>
    <div class="custom-info-content">iOS MeshCore client is now available on the App Store.</div>
  </div>
  
  <div class="custom-tip-block">
    <div class="custom-tip-title">BLUETOOTH PAIRING</div>
    <div class="custom-tip-content">The default Bluetooth pairing code is: 123456</div>
  </div>
  
  <a href="https://meshcore.co.uk/apps.html" class="download-link">
    <span class="download-icon">⬇️</span>
    <span class="download-text">Download Mobile Clients</span>
  </a>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>


<div class="custom-container usb-container">
  <div class="firmware-type-heading">
    <div class="firmware-type-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4"></path><path d="M6 12H2"></path><path d="M16 12h-4"></path><path d="M12 2v20"></path></svg>
    </div>
    <h3>USB Serial Companion</h3>
  </div>
  
  <p>USB Serial Companion firmware runs on a supported LoRa device and connects to a smart device or a computer over USB Serial running the MeshCore web client.</p>
  
  <div class="custom-warning-block">
    <div class="custom-warning-title">NOTE</div>
    <div class="custom-warning-content">Only the Companion Radio Firmwares support Bluetooth connectivity. Repeater and Room Server firmwares must be configured over USB Serial.</div>
  </div>
  
  <h3 class="web-clients-title">Available Web Clients</h3>
  
  <div class="clients-container">
    <a href="https://meshcore.liamcottle.net/#/" class="client-link">
      <div class="client-icon">🌐</div>
      <div class="client-name">Liam Cottle's Client</div>
    </a>
    <a href="https://client.meshcore.co.uk/tabs/devices" class="client-link">
      <div class="client-icon">🌐</div>
      <div class="client-name">MeshCore UK Client</div>
    </a>
  </div>
  
  <div class="custom-info-block">
    <div class="custom-info-title">DEVELOPER INFO</div>
    <div class="custom-info-content">The web client is a simple, mobile friendly, web based MeshCore client for the Companion Radio Firmware.</div>
  </div>

</div>

<div class="section-divider">
  <div class="divider-line"></div>
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

/* Base styles */
.custom-container {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #1a1a1a;
  border: 1px solid #333;
}

.ble-container, .usb-container {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.firmware-type-heading {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.firmware-type-icon {
  margin-right: 1rem;
  padding: 0.75rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3884ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(56, 132, 255, 0.3);
}

.firmware-type-heading h3 {
  margin: 0;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
}

.custom-container p {
  margin-top: 0;
  color: #eee;
  font-weight: 500;
  line-height: 1.6;
  font-size: 1.05rem;
}

/* Web clients section */
.web-clients-title {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
}

/* Client links */
.clients-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.5rem;
}

.client-link {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #242424;
  border-radius: 6px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #333;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.client-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  background-color: #2a2a2a;
}

.client-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
}

.client-name {
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
}

/* Download link */
.download-link {
  display: inline-flex;
  align-items: center;
  background-color: #3884ff;
  color: white !important;
  padding: 0.85rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: background-color 0.2s;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(56, 132, 255, 0.3);
}

.download-link:hover {
  background-color: #2a6ed6;
}

.download-icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.download-text {
  color: white !important;
}

/* Custom blocks - direct HTML implementation */
.custom-info-block, .custom-tip-block, .custom-warning-block, .custom-danger-block {
  margin: 1.5rem 0;
  border-radius: 8px;
  padding: 15px 20px;
  background-color: #242424;
  border-left: 4px solid;
}

.custom-info-title, .custom-tip-title, .custom-warning-title, .custom-danger-title {
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.custom-info-content, .custom-tip-content, .custom-warning-content, .custom-danger-content {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
}

.custom-info-block {
  border-color: #3884ff;
}

.custom-info-title {
  color: #3884ff;
}

.custom-tip-block {
  border-color: #3eaf7c;
}

.custom-tip-title {
  color: #3eaf7c;
}

.custom-warning-block {
  border-color: #e7c000;
}

.custom-warning-title {
  color: #e7c000;
}

.custom-danger-block {
  border-color: #ff5252;
}

.custom-danger-title {
  color: #ff5252;
}

/* Blockquote style */
blockquote {
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  border-left: 4px solid #3884ff;
  background-color: #242424;
  border-radius: 0 8px 8px 0;
  color: #eee;
  font-size: 1.05rem;
  line-height: 1.6;
}

blockquote p {
  margin: 0;
}
</style>