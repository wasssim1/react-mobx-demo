import {observable} from "mobx";

const appState = observable({
	count: 0,
	incCount: () => {
		appState.count += 1;
	},
	decCount: () => {
		appState.count -= 1;
	}
});

export default appState;
