import { objectOf, string } from "prop-types";
import React from "react";

import Button from "@material-ui/core/Button/Button";

import { Link } from "react-router-dom";

import { parse } from "query-string";

import { pathOr } from "ramda";

import SocialCard from "../SocialCard";
import SocialCardGroup from "../SocialCardGroup";

import driveIcon from "../../assets/icon/icon-drive.png";
import messengerIcon from "../../assets/icon/icon-messenger.png";
import officeIcon from "../../assets/icon/icon-office.png";
import telegramIcon from "../../assets/icon/icon-telegram.png";
import wechatIcon from "../../assets/icon/icon-wechat.png";
import whatsAppIcon from "../../assets/icon/icon-whatsapp.png";

export default class Social extends React.Component {
  static propTypes = {
    classes: objectOf(string)
  };

  static defaultProps = {
    classes: {}
  };

  constructor(props) {
    super(props);

    const parsed = parse(props.location.search);

    this.state = {
      username: pathOr("Anonymous", ["username"], parsed),
      mobileOpen: false
    };
  }

  render() {
    const { classes } = this.props;
    const { username } = this.state;

    return (
      <div className={classes.social}>
        <div className={classes.socialCardGroupContainer}>
          <SocialCardGroup>
            <SocialCard name="Messenger" icon={messengerIcon} />
            <SocialCard name="WhatsApp" icon={whatsAppIcon} />
            <SocialCard name="Telegram" icon={telegramIcon} />
            <SocialCard name="WeChat" icon={wechatIcon} />
          </SocialCardGroup>
          <SocialCardGroup>
            <SocialCard name="Drive" icon={driveIcon} />
            <SocialCard name="Office" icon={officeIcon} />
          </SocialCardGroup>
        </div>
        <div className={classes.footer}>
          <div>
            <Link to={`/dashboard?username=${username}`} className={classes.passStep}>
              Ignorer cette étape, je préfère utiliser les outils emlyon
            </Link>
          </div>
          <div className={classes.or}>ou</div>
          <div>
            <Link to={`/dashboard?username=${username}`}>
              <Button variant="contained" classes={{ contained: classes.nextButton }}>
                Suivant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
