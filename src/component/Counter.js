import React from "react";
import {observer} from "mobx-react";

const Counter = observer(props => {
	const {appState} = props;

	return (
			<section>
				<span>{appState.count}</span>
				<div>
					<button onClick={appState.incCount}>Inc</button>
					<button onClick={appState.decCount}>Dec</button>
				</div>
			</section>
	)
});

export default Counter;
