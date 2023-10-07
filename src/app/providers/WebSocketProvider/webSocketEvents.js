const webSocketEvents = {
  newUserConnected: new Symbol(NEW_USER_CONNECTED),
  userDisconnected: new Symbol(USER_DISCONNECTED),
  messageToAll: new Symbol(MESSAGE_TO_ALL),
  messageToUser: new Symbol(MESSAGE_TO_USER),
  messageToGroup: new Symbol(MESSAGE_TO_GROUP),
};

export default webSocketEvents;
