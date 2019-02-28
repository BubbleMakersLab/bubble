import { objectOf, string } from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";

export default class SocialCard extends React.Component {
  static propTypes = {
    classes: objectOf(string)
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, name, icon } = this.props;

    return (
      <Card className={classes.socialCard}>
        <div className={classes.icon}>
          <img src={icon} className={classes.iconImage}/>
          {name}
        </div>
        <Button className={classes.socialCardButton}>Selectionner</Button>
      </Card>
    );
  }
}
