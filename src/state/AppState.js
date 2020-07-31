import {action, configure, observable} from "mobx";

configure({ enforceActions: true });

const appState = observable({
	count: 0,
	incCount: action("Increment counter", () => {
		appState.count += 1;
	}),
	decCount: action("Decrement counter", () => {
		appState.count -= 1;
	}),
	get multipByTwo() {
		return this.count * 2;
	},
	get splitByTwo() {
		return this.count / 2;
	}
});

export default appState;
