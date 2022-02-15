import Image from "next/image";
import React, { Component } from "react";
import styles from "./HeroesContainerCard.module.css";
import classPic from "../../public/classes/warrior/Dark_Knight.png";
import Link from "next/link";

interface Props {
    imgSrc?: string;
}

class HeroesContainerCard extends Component<Props> {
    render() {
        return (
            <div className={styles.heroCardContainer}>
                <Link href="/heroes/darkknight" passHref>
                    <Image
                        src={classPic}
                        alt="img of class"
                        height="200"
                        width="200"
                        placeholder="blur"
                        className={styles.image}
                    ></Image>
                </Link>
                <div className={styles.overlay}>
                    <div className={styles.overlayText}>Dark Knight</div>
                </div>
            </div>
        );
    }
}

export default HeroesContainerCard;
