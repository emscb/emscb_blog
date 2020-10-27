import "./App.scss";
import { Route } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Resume from "./components/Resume";
import { Helmet } from "react-helmet";
import Project from "./components/Project";

function App() {
	return (
		<div>
			<Helmet>
				
			</Helmet>
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
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} exact />
						<Route path="/cv" component={Resume} exact />
						<Route path="/project" component={Project} />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
