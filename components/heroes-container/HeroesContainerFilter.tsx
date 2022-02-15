import { Typography } from "@mui/material";
import React, { Component } from "react";

class HeroesContainerFilter extends Component {
    render() {
        return (
            <div className="filter">
                <Typography>Filter Heroes</Typography>
                <Typography>Primary Stat: Strength,Dex,Int, Luck</Typography>
                <Typography>Class: Mage, Thief,Bowman, Warrior</Typography>
            </div>
        );
    }
}

export default HeroesContainerFilter;
