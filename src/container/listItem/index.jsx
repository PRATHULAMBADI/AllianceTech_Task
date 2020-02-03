import React from "react";

import { TileContainer, Tile } from "./style";

import img1 from "../../images/image1.png";
import Calendar from "../../components/calendar/index";

// import DragHandleSharpIcon from '@material-ui/icons/DragHandleSharp';

class ListItem extends React.Component {
    render() {
    return (
      <TileContainer>
        <Tile>
          <div className="TileTextAlign">
            <div className="TileHeading">Problem</div>
            <div className="TileLink">view builder</div>
            </div>
            <div className="ImageHolder">
            <image src={img1} alt="placeholder" className="placeholder" />            
          </div>         
        </Tile>
        <div className="Date">
        <Calendar/>
      </div>
      </TileContainer>
    );
  }
}
export default ListItem;
