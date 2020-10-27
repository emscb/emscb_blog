import "./App.scss";
import { Route } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Project from "./components/projects/Project";

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
						<Route path="/" exact component={Home}/>
						<Route path="/about" exact component={About}/>
						<Route path="/cv" exact component={Resume} />
						<Route path="/project" exact component={Projects}/>
						<Route path="/project/:projectName" component={Project}/>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
