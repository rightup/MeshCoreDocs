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

/* OTA Introduction */
.ota-intro {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.ota-intro-icon {
  background-color: #304878;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.ota-intro-icon svg {
  color: white;
  width: 28px;
  height: 28px;
}

.ota-intro-text {
  color: #eee;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Requirements */
.req-container {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
}

.req-item {
  display: flex;
  margin-bottom: 1rem;
}

.req-marker {
  width: 30px;
  color: #3884ff;
  font-weight: 700;
  flex-shrink: 0;
}

.req-text {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
}

.req-note {
  margin-top: 0.5rem;
  padding: 0.75rem;
  background-color: #242424;
  border-left: 3px solid #3884ff;
  color: #eee;
  font-size: 0.95rem;
  line-height: 1.5;
  border-radius: 0 4px 4px 0;
}

/* OTA Notice */
.ota-notice {
  background-color: #242424;
  border-left: 4px solid #e7c000;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0 4px 4px 0;
}

/* Procedure Steps */
.procedure-container {
  margin: 1.5rem 0;
}

.procedure-step {
  display: flex;
  margin-bottom: 1.25rem;
  align-items: flex-start;
}

.step-number {
  background-color: #3884ff;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-content {
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
  padding-top: 0.2rem;
  flex: 1;
}

.step-note {
  font-size: 0.9rem;
  color: #aaa;
  font-style: italic;
  margin-top: 0.5rem;
}

/* Platform Tabs */
.platform-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.platform-tab {
  flex: 1;
  min-width: 280px;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
}

.tab-header {
  background-color: #304878;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  text-align: center;
}

.tab-content {
  padding: 1.25rem;
}

.platform-list {
  margin: 0;
  padding-left: 1.5rem;
  color: #eee;
}

.platform-list li {
  margin-bottom: 0.75rem;
}

.platform-list li:last-child {
  margin-bottom: 0;
}

.platform-list ul {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
}

.platform-list ul li {
  margin-bottom: 0.25rem;
}

/* Troubleshooting */
.troubleshooting-container {
  margin: 1.5rem 0;
}

.troubleshooting-item {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid #333;
}

.troubleshooting-header {
  background-color: #242424;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.troubleshooting-icon {
  margin-right: 0.75rem;
  color: #3884ff;
}

.troubleshooting-title {
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
}

.troubleshooting-content {
  padding: 1rem;
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
}
</style>