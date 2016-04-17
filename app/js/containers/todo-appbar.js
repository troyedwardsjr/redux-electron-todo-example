import React from 'react';
import { connect } from 'react-redux';
var remote = window.require('remote');
var ipc = window.require("electron").ipcRenderer;

// Appbar
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class TodoAppBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
    <AppBar
      title="Material Todo App"
      style={{WebkitAppRegion: "drag"}}
      iconElementLeft={
        <IconButton onTouchTap={() => {ipc.send('close-main-window')}}>
          <NavigationClose />
        </IconButton>
      }
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="________________"/>
          <MenuItem primaryText="Export to PDF" onTouchTap={ () => {ipc.send('export-to-pdf')} }/>
          <MenuItem primaryText="Minimize" onTouchTap={ () => {ipc.send('minimize')} }/>
          <MenuItem primaryText="Minimize to System Tray" onTouchTap={ () => {ipc.send('minimize-to-tray')} }/>
        </IconMenu>
      }
      />
      </div>
    );
  }
}

          