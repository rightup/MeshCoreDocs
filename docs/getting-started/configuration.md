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

<style>
.custom-block.important {
  border-left: 4px solid #3eaf7c;
  background-color: rgba(62, 175, 124, 0.1);
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.custom-block.important p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 2rem 0;
}

.grid-item {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.grid-item h3 {
  margin-top: 0;
  color: #3eaf7c;
  font-size: 1.2rem;
  font-weight: bold;
}

.grid-item p {
  margin-bottom: 0;
  color: #222;
  font-weight: 500;
}

.methods-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 1.5rem 0;
}

.method {
  background-color: #f5f7f9;
  border-radius: 8px;
  padding: 16px;
  border-left: 3px solid #3eaf7c;
}

.method h3 {
  margin-top: 0;
  color: #3eaf7c;
  font-size: 1.1rem;
  font-weight: bold;
}

.method p {
  margin-bottom: 0;
  font-size: 0.95rem;
  color: #222;
  font-weight: 500;
}

.steps-container {
  margin: 2rem 0;
}

.step {
  display: flex;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.step-number {
  background-color: #3eaf7c;
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

.dark-steps-container {
  margin: 2rem 0;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 20px;
  color: #fff;
}

.dark-step {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.dark-step:last-child {
  margin-bottom: 0;
}

.dark-step-number {
  background-color: #3eaf7c;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.dark-step-content {
  flex: 1;
}

.dark-step-title {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.dark-step-desc {
  color: #ffffff;
  font-size: 0.95rem;
}

.dark-step-desc code {
  background-color: #333;
  color: #3eaf7c;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.9rem;
}

.step-content p {
  margin: 0;
}

.feature-unlock {
  display: flex;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  align-items: center;
}

.feature-image {
  font-size: 2.5rem;
  margin-right: 20px;
}

.feature-details {
  flex: 1;
}

.feature-details h3 {
  margin-top: 0;
  color: #3eaf7c;
  font-weight: bold;
}

.feature-details ul {
  margin-bottom: 0;
  padding-left: 20px;
}

.feature-details p, .feature-details li {
  color: #222;
  font-weight: 500;
}

.step-content p {
  color: #222;
  font-weight: 500;
}
</style>