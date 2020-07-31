import React, {Component} from "react";
import {inject, observer} from "mobx-react";

@inject("appState")
@observer
class Counter extends Component {

	render() {
		const {appState} = this.props;
		return (
				<section>
					<div>{appState.count}</div>
					<div>
						<button onClick={appState.incCount}>Inc</button>
						<button onClick={appState.decCount}>Dec</button>
						{/*<DevTools/>*/}
					</div>
					<div>Multiple By Two: {appState.multipByTwo}</div>
					<div>Split By Two: {appState.splitByTwo}</div>
				</section>
		)
	};
}

export default Counter;
