# Room Server

<div class="section-divider">
  <div class="divider-line"></div>
</div>

<div class="server-overview">
  <div class="overview-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  </div>
  <div class="overview-content">
    <p>The Room Server firmware transforms your device into a group communication hub, functioning as a modern Bulletin Board System (BBS). Unlike direct communications where messages are either received immediately or lost if the recipient is out of range, room servers store communication history.</p>
  </div>
</div>

This architecture allows roaming users to retrieve up to 16 unread messages upon reconnection, even after temporarily leaving the coverage area. Comparable to a mail server for your mesh network, this functionality proves particularly useful in dynamic deployment scenarios.

<div class="capabilities-grid">
  <div class="capability-card">
    <div class="capability-header">
      <div class="capability-icon">🔄</div>
      <h3>Dual Role</h3>
    </div>
    <div class="capability-content">
      The versatility of room servers also allows them to simultaneously assume a repeater role via the command 
      <code>set repeat {on|off}</code>, thus reinforcing the overall robustness of the MeshCore network.
    </div>
  </div>

  <div class="capability-card">
    <div class="capability-header">
      <div class="capability-icon">🔐</div>
      <h3>Security System</h3>
    </div>
    <div class="capability-content">
      Room server security is ensured by a two-level authentication system: an administrator password (default "password") for complete management, and a guest password (default "hello") for standard user access.
    </div>
  </div>
</div>

<div class="auth-commands">
  <h4>Password Configuration Commands</h4>
  <div class="commands-list">
    <div class="command-item">
      <code>password {new-password}</code>
      <span class="command-desc">Change administrator password</span>
    </div>
    <div class="command-item">
      <code>set guest.password {guest-password}</code>
      <span class="command-desc">Change guest password</span>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## <a id="dual-functionality"></a> Dual Functionality: Server and Repeater

<div class="feature-block">
  <div class="feature-accent"></div>
  <div class="feature-text">
    <p>A room server can also assume the role of a repeater, thus offering a two-in-one solution that optimizes hardware utilization in your network. This versatile configuration allows the server to continue storing and distributing messages while simultaneously relaying communications between distant devices, reinforcing network density and range without requiring additional hardware.</p>
  </div>
</div>

<div class="auth-commands">
  <h4>Repeater Configuration Command</h4>
  <div class="commands-list">
    <div class="command-item">
      <code>set repeat {on|off}</code>
      <span class="command-desc">Enable or disable repeater functionality</span>
    </div>
  </div>
</div>

<div class="section-divider">
  <div class="divider-line"></div>
</div>

## <a id="message-distribution"></a> Message Distribution System

<div class="distribution-panel">
  <div class="distribution-visual">
    <div class="message-counter">16</div>
    <div class="counter-label">Messages</div>
  </div>
  <div class="distribution-info">
    <h4>Automatic Message Retrieval</h4>
    <p>When a client connects to a room server, it automatically receives its 16 most recent unread messages. This feature ensures that users stay informed of recent communications without being overwhelmed by too voluminous a history, thus creating a balance between comprehensiveness and efficiency.</p>
    <p>This mechanism is particularly valuable in scenarios where users frequently move in and out of the network's coverage area.</p>
  </div>
</div>
