import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { IFrameProps } from "./types";
import { getUserTokens, removeUserTokens } from "../../services";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import jwtDecode from "jwt-decode";
import { IIDTokenDecode } from "../login/types";
import { useEffect, useState } from "react";
import { sx } from "../dashboard/common/type";
import DeleteAccount from "../deleteAccount";
import { Roles } from "./enum";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

/*JSX of the element*/
const DashboardFrame: React.FC<IFrameProps> = ({ content, title, navItems, balance }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [activeRemove, setActiveRemove] = useState<boolean>(false);
  const [name, setName] = useState<string>("un named");
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClickLogOut = () => {
    removeUserTokens();
    navigate("/");
  };

  useEffect(() => {
    const token = getUserTokens().IdToken;
    if (token) {
      const decode: IIDTokenDecode = jwtDecode(token);
      setName(decode.name);
      setRole(decode.profile);
    }
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ bgcolor: "#D94CFD" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
            <Avatar
              sx={{
                position: "absolute",
                top: 11,
                right: 25,
              }}
            >
              <AdminPanelSettingsOutlinedIcon />
            </Avatar>
            <Typography
              noWrap
              component="div"
              sx={{
                position: "absolute",
                top: 10,
                right: 80,
                fontSize: 25,
              }}
            >
              {name.length > 15 ? name.slice(0, 12).concat("...") : name}
              {"     "}
              {balance}
              {"  "}
              {balance ? "LKR" : ""}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          /* sx={{
          "& .MuiDrawer-paper": {
            borderRight: "2px solid #D94CFD", // Replace with your desired color
          },
        }}*/
        >
          <DrawerHeader>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                width: "100%",
                color: "#D94CFD",
              }}
            >
              {"Bumble bee"}
            </ListItemIcon>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ /*bgcolor: "#D94CFD",*/ height: "2px" }} />
          <List>
            {navItems.map((navItem, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={navItem?.onclick ? navItem.onclick : () => {}}
                  sx={{
                    color: "#F150FF",
                    fontWeight: 600,
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {navItem.element}
                  </ListItemIcon>
                  <ListItemText primary={navItem.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ /*bgcolor: "#D94CFD",*/ height: "2px" }} />
          <List>
            {["Danger Zone", "Log out"].map((text, index) => {
              if (index === 0 && role === Roles.admin) return null;
              return (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      color: "#F150FF",
                      fontWeight: 600,
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={
                      index === 1
                        ? onClickLogOut
                        : () => {
                            setActiveRemove(true);
                          }
                    }
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 1 ? <InboxIcon sx={sx} /> : <GppMaybeOutlinedIcon sx={sx} />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>{content}</Typography>
        </Box>
      </Box>
      {activeRemove && <DeleteAccount activeRemove={activeRemove} />}
    </>
  );
};

export default DashboardFrame;
