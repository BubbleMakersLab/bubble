import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import ChatIcon from "@material-ui/icons/Chat";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import { any, objectOf, string } from "prop-types";
import { parse } from "query-string";
import { pathOr } from "ramda";

import Dialog from "@material-ui/core/Dialog/Dialog";
import Chat from "../Chat";

import bubbleLogo from "../../assets/images/bubble.png";
import cardDoc from "../../assets/images/card-doc.png";
import cardGestion from "../../assets/images/card-gestion.png";
import cardVisio from "../../assets/images/card-visio.png";
import tuto1 from "../../assets/tuto1.PNG";
import userOnline1 from "../../assets/images/user1-online.png";
import userOnline2 from "../../assets/images/user2-online.png";
import userOnline3 from "../../assets/images/user3-online.png";

export default class Dashboard extends React.Component {
  static propTypes = {
    classes: objectOf(string),
    location: objectOf(any),
    theme: objectOf(any)
  };

  static defaultProps = {
    classes: {},
    location: {},
    theme: {}
  };

  constructor(props) {
    super(props);

    const parsed = parse(props.location.search);

    this.state = {
      username: pathOr("Anonymous", ["username"], parsed),
      mobileOpen: false,
      open: true
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClose = () => {
    this.setState(state => ({ open: false }));
  };

  render() {
    const { classes, theme } = this.props;
    const { username, open } = this.state;

    const drawer = (
      <div className={classes.toolbarLeft}>
        <img alt="User 1" src={bubbleLogo} className={classes.logo} />
        <List>
          {["Projects"].map(text => (
            <ListItem button key={text}>
              {text}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Organizational Behavior", "Management Strategic", "Design Strategy"].map(text => (
            <ListItem button key={text}>
              {text}
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Dialog onClose={this.handleClose} onClick={this.handleClose} open={open} classes={{ paper: classes.dialog }}>
          <img src={tuto1} className={classes.dialogImage} />
        </Dialog>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.typoTitle}>
              Design Strategy
            </Typography>
            <Grid container justify="flex-end" alignItems="center">
              <img alt="User 1" src={userOnline1} className={classes.bigAvatar} />
              <img alt="User 2" src={userOnline2} className={classes.bigAvatar} />
              <img alt="User 3" src={userOnline3} className={classes.bigAvatar} />
              <Tooltip title="Setting">
                <IconButton aria-label="Settings">
                  <SettingsIcon style={{ fontSize: 40 }} className={classes.settings} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </nav>
        <main className={classes.content}>
          <div className={classes.divGestion}>
            <Card className={classes.card}>
              <CardHeader
                avatar={<ChatIcon />}
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Messagerie instantanée"
              />
              <CardContent className={classes.chatCardContent}>
                <Chat username={username} />
              </CardContent>
            </Card>
            <img className={classes.gestion} src={cardGestion} alt="card gestion" />
            <img className={classes.doc} src={cardDoc} alt="card doc" />
          </div>
          <div className={classes.divVisio}>
            <img className={classes.visio} src={cardVisio} alt="card visio" />
          </div>
        </main>
      </div>
    );
  }
}
