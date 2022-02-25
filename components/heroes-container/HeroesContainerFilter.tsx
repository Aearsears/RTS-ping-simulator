import {
    Button,
    ButtonGroup,
    Icon,
    IconButton,
    InputBase,
    styled,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { Component } from "react";

import Image from "next/image";
import warriorIcon from "../../public/classes/warrior/Class_Warrior.png";
import mageIcon from "../../public/classes/magician/Class_Magician.png";
import thiefIcon from "../../public/classes/thief/Class_Thief.png";
import bowmanIcon from "../../public/classes/bowman/Class_Bowman.png";
import { Search } from "@mui/icons-material";
class HeroesContainerFilter extends Component {
    SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
    }));

    render() {
        return (
            <div className="filter flex justify-items-center items-center justify-center">
                <div>
                    <Typography>Filter Heroes</Typography>
                </div>
                <div className="filter flex items-center">
                    <Typography>Primary Stat</Typography>

                    <Tooltip title="Strength">
                        <IconButton>
                            <Icon>fitness_center</Icon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Dexterity">
                        <IconButton>
                            <Icon>track_changes</Icon>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Intelligence">
                        <IconButton>
                            <Icon>psychology</Icon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Luck">
                        <IconButton>
                            <Icon>casino</Icon>
                        </IconButton>
                    </Tooltip>
                </div>
                <div>
                    <ButtonGroup
                        variant="text"
                        aria-label="outlined primary button group"
                        color="info"
                        size="small"
                    >
                        <Button>
                            <Image src={warriorIcon} alt="img of class"></Image>
                        </Button>
                        <Button>
                            <Image src={bowmanIcon} alt="img of class"></Image>
                        </Button>

                        <Button>
                            <Image src={mageIcon} alt="img of class"></Image>
                        </Button>
                        <Button>
                            <Image src={thiefIcon} alt="img of class"></Image>
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Search>
                        <this.SearchIconWrapper>
                            <Icon>search</Icon>
                        </this.SearchIconWrapper>
                        <this.StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </div>
            </div>
        );
    }
}

export default HeroesContainerFilter;
