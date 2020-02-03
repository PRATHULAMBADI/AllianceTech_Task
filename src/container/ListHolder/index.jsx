import React from "react";

import { MainPage, MainPageFlex, ListHolderForm, Options, AlignFlex, MainHeading } from "./style";

import ListItem from "../listItem";

class ListHolder extends React.Component {
  render() {
    return (
      <MainPage>
        <div className="MainHeading">
          Select Builder Schedule - 2019 Fall Cohort
        </div>
        <MainPageFlex>
          <ListHolderForm>
            <AlignFlex>
              <Options>
                <ul>
                  <li className="FirstList">
                    <span className="border-all">All</span >
                    <div className="DropDown">
                      <select>
                        <option>Social Innovation</option>
                        <option>Template 1</option>
                        <option>Template 2</option>
                        <option>Template 3</option>
                      </select>
                    </div>
                  </li>
                  <li className='no-mobile-display'>Templates</li>
                  <li className='no-mobile-display'>Social Innovation</li>
                </ul>
                <div><button className="ButtonStyle">use this builder schedule</button></div>
              </Options>
            </AlignFlex>
            <MainHeading>SOCIAL INNOVATION</MainHeading>
          </ListHolderForm>
          <ListItem />
        </MainPageFlex>
        <div className="AlignButton">
          <button className="WebButton">cancel</button>
          <button>use this builder schedule </button>
        </div>
      </MainPage>
    );
  }
}
export default ListHolder;
