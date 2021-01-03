import React from "react";
import Section from "./Section.js";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import "./EmailList.css";
import EmailRow from "./EmailRow.js";

export default function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">

            <Section Icon={InboxIcon} title='primary' color='red' selected />
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
            <Section Icon={LocalOfferIcon} title='Promotion' color='green' />
        </div>

        <div className="emailList__list">
          <EmailRow title="Twitch" subject="Hey fellow Streamer" description="just a test" time="10pm" />
        </div>

    </div>
  );
}
