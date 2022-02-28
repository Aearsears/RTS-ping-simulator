import { Typography } from "@mui/material";
import Image from "next/image";
import React, { Component } from "react";
import animation from "../../public/classes/pirate/Cannoneer.gif";

class HeroesPageAnim extends Component {
    render() {
        return (
            <div>
                <div className="description">
                    <Typography variant="h5">Strength</Typography>
                    <Typography variant="h3">Hero</Typography>
                    <Typography variant="body1">
                        Slashes foes into dust with his sword
                    </Typography>
                </div>
                <div className="animation">
                    <Image src={animation} alt="animation of class"></Image>
                </div>
            </div>
        );
    }
}

export default HeroesPageAnim;
