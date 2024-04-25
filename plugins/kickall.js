// This event is fired when the server receives a chat command
function onCommandEvent(event) {
  const sender = event.getPlayer(); // Get the player who executed the command

  // Check if the command is '/kickall'
  if (event.getCommand() === 'kickall') {
    // Check if the sender has permission to use the command
    if (!sender.hasPermission('kickall.use')) {
      sender.sendMessage('You do not have permission to use this command!');
      return;
    }

    // Loop through all the players on the server
    for (const player of server.getOnlinePlayers()) {
      if (player !== sender) {
        // Kick all players except the sender
        player.kick('You have been kicked by an administrator');
      }
    }

    // Broadcast a message to all players indicating that all were kicked
    server.broadcastMessage('All players have been kicked by ' + sender.getName());

    event.setCancelled(true); // Cancel the default behavior of this command
  }
}

// Register the event listener
events.on('PlayerCommandPreprocessEvent', onCommandEvent);
```