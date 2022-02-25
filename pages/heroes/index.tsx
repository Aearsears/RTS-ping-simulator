import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import HeroesContainerFilter from "../../components/heroes-container/HeroesContainerFilter";
import HeroesContainerCard from "../../components/heroes-container/HeroesContainerCard";
import styles from "./styles.module.css";

class Heroes extends Component {
    cards: JSX.Element[] = [...Array(10)].map((index) => {
        return (
            <Card key={index} className="w-80">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    });
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
                <div className="flex heroes-container-cards">
                    <HeroesContainerCard></HeroesContainerCard>
                    <HeroesContainerCard></HeroesContainerCard>
                    <HeroesContainerCard></HeroesContainerCard>
                </div>
            </div>
        );
    }
}

export default Heroes;
