import "./App.scss";
import { Route, Redirect } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import CV from "./components/CV";

function App() {
	return (
		<div>
			<div
				style={{
					display: "flex",
					minHeight: "100vh",
					flexDirection: "column",
					backgroundColor: "#E9DCF0",
					fontFamily: "Nunito Sans, Noto Sans KR, sans-serif",
				}}
			>
				<div style={{ flex: "1" }}>
					<Menu />
					<div className="container">
						<Route path="/" exact component={About} />
						<Route path="/cv" exact component={CV} />
						<Redirect from="*" to="/" />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
