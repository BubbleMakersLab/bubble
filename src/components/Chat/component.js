import { map } from "ramda";
import { objectOf, string } from "prop-types";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import React from "react";
import SendIcon from "@material-ui/icons/Send";

import { getChatHistory, receiveChatMessage, receiveHistory, sendChatMessage } from "../../api";
import facebookIcon from "../../assets/facebook.png";
import telegrapIcon from "../../assets/telegram.png";

const applicationIcon = {
  telegram: telegrapIcon,
  facebook: facebookIcon
};

export default class Chat extends React.Component {
  static propTypes = {
    classes: objectOf(string),
    username: string
  };

  static defaultProps = {
    classes: {},
    username: "Anonymous"
  };

  constructor(props) {
    super(props);

    this.state = {
      chatMessages: [],
      chatInput: "",
      username: props.username
    };

    receiveChatMessage((err, chatMessage) => {
      this.setState(({ chatMessages }) => ({
        chatMessages: [...chatMessages, chatMessage]
      }));
    });

    receiveHistory((err, chatMessages) => {
      this.setState(() => ({
        chatMessages
      }));
    });
  }

  componentDidMount() {
    getChatHistory();
  }

  handleClick = () => {
    const { chatInput, username } = this.state;

    sendChatMessage({
      username,
      message: chatInput
    });

    this.setState({ chatInput: "" });
  };

  handleChange = e => {
    this.setState({ chatInput: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  static renderChatMessage({ message, username, application }) {
    const iconApplication = application && <img src={applicationIcon[application]} alt={application} className="icon" />;

    return (
      <li>
        [{iconApplication}
        {username}]: {message}
      </li>
    );
  }

  render() {
    const { classes } = this.props;
    const { chatMessages, chatInput } = this.state;

    return (
      <div className={classes.chat}>
        <div className={classes.chatMessagesContainer}>
          <ul className={classes.chatMessages}>{map(Chat.renderChatMessage, chatMessages)}</ul>
        </div>
        <div className={classes.chatBar}>
          <Input
            className={classes.chatInput}
            value={chatInput}
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Envoyer un message"
          />
          <Button className={classes.sendButton} variant="contained" onClick={this.handleClick}>
            <SendIcon className={classes.sendIcon} />
          </Button>
        </div>
      </div>
    );
  }
}
