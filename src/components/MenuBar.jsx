// adapted from the website
// https://mui.com/pt/material-ui/react-menu/

import React from 'react';
import { MenuItem, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={ { mr: 2 } }
        onClick={ handleClick }
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        MenuListProps={ {
          'aria-labelledby': 'basic-button',
        } }
      >
        <Link to="/" textDecoration="none">
          <MenuItem onClick={ handleClose }>Agenda</MenuItem>
        </Link>
        <Link to="/createtask" textDecoration="none">
          <MenuItem onClick={ handleClose }>Nova Tarefa</MenuItem>
        </Link>
        <Link to="/changetask" textDecoration="none">
          <MenuItem onClick={ handleClose }>Alterar Tarefa</MenuItem>
        </Link>
        <Link to="/excludetask">
          <MenuItem onClick={ handleClose }>Excluir Tarefa</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default MenuBar;
