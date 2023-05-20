import { Provider } from "./contexts";
import { Home } from "./pages/home";

function App() {
	return (
		<Provider>
			<Home />
		</Provider>
	);
}

export default App;