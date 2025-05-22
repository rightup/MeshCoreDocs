---
title: MeshCore Configuration
description: Complete guide to setting up and configuring MeshCore devices
---

# Configuration <Badge type="tip" text="v1.5+" />

<div class="custom-block important">
  <p>This guide walks you through the process of setting up and configuring your MeshCore devices for optimal performance.</p>
</div>

<div class="grid-container">
  <div class="grid-item">
    <h3>🔧 Basic Setup</h3>
    <p>Essential commands and configurations for all devices</p>
  </div>
  <div class="grid-item">
    <h3>📡 Network Config</h3>
    <p>Optimizing your mesh network topology</p>
  </div>
  <div class="grid-item">
    <h3>🔒 Security</h3>
    <p>Password management and access control</p>
  </div>
  <div class="grid-item">
    <h3>🗺️ Maps & Location</h3>
    <p>Setting up navigation features</p>
  </div>
</div>

---

## Configuring Repeaters and Room Servers

After flashing the latest firmware onto your device, keep the device connected to your computer via USB serial, use the console feature on the web flasher and set the frequency for your region or country:

```bash
set freq {frequency}
```

::: warning IMPORTANT
This step is essential so your client can remote administer the repeater or room server over RF.
:::

For a complete list of available commands, check the [repeater and room server CLI reference](https://github.com/ripplebiz/MeshCore/wiki/Repeater-&-Room-Server-CLI-Reference).

## Configuring Repeater Mode on a Room Server

A room server can also take on the repeater role. To enable the repeater role on a room server, use this command:

```bash
set repeat {on|off}
```

This configuration allows your room server to relay messages while retaining its message storage and distribution functionalities.

## Repeater Location

<div class="custom-block tip">
  <p><strong>Best Practice:</strong> Place the repeater high above ground to extend your MeshCore network's reach.</p>
</div>

## Remote Administration

Repeaters and room servers can be administered remotely in two ways:

<div class="methods-container">
  <div class="method">
    <h3>T-Deck Method</h3>
    <p>Using a T-Deck running MeshCore firmware with remote administration features unlocked</p>
  </div>
  <div class="method">
    <h3>Smartphone Method</h3>
    <p>From a BLE Companion client connected to a smartphone running the MeshCore app</p>
  </div>
</div>

This remote administration is done via RF (radio frequency), allowing you to manage your devices without a physical connection.

## Administration Passwords

### Repeater and Room Server Admin Password

The default admin password to a repeater and room server is `password`. Use the following command to change the admin password:

```bash
password {new-password}
```

### Room Server Guest Password

The default guest password to a room server is `hello`. Use the following command to change the guest password:

```bash
set guest.password {guest-password}
```

::: danger SECURITY NOTE
Always change default passwords to improve the security of your MeshCore network.
:::

## Connecting to Room Servers

When a client logs into a room server, the client will receive the previously 16 unseen messages. This feature allows roaming users to come back later and retrieve message history, similar to an email server.

## Setting Up Maps on T-Deck

<div class="dark-steps-container">
  <div class="dark-step">
    <div class="dark-step-number">1</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Prepare SD Card</div>
      <div class="dark-step-desc">Format an SD card to FAT32 (maximum size 32 GB)</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">2</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Create Directory</div>
      <div class="dark-step-desc">Create a <code>tiles</code> folder at the root of the SD card</div>
    </div>
  </div>
  <div class="dark-step">
    <div class="dark-step-number">3</div>
    <div class="dark-step-content">
      <div class="dark-step-title">Add Map Tiles</div>
      <div class="dark-step-desc">Add map tiles to this folder using one of the methods below</div>
    </div>
  </div>
</div>

### Map Tile Options

| Source | Description | Link |
|--------|-------------|------|
| Europe Maps | Pre-packaged tiles for European regions | [BuyMeACoffee](https://buymeacoffee.com/ripplebiz/e/342543) |
| US Maps | Pre-packaged tiles for United States | [BuyMeACoffee](https://buymeacoffee.com/ripplebiz/e/342542) |
| UK Maps | Custom UK region map tiles | [Discord Channel](https://discord.com/channels/826570251612323860/1330643963501351004/1331346597367386224) |
| Custom | Generate your own map tiles | [MTD Python Script](https://github.com/fistulareffigy/MTD-Script) |
| Enhanced Custom | Improved version with parallel downloads | [Discord Link](https://discord.com/channels/826570251612323860/1330643963501351004/1338775811548905572) |

Once you have the tiles downloaded, place the `tiles` folder in the root directory of the SD card.

## Unlocking Advanced Features

The MeshCore firmware on T-Deck is free to use. Some features are unlocked via a one-time purchase:

<div class="feature-unlock">
  <div class="feature-image">🔑</div>
  <div class="feature-details">
    <h3>Premium Features</h3>
    <p>Unlock codes can be purchased from <a href="https://buymeacoffee.com/ripplebiz/e/249834">BuyMeACoffee</a></p>
    <ul>
      <li>Higher map zoom levels</li>
      <li>Server management functions</li>
    </ul>
  </div>
</div>
