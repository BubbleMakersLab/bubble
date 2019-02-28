import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
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
  }
];
