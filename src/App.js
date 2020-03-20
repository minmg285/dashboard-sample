import React from "react";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, Login } from "react-admin";
import { UserList } from "./users";
import { PostList, PostCreate, PostEdit } from "./posts";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const MyLoginPage = () => (
  <Login
    // A random image that changes everyday
    backgroundImage="https://source.unsplash.com/random/1600x900/daily"
  />
);
const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
