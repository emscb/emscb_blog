import "./App.scss";
import { Route } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Resume from "./components/Resume";

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
						<Route path="/cv" exact component={Resume} />
						<Route path="*" exact component={About} />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
