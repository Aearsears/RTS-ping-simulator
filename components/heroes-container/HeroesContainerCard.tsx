import Image from "next/image";
import React, { Component } from "react";
import styles from "./HeroesContainerCard.module.css";
import Link from "next/link";

interface Props {
    class: string;
    subClassName: string;
    subClassNameDisplay: string;
    primaryStat: string;
    imgSrc: StaticImageData;
}

class HeroesContainerCard extends Component<Props> {
    render() {
        return (
            <Link href={"/heroes/" + this.props.subClassName} passHref>
                <div className={styles.heroCardContainer}>
                    <Image
                        src={this.props.imgSrc}
                        alt="img of class"
                        height="200"
                        width="200"
                        placeholder="blur"
                        className={styles.image}
                    ></Image>
                    <div className={styles.overlay}>
                        <div className={styles.overlayText}>
                            {this.props.subClassNameDisplay}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default HeroesContainerCard;
