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


