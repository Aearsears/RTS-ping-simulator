import React, { Component } from "react";

import HeroesPageComponent from "../../components/heroes-page/HeroesPage";

import { withRouter, NextRouter } from "next/router";
import { Keys } from "../../components/HeroesClasses";
interface WithRouterProps {
    router: NextRouter;
}

interface MyComponentProps extends WithRouterProps {}

class Subclass extends Component<MyComponentProps> {
    render() {
        return (
            <div>
                <HeroesPageComponent
                    subclass={this.props.router.query.subclass as Keys}
                ></HeroesPageComponent>
            </div>
        );
    }
}

export default withRouter(Subclass);
