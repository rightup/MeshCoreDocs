# Over-the-Air Updates

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="ota-intro">
  <div class="ota-intro-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  </div>
  <div class="ota-intro-text">
    MeshCore supports Over-the-Air (OTA) firmware updates, allowing you to remotely update your devices without physical access.
  </div>
</div>

## OTA Requirements
<div class="req-text">To perform Over-the-Air updates, you will need:</div>

<div class="req-container">
  <div class="req-item">
    <div class="req-marker">•</div>
    <div class="req-text">
      A T-Deck running MeshCore firmware with remote administration features unlocked
    </div>
  </div>
  <div class="req-item">
    <div class="req-marker">OR</div>
    <div class="req-text">
      A BLE Companion client connected to a smartphone running the MeshCore app
    </div>
  </div>
  <div class="req-note">
    For repeaters and room servers, remote administration is possible via RF.
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## OTA Update Procedure

<div class="ota-notice">
  Currently, only OTA firmware updates for RAK4631 (nRF-based) devices and Heltec T114 are verified via the nRF smartphone app. Lilygo T-Echo currently does not work with this method.
</div>

<div class="procedure-container">
  <div class="procedure-step">
    <div class="step-number">1</div>
    <div class="step-content">
      Download the specific node ZIP file from the web flasher to your smartphone
    </div>
  </div>
  
  <div class="procedure-step">
    <div class="step-number">2</div>
    <div class="step-content">
      On the phone client, connect to the repeater as admin (default password: password) to send the start ota command to the repeater or room server to put the device in OTA DFU mode
      <div class="step-note">This can also be initiated from the USB serial console on the web flasher page or from a T-Deck</div>
    </div>
  </div>
  
  <div class="procedure-step">
    <div class="step-number">3</div>
    <div class="step-content">
      On your smartphone, use the nRF app (available on Android and iOS) and scan for Bluetooth devices
    </div>
  </div>
  
  <div class="procedure-step">
    <div class="step-number">4</div>
    <div class="step-content">
      Connect to the node you want to update
    </div>
  </div>
</div>

<div class="platform-tabs">
  <div class="platform-tab ios-tab">
    <div class="tab-header">iOS</div>
    <div class="tab-content">
      <ol class="platform-list">
        <li>Once successfully connected, a DFU icon appears in the top right corner</li>
        <li>Scroll down to modify the PRN(s) number:
          <ul>
            <li>For T114: change to 8</li>
            <li>For RAK: can be 10, but 8 also works</li>
          </ul>
        </li>
        <li>Click the DFU icon, select file type (choose ZIP), then select the ZIP file downloaded earlier</li>
        <li>The download process will begin and the device will reset when complete</li>
      </ol>
    </div>
  </div>
  
  <div class="platform-tab android-tab">
    <div class="tab-header">Android</div>
    <div class="tab-content">
      <ol class="platform-list">
        <li>In the nRF Connect app's hamburger menu, tap Settings, then nRF5 DFU Options</li>
        <li>Change Number of packets to 10 for RAK, 8 for Heltec T114</li>
        <li>Return to the main screen</li>
        <li>Tap SCANNER then SCAN to find the device, tap CONNECT</li>
        <li>Tap the DFU icon in the upper left corner</li>
        <li>Choose Distribution packet (ZIP) then OK</li>
        <li>Select the firmware ZIP file to begin the update</li>
      </ol>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Troubleshooting OTA


<div class="troubleshooting-content">If you encounter issues with OTA updates:</div>


<div class="troubleshooting-container">
  <div class="troubleshooting-item">
    <div class="troubleshooting-header">
      <div class="troubleshooting-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      </div>
      <div class="troubleshooting-title">Check Frequency Configuration</div>
    </div>
    <div class="troubleshooting-content">
      Verify that the frequency is correctly configured on all your devices. All devices on the same MeshCore network must use an identical frequency.
    </div>
  </div>
  
  <div class="troubleshooting-item">
    <div class="troubleshooting-header">
      <div class="troubleshooting-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
      <div class="troubleshooting-title">Admin Password</div>
    </div>
    <div class="troubleshooting-content">
      The default password to administer a repeater or room server is "password".
    </div>
  </div>
</div>