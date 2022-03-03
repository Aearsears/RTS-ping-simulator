import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import HeroesContainerFilter from "../../components/heroes-container/HeroesContainerFilter";
import HeroesContainerCard from "../../components/heroes-container/HeroesContainerCard";
import styles from "./styles.module.css";

import { allClasses } from "../../components/HeroesClasses";

class Heroes extends Component {
    subClassCards: JSX.Element[] = [];
    constructor() {
        super({});
        this.populateSubClasses();
    }

    populateSubClasses(): void {
        allClasses.forEach((value) => {
            this.subClassCards.push(
                <HeroesContainerCard
                    key={value.class}
                    class={value.class}
                    subClassNameDisplay={value.subclass}
                    subClassName={value.constructor.name}
                    imgSrc={value.imgSrc}
                    primaryStat={value.primaryStat}
                ></HeroesContainerCard>
            );
        });
    }
    componentDidMount() {}
    render() {
        return (
            <div className={styles.heroescontainer}>
                <div className="heroes-container-text">
                    <Typography variant="h2" className="text-center">
                        Choose your hero
                    </Typography>
                    <Typography variant="h6" className="text-center">
                        Many classes to choose from that will suit a wide
                        variety of playstyles
                    </Typography>
                </div>
                <div className="heroes-container-filter">
                    <HeroesContainerFilter></HeroesContainerFilter>
                </div>
                <div className={styles.heroesContainerCards}>
                    {this.subClassCards}
                </div>
            </div>
        );
    }
}

export default Heroes;
