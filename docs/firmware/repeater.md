# Repeater Firmware

<div class="section-divider">
  <div class="divider-line"></div>
</div>

> The Repeater firmware intelligently extends the range of your MeshCore network. Unlike other LoRa mesh systems that indiscriminately retransmit all received packets, a MeshCore repeater only transmits packets intended for specific devices, thus optimizing bandwidth and battery life.

MeshCore supports a configurable number of hops between devices, balancing maximum range and network efficiency. This design contributes to the decentralized and "self-healing" nature of the network, capable of adapting to topology changes such as the movement or disappearance of mobile repeaters.

<div class="feature-panel">
  <div class="feature-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10 7 10-7"/><path d="M2 14l10-7 10 7"/></svg>
  </div>
  <div class="feature-content">
    <h3>Deployment & Administration</h3>
    <p>For optimal performance, repeaters should be positioned at height. Remote administration can be performed via a T-Deck with unlocked features or from a smartphone connected to a BLE Companion client.</p>
    <p>Remote administration is possible via RF, offering remarkable flexibility in difficult environments or during temporary deployments.</p>
    <div class="feature-note">
      Repeaters operate on the same hardware as clients, allowing for rapid reallocation of resources according to operational needs.
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## <a id="mobile-repeater-disconnection"></a> Mobile Repeater Disconnection

When a node learns a route via a mobile repeater that subsequently disappears, the MeshCore protocol adapts using its "direct paths when possible, flood as fallback" philosophy. If the known path becomes inaccessible after three attempts, the system automatically resets this path and reverts to flooding to attempt to restore connectivity.

<div class="info-box">
  <div class="info-title">Adaptive Behavior</div>
  <div class="info-content">
    If the destination is directly accessible or via another repeater, the new path will be used for future communications.
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## <a id="hop-limit-configuration"></a> Hop Limit Configuration

MeshCore implements a configurable limit of hops between network nodes. Internally, the firmware has a theoretical maximum limit of 64 hops, although in real deployments, this limit is rarely reached due to environmental and temporal constraints.

<div class="command-panel">
  <div class="command-title">
    <span class="command-icon">⌨️</span>
    Hop Limit Configuration Command
  </div>
  <div class="command-content">
    <code>set flood.max {max-hops}</code>
    <p class="command-description">
      This command allows defining the maximum number of hops for incoming packets in flood mode - when a packet reaches this limit, it is no longer retransmitted, thus avoiding network congestion.
    </p>
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

/* Feature Panel */
.feature-panel {
  display: flex;
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid #333;
}

.feature-icon {
  flex: 0 0 80px;
  background: #304878;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon svg {
  width: 40px;
  height: 40px;
}

.feature-content {
  flex: 1;
  padding: 1.5rem;
}

.feature-content h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.feature-content p {
  color: #eee;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.feature-content p:last-child {
  margin-bottom: 0;
}

.feature-note {
  background-color: #242424;
  border-left: 3px solid #3884ff;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  border-radius: 0 4px 4px 0;
  color: #eee;
  font-size: 0.95rem;
}

/* Info Box */
.info-box {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #333;
}

.info-title {
  background-color: #304878;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
}

.info-content {
  padding: 1rem;
  color: #eee;
  font-size: 1rem;
  line-height: 1.5;
}

/* Command Panel */
.command-panel {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid #333;
}

.command-title {
  background-color: #282c34;
  padding: 0.75rem 1rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.command-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.command-content {
  padding: 1rem;
}

.command-content code {
  display: block;
  font-family: 'Fira Code', monospace;
  background-color: #242424;
  color: #3eaf7c;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  overflow-x: auto;
}

.command-description {
  color: #eee;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
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