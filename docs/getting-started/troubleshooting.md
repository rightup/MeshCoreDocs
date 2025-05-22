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

