import { objectOf, string } from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";

export default class Dashboard extends React.Component {
  static propTypes = {
    classes: objectOf(string)
  };

  static defaultProps = {
    classes: {}
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.dashboard}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.dashboardButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
