import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

interface State {}

class Navbar extends Component {
    pages = ["Products", "Pricing", "Blog"];
    settings = ["Profile", "Account", "Dashboard", "Logout"];
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <div className="flex">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link href="/game">
                                <a color="inherit" className="ml-auto">
                                    Game
                                </a>
                            </Link>
                            <Link href="/heroes">
                                <a color="inherit" className="ml-auto">
                                    Heroes
                                </a>
                            </Link>
                            <Link href="/">
                                <a color="inherit" className="ml-auto">
                                    Chatrooms
                                </a>
                            </Link>
                        </div>
                        <a color="inherit" className="ml-auto">
                            Login
                        </a>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default Navbar;
