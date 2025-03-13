async function fetchServerStatus() {
  try {
    const response = await fetch('https://servers-frontend.fivem.net/api/servers/single/yz4qzm');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    const currentPlayers = data.Data.clients;
    const maxPlayers = data.Data.sv_maxclients;
    const isOnline = data.Data.enhancedHostSupport || currentPlayers !== undefined;
    const status = isOnline ? 'online' : 'offline';

    const serverStatus = document.getElementById('server-status-info');

    serverStatus.innerHTML = `
      <div class="status-block">
        <i class="fa-solid fa-people-group"></i>
        <strong>${currentPlayers} / ${maxPlayers} players online</strong>
      </div>
      <div class="status-block">
        <span class="status-indicator ${status}"></span>
        <strong>Server is ${status === 'online' ? 'running' : 'offline'}</strong>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching server status:', error);
    document.getElementById('server-status-info').innerHTML = `
      <div class="status-block">
        <p><strong>Unable to fetch server data</strong></p>
        <p>
          <span class="status-indicator offline"></span>
          <strong>Server Unreachable</strong>
        </p>
      </div>
    `;
  }
}

// Initial fetch
fetchServerStatus();

// Auto-refresh every 60 seconds
setInterval(fetchServerStatus, 60000);
