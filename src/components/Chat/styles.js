export default theme => ({
  chat: {
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto"
  },
  chatMessages: {
    listStyle: "none"
  },
  chatMessagesContainer: {
    width: "100%",
    height: "90vh"
  },
  chatBar: {
    width: "100%",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  chatInput: {
    width: "80%"
  },
  sendButton: {
    marginLeft: theme.spacing.unit
  },
  sendIcon: {
    marginRight: theme.spacing.unit
  }
});
