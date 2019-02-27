import { map, pathOr } from "ramda";
import { parse } from "query-string";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";

import React from "react";

import { any, objectOf, string } from "prop-types";

import { receiveChatMessage, sendChatMessage } from "../../api/index";

export default class Chat extends React.Component {
  static propTypes = {
    classes: objectOf(string),
    location: objectOf(any)
  };

  static defaultProps = {
    classes: {},
    location: {}
  };

  constructor(props) {
    super(props);

    const parsed = parse(props.location.search);

    this.state = {
      chatMessages: [],
      chatInput: "",
      username: pathOr("Anonymous", ["username"], parsed)
    };

    receiveChatMessage((err, chatMessage) => {
      this.setState(({ chatMessages }) => ({
        chatMessages: [...chatMessages, chatMessage]
      }));
    });
  }

  handleClick = () => {
    const { chatInput, username } = this.state;

    sendChatMessage({
      username,
      message: chatInput
    });
  };

  handleChange = e => {
    this.setState({ chatInput: e.target.value });
  };

  static renderChatMessage(chatMessage) {
    return (
      <li>
        [{chatMessage.username}]: {chatMessage.message}
      </li>
    );
  }

  render() {
    const { classes } = this.props;
    const { chatMessages } = this.state;

    return (
      <div className={classes.chat}>
        <div className={classes.chatMessagesContainer}>
          <ul className={classes.chatMessages}>{map(Chat.renderChatMessage, chatMessages)}</ul>
        </div>
        <Paper className={classes.chatBar} elevation={1}>
          <Input className={classes.chatInput} type="text" onChange={this.handleChange} />
          <Button className={classes.sendButton} variant="contained" onClick={this.handleClick}>
            <SendIcon className={classes.sendIcon} />
            Send
          </Button>
        </Paper>
      </div>
    );
  }
}
