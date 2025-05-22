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