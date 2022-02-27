import Image from "next/image";
import React, { Component } from "react";
import styles from "./HeroesContainerCard.module.css";
import Link from "next/link";

interface Props {
    class: string;
    subClass: string;
    primaryStat: string;
    imgSrc: StaticImageData;
}

class HeroesContainerCard extends Component<Props> {
    render() {
        return (
            <Link href="/heroes/darkknight" passHref>
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
                            {this.props.subClass}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default HeroesContainerCard;
