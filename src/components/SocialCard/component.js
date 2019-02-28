import { objectOf, string } from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";

export default class SocialCard extends React.Component {
  static propTypes = {
    classes: objectOf(string)
  };

  static defaultProps = {
    classes: {}
  };

  state = {
    open: false
  };

  handleClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { classes, name, icon, link } = this.props;

    return (
      <Card className={classes.socialCard}>
        <div className={classes.icon}>
          <img src={icon} className={classes.iconImage} />
          {name}
        </div>
        <Tooltip
          interactive
          open={this.state.open}
          title={
            <Typography color="inherit">
              {link ? (
                <a href={link} className={classes.link} target="blank">
                  Se connecter
                </a>
              ) : (
                "Bientôt !"
              )}
            </Typography>
          }
        >
          <Button className={classes.socialCardButton} onClick={this.handleClick}>
            Selectionner
          </Button>
        </Tooltip>
      </Card>
    );
  }
}
