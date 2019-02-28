export default theme => ({
  chat: {
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto"
  },
  chatMessages: {
    listStyle: "none",
    margin: "0",
    overflow: "auto",
    height: "100%"
  },
  chatMessagesContainer: {
    width: "100%",
    height: "90%"
  },
  chatBar: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  chatInput: {
    width: "80%"
  },
  sendButton: {
    marginLeft: theme.spacing.unit
  }
});
