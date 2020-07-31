import React from 'react';
import './App.css';
import appState from './state/AppState';
import Counter from "./component/Counter";


function App() {
	return (
			<div className="App">
				<div className="App-header">
					MobX demo
					<Counter appState={appState}/>
				</div>
			</div>
	);
}

export default App;
