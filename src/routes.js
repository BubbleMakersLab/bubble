import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import Social from "./components/Social";
import Login from "./components/Login";

export default [
  {
    id: "chat",
    path: "/chat",
    component: Chat
  },
  {
    id: "login",
    path: "/",
    component: Login
  },
  {
    id: "dashboard",
    path: "/dashboard",
    component: Dashboard
  },
  {
    id: "social",
    path: "/social",
    component: Social
  }
];
