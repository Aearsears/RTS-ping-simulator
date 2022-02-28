import React, { Component } from "react";
import HeroesPageAnim from "./HeroesPageAnim";
import HeroesPageSkills from "./HeroesPageSkills";

interface Props {
    subclass: string;
}
class HeroesPageComponent extends Component<Props> {
    render() {
        return (
            <div className="heroesPage">
                <HeroesPageAnim></HeroesPageAnim>
                <HeroesPageSkills></HeroesPageSkills>
                <h1>Attribute</h1>
                <h1>{this.props.subclass}</h1>
                <h1>Description of class</h1>
                <div>Skill Description and animation</div>
            </div>
        );
    }
}

export default HeroesPageComponent;
