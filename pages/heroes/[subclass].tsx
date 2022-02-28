import React, { Component } from "react";

import HeroesPageComponent from "../../components/heroes-page/HeroesPage";

import { withRouter, NextRouter } from "next/router";

interface WithRouterProps {
    router: NextRouter;
}

interface MyComponentProps extends WithRouterProps {}

class Subclass extends Component<MyComponentProps> {
    render() {
        return (
            <div>
                <HeroesPageComponent
                    subclass={this.props.router.query.subclass as string}
                ></HeroesPageComponent>
            </div>
        );
    }
}

export default withRouter(Subclass);
