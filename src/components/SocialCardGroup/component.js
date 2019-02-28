import { element, objectOf, string } from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

export default class SocialCardGroup extends React.Component {
  static propTypes = {
    children: element.isRequired,
    classes: objectOf(string)
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { children, classes } = this.props;

    return (
      <Card className={classes.socialCardGroup}>
        <CardContent className={classes.socialCardGroupContent}>{children}</CardContent>
      </Card>
    );
  }
}
