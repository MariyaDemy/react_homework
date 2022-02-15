import { Component } from 'react';

class TestClassComponent extends Component {

    static defaultProps = {
        label: 'default label text'
    }

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 5 }); //
        this.setState((prevState) => ({ count: this.state.count + 1 }));
    }

    handleClick2 = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        const { label } = this.props;
        return (<div>
            <h1>{label}</h1>

            {this.state.count}
            <button onClick={this.handleClick}>Increase</button>
            <button onClick={this.handleClick2}>Decrease</button>
        </div>);
    }
}

export default TestClassComponent;