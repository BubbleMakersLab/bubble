import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import ChatIcon from "@material-ui/icons/Chat";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { any, objectOf, string } from "prop-types";
import { parse } from "query-string";
import { pathOr } from "ramda";

import Chat from "../Chat";
import tileData from "./tileData";

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
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    const { username } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Design Strategy
            </Typography>
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
        </nav>
        <main className={classes.content}>
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
          <div className={classes.rootGridList}>
            <GridList cellHeight={340} className={classes.gridList} cols={3}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </main>
      </div>
    );
  }
}
