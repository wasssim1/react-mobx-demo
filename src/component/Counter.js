import React from "react";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";

const Counter = observer(props => {
	const {appState} = props;

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
});

export default Counter;
