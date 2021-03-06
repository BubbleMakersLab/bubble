import red from "@material-ui/core/colors/red";

const drawerWidth = 240;

export default theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: "#4A4A49",
    height: "96px",
    display: "flex",
    justifyContent: "center"
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
  logo: {
    width: 239,
    marginRight: "10px"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#E2001A",
    overflow: "hidden"
  },
  toolbarLeft: {
    color: "white"
  },
  content: {
    marginTop: "100px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  card: {
    top: 50,
    width: 447,
    height: 559,
    marginLeft: 10,
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
  chatCardContent: {
    height: "500px"
  },
  divParent: {
    display: "block"
  },
  divGestion: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "20px",
    width: "calc(100% - 400px)"
  },
  gestion: {
    height: "570px !important",
    padding: "0 !important"
  },
  doc: {
    width: "470px",
    height: "380px",
    padding: 0
  },
  divVisio: {
    position: "fixed",
    right: 0,
    top: "96px",
    marginRight: "-8px"
  },
  visio: {
    height: "100vh",
    padding: 0
  },
  dialog: {
    maxWidth: "none",
    maxHeight: "none"
  },
  dialogImage: {
    width: "1200px"
  },
  tuto: {
    position: "fixed",
    width: "100vw",
    zIndex: 1300,
    height: "100vh"
  }
});
