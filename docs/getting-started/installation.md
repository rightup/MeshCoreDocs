# Installation

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Essential Resources

Everything you need for MeshCore is available here:

- **Main Website**: [https://meshcore.co.uk](https://meshcore.co.uk)
- **Firmware Flasher**: [https://flasher.meshcore.co.uk](https://flasher.meshcore.co.uk)
- **Phone Client Apps**: [https://meshcore.co.uk/apps.html](https://meshcore.co.uk/apps.html)
- **MeshCore Firmware on GitHub**: [https://github.com/ripplebiz/MeshCore](https://github.com/ripplebiz/MeshCore)

> **New to MeshCore?** Andy Kirby has a helpful [intro video on YouTube](https://www.youtube.com/watch?v=t1qne8uJBAc) — highly recommended for beginners!

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Hardware Prerequisites

To use MeshCore, you need LoRa-compatible devices. MeshCore supports various boards such as Heltec V3, RAK4631, Xiao S3 WIO, and others. These devices can function as clients, repeaters, or room servers according to your needs.

### Supported Frequencies

MeshCore operates on the 868MHz and 915MHz LoRa frequency bands, depending on your region. Be sure to configure the appropriate frequency for your location.

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Number of Devices Needed

You can start using MeshCore with just one compatible device:

### With One Device

Flash the BLE Companion firmware and use your device as a client. You can connect to the device using the Android client via Bluetooth (iOS client will be available later). This allows you to communicate with other MeshCore users near you.

### With Two Devices

There are two common setup scenarios:

1. **If there are few MeshCore users nearby**: Flash both devices with BLE Companion firmware to communicate with your nearby friends and family.

2. **If there are other MeshCore users nearby**: Flash one device with BLE Companion firmware, and flash the other device with repeater firmware. Place the repeater in an elevated position to extend your MeshCore network's reach.

### With More Devices

With additional devices, you can set up room servers to enhance your network's capabilities for persistent messaging and off-grid communication.

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## Flashing the Firmware

To install MeshCore on your device:

1. Visit the official [MeshCore Flasher tool](https://flasher.meshcore.co.uk)
2. Select your device model from the dropdown
3. Choose the appropriate firmware type (Companion, Repeater, or Room Server)
4. Connect your device via USB
5. Click "Flash Firmware" and wait for the process to complete

<div class="section-divider-small">
  <div class="divider-line-small"></div>
</div>

## Initial Setup

After flashing the firmware, you need to configure the frequency for your region:

### For Repeaters and Room Servers

1. Connect the device to your computer via USB
2. Access the web flasher's console function
3. Set the frequency with the command:

```bash
password {new-password}
```

Replace `{frequency}` with the appropriate value for your region (e.g., `868000000` for Europe or `915000000` for US/Australia).

This step is essential to enable remote administration of the repeater or room server via RF.

<style>
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}

.section-divider-small {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.divider-line {
  height: 2px;
  background: linear-gradient(90deg, rgba(30, 59, 112, 0.1), rgba(30, 59, 112, 0.8) 50%, rgba(30, 59, 112, 0.1));
  flex-grow: 1;
}

.divider-line-small {
  height: 1px;
  background: linear-gradient(90deg, rgba(30, 59, 112, 0), rgba(30, 59, 112, 0.4) 50%, rgba(30, 59, 112, 0));
  width: 50%;
  margin: 0 auto;
}
</style>