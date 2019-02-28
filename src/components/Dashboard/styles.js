import red from "@material-ui/core/colors/red";

const drawerWidth = 240;
const drawerColor = "#E2001A";

export default theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: "#4A4A49"
  },
  typoTitle: {
    width: "200px"
  },
  settings: {
    marginLeft: "13px",
    color: "#C6C6C6"
  },
  bigAvatar: {
    margin: 3,
    width: 40
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundolor: drawerColor
  },
  content: {
    marginTop: "75px",
    display: "block"
  },
  card: {
    top: 50,
    maxWidth: 400,
    paddingLeft: 2,
    display: "inline-block"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  divParent: {
    display: "block"
  },
  divGestion: {
    width: "880px",
    height: "890px",
    display: "inline-block",
    paddingLeft: "20px"
  },
  gestion: {
    height: "465px !important",
    width: "420px",
    padding: "0 !important",
    display: "inline-block"
  },
  doc: {
    width: "407px",
    height: "420px",
    padding: 0
  },
  divVisio: {
    width: "300px",
    height: "803px",
    display: "inline-block"
  },
  visio: {
    height: 473,
    padding: 0
  }
});
