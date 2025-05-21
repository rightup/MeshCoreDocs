# Troubleshooting

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Network Connectivity

The strength of a MeshCore network relies on its stability and range. When you notice that a device (client, repeater, or room server) is marked as having been seen "several days ago," this typically indicates a connectivity issue. To resolve this problem, reposition your devices to improve range or add a strategically placed repeater between distant points.

For devices that don't appear at all in your discovery list (on T-Deck) or contacts list (on smartphone clients), check the frequency configuration. All devices on the same MeshCore network must use an identical frequency, configured with the command:

```bash
set freq {frequency}
```

::: warning IMPORTANT
Ensure all your MeshCore devices are configured to use the same frequency to establish proper communication within your network.
:::

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Bluetooth Connections

Connecting to a repeater via Bluetooth (BLE) requires installing the BLE Companion firmware on your repeater. The MeshCore application on smartphones should automatically detect available devices within range. Unlike many Bluetooth systems, MeshCore generally doesn't require a specific pairing code to establish the connection.

::: tip HELTEC V3 ISSUE
Heltec V3 users may experience frequent smartphone disconnections. This known issue can be mitigated by maintaining a well-charged battery and keeping the smartphone nearby during use. If problems persist, consider using the USB Serial Companion connection as a more stable alternative.
:::

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## GPS Troubleshooting on T-Deck

### T-Deck Plus

Satellite lock issues on T-Deck Plus are often related to baud rate configuration. Verify that it is set to **38400**. A known hardware issue concerns the orientation of the GPS module - some units have the module installed upside down (antenna facing the board).

To verify communication with the GPS module:
1. Navigate to the `GPS Info` screen
2. Check if the `Sentences:` counter increases
3. If the counter is not incrementing, the baud rate may be incorrect

::: info
GPS on the T-Deck is always enabled. You can skip the GPS clock sync screen—GPS lock will still be attempted in the background.
:::

### Original T-Deck (non-Plus)

The original T-Deck does not have a built-in GPS module. If you've added an external GPS, consult its documentation for the appropriate baud rate, or try common values:

```bash
# Common GPS baud rates to try
9600
19200
38400
115200
```

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Firmware Update

Updating the firmware requires putting the device in DFU (Device Firmware Update) mode. For T-Deck devices:

<div class="dark-steps-container">
  <div class="dark-step">
    <div class="dark-step-number">1</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Turn off the device</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">2</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Connect USB cable to device</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">3</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Hold down trackball (keep holding)</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">4</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Turn on device</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">5</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Wait for USB connection sound</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">6</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Release trackball</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">7</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Device is now in DFU mode</div>
    </div>
  </div>
</div>

Once in DFU mode, you can flash firmware using the MeshCore flasher tool:  
[https://flasher.meshcore.co.uk](https://flasher.meshcore.co.uk)

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Performance Optimization

To maximize the reliability of your MeshCore network, place repeaters at height to significantly extend range. Room servers can also be configured to function as repeaters with the command:

```bash
set repeat {on|off}
```

This dual functionality enhances network robustness while maintaining message storage and distribution capabilities.

::: tip BEST PRACTICE
For optimal range and coverage, position repeaters as high as possible and with clear line of sight to your other MeshCore devices.
:::

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

/* Styling for code blocks */
div[class*="language-"] {
  position: relative;
  margin: 1rem 0;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
}

[class*="language-"] code {
  color: #fff;
  padding: 1.25rem 1.5rem;
  display: block;
  overflow-x: auto;
  font-family: "Fira Code", "JetBrains Mono", Consolas, Monaco, monospace;
  font-size: 0.92rem;
  line-height: 1.5;
}

/* Syntax highlighting */
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
  color: #f39c12;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
  color: #3eaf7c;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #e06c75;
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #61afef;
}

.token.function {
  color: #c678dd;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.language-bash .token.function {
  color: #7ec699;
}

/* Custom blocks */
.custom-block {
  margin: 1.5rem 0;
  border-radius: 8px;
  padding: 0.1rem 1.5rem;
}

.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.custom-block p:last-child {
  margin-bottom: 0.75rem;
}

.custom-block.warning {
  background-color: rgba(255, 229, 100, 0.12);
  border-left: 4px solid #e7c000;
  color: #222;
}

.custom-block.warning .custom-block-title {
  color: #e7c000;
}

.dark .custom-block.warning {
  background-color: rgba(255, 229, 100, 0.05);
  color: #fff;
}

.custom-block.danger {
  background-color: rgba(255, 50, 50, 0.12);
  border-left: 4px solid #ff5252;
  color: #222;
}

.custom-block.danger .custom-block-title {
  color: #ff5252;
}

.dark .custom-block.danger {
  background-color: rgba(255, 50, 50, 0.05);
  color: #fff;
}

.custom-block.tip {
  background-color: rgba(62, 175, 124, 0.12);
  border-left: 4px solid #3eaf7c;
  color: #222;
}

.custom-block.tip .custom-block-title {
  color: #3eaf7c;
}

.dark .custom-block.tip {
  background-color: rgba(62, 175, 124, 0.05);
  color: #fff;
}

.custom-block.info {
  background-color: rgba(56, 132, 255, 0.12);
  border-left: 4px solid #3884ff;
  color: #222;
}

.custom-block.info .custom-block-title {
  color: #3884ff;
}

.dark .custom-block.info {
  background-color: rgba(56, 132, 255, 0.05);
  color: #fff;
}

/* Steps container */
.steps-container {
  margin: 1.5rem 0;
}

.step {
  display: flex;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.step:last-child {
  margin-bottom: 0;
}

.step-number {
  background-color: #1e3b70;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content p {
  margin: 0;
  color: #222;
  font-weight: 500;
}

/* Dark steps container */
.dark-steps-container {
  margin: 2rem 0;
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dark-step {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
}

.dark-step:last-child {
  margin-bottom: 0;
}

.dark-step-number {
  background-color: #3884ff;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(56, 132, 255, 0.3);
}

.dark-step-content {
  flex: 1;
}

.dark-step-title {
  font-size: 1.05rem;
  color: #ffffff;
  font-weight: 500;
}
</style>