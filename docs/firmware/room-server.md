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

/* Server Overview */
.server-overview {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid #333;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.overview-icon {
  background-color: #2d4a6b;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.overview-icon svg {
  color: white;
  width: 30px;
  height: 30px;
}

.overview-content p {
  color: #eee;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}


.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.capability-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #333;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.capability-header {
  background-color: #242424;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.capability-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
}

.capability-header h3 {
  color: #fff;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.capability-content {
  padding: 1rem;
  color: #eee;
  line-height: 1.5;
}

.capability-content code {
  background-color: #242424;
  color: #3eaf7c;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.9rem;
}

/* Auth Commands */
.auth-commands {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
}

.auth-commands h4 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.commands-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.command-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background-color: #242424;
  border-radius: 4px;
}

.command-item code {
  background-color: #333;
  color: #3eaf7c;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  flex-shrink: 0;
}

.command-desc {
  color: #ccc;
  font-size: 0.95rem;
}

/* Feature Block */
.feature-block {
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  border: 1px solid #333;
  display: flex;
}

.feature-accent {
  width: 6px;
  background: linear-gradient(to bottom, #2d4a6b, #1e3b70);
  flex-shrink: 0;
}

.feature-text {
  padding: 1.5rem;
  flex: 1;
}

.feature-text p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-text p:last-of-type {
  margin-bottom: 0;
}

.activation-command {
  background-color: #242424;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.activation-label {
  color: #aaa;
  font-size: 0.9rem;
  font-weight: 500;
}

.activation-command code {
  background-color: #333;
  color: #3eaf7c;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
}

/* Distribution Panel */
.distribution-panel {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.distribution-visual {
  text-align: center;
  flex-shrink: 0;
}

.message-counter {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2d4a6b, #1e3b70);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.counter-label {
  color: #aaa;
  font-size: 0.9rem;
  font-weight: 500;
}

.distribution-info {
  flex: 1;
}

.distribution-info h4 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.distribution-info p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.distribution-info p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .distribution-panel {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
  
  .command-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>