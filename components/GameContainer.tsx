import React from 'react';

interface Props {
    text: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
interface State {
    count: number | null;
}

class GameContainer extends React.Component<Props, State> {
    private myRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0
        };
        this.myRef = React.createRef();
    }
    render(): React.ReactNode {
        return (
            <div ref={this.myRef} onChange={this.props.handleChange}>
                <p>{this.props.text}</p>
                <input onChange={this.props.handleChange}></input>
                <p>{this.state.count}</p>
                GameContainer
            </div>
        );
    }
}

export default GameContainer;
