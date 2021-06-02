import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Link, MenuItem} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { Link as RouterLink } from "react-router-dom";


const headersData = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Like",
        href: "/likePost",
    },
    {
        label: "dislike",
        href: "/dislike",
    },
    {
        label: "Log In",
        href: "/login",
    },
];


const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#1877F2",
        paddingRight: "79px",
        paddingLeft: "118px",
        
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Lobster, cursive",
        fontWeight: 400,
        fontSize: "40px",
        color: "#fff",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        size: "18px",
        marginLeft: "38px",
        color: "#fff",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
      }
}));

const Header = () => {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {headerLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "secondary",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
                <div>{headerLogo}</div>
            </Toolbar>
        );
    };

    const headerLogo = (
        <Typography variant="h6" className={logo}>
            Post Maker
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "secondary",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: Link,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };
    //for mobile responsive

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <header>
            <AppBar position="static" className={header}>
                {mobileView ? displayMobile() : displayDesktop()}</AppBar>
        </header>
    );
};

export default Header;
