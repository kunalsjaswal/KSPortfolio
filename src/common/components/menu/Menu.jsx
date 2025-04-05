import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { navbar_colors } from "../../assets/colors";

export default function BasicMenu({ menuDetail, onExperienceClick, onSkillsClick, onProjectClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const menuName = menuDetail.NAME,
    menuItems = menuDetail.ITEMS,
    open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (indx) => {
    if(indx === 0) onExperienceClick();
    else if(indx === 1) onSkillsClick();
    else if(indx === 2) onProjectClick();

    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="menu-tab-btn"
      >
        { menuName }
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: navbar_colors.dark_menu_tab_color,
            borderRadius: "0.3rem",
          },
        }}
      >
        {menuItems.map((menuItem, indx) => (
          <MenuItem
            key={indx}
            sx={{
                paddingRight: "2rem",
                color: "white",
                fontWeight: "100"
            }}
            onClick={() => handleClose(indx)}
          > 
            { menuItem }
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
