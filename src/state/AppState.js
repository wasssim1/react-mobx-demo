import {action, configure, observable} from "mobx";

configure({ enforceActions: true });

const appState = {
	@observable count: 0,

	@action incCount:  () => {
		appState.count += 1;
	},

	@action decCount: () => {
		appState.count -= 1;
	},

	get multipByTwo() {
		return this.count * 2;
	},
	get splitByTwo() {
		return this.count / 2;
	}
};

export default appState;
