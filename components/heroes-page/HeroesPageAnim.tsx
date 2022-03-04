import { Typography } from "@mui/material";
import Image from "next/image";
import React, { Component } from "react";
import animation from "../../public/classes/pirate/Cannoneer.gif";
import styles from "./HeroesPageAnim.module.css";

interface Props {
    primaryStat: string;
    subclass: string;
    img: StaticImageData;
}
class HeroesPageAnim extends Component<Props> {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className="description">
                    <Typography variant="h5">
                        {this.props.primaryStat}
                    </Typography>
                    <Typography variant="h3">{this.props.subclass}</Typography>
                    <Typography variant="body1">
                        Slashes foes into dust with his sword
                    </Typography>
                </div>
                <div className="animation">
                    <Image
                        src={this.props.img}
                        alt="animation of class"
                    ></Image>
                </div>
            </div>
        );
    }
}

export default HeroesPageAnim;
