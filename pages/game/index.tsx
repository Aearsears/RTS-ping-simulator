import React, { Component } from "react";
import * as PIXI from "pixi.js";
import GameContainer from "../../components/GameContainer";

class GamePage extends Component<{}, {}> {
    app = new PIXI.Application({
        height: 500,
        width: 500,
        backgroundColor: 0x5bba6f,
    });
    myRef: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current?.append(this.app.view);
    }

    componentWillUnmount() {
        this.app.destroy(true, { children: true });
    }

    render() {
        return (
            <div className="game-container w-100 h-100">
                <div ref={this.myRef}></div>
                <GameContainer
                    text="yes"
                    handleChange={(event) => {
                        event;
                    }}
                ></GameContainer>
            </div>
        );
    }
}

export default GamePage;
