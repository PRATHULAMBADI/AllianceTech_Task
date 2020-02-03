import React from "react";
import ListHolder from "./ListHolder";

import { MainForm } from "./style"

class MainPage extends React.Component {
  render() {
    return (
    <MainForm>
      <ListHolder/>      
    </MainForm>);
  }
}

export default MainPage;