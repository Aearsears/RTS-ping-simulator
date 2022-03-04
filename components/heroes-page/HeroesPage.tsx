import React, { Component } from "react";
import HeroesPageAnim from "./HeroesPageAnim";
import HeroesPageSkills from "./HeroesPageSkills";
import { heroFactory, Keys } from "../HeroesClasses";
interface Props {
    subclass: Keys;
}
class HeroesPageComponent extends Component<Props> {
    render() {
        const subclass = heroFactory.getHero(this.props.subclass);
        return (
            <div className="heroesPage">
                <HeroesPageAnim
                    primaryStat={subclass.primaryStat}
                    subclass={subclass.subclass}
                    img={subclass.imgSrc}
                ></HeroesPageAnim>
                <HeroesPageSkills></HeroesPageSkills>
                <h1>Attribute</h1>
                <h1>Description of class</h1>
                <h1>Description of class</h1>
                <div>Skill Description and animation</div>
            </div>
        );
    }
}

export default HeroesPageComponent;
