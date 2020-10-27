import "./App.scss";
import { Route } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Resume from "./components/Resume";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div>
			<Helmet>
				<meta property="description" content="Blog" />
				<meta property="og:site_name" content="Blog" />
				<meta property="og:title" content="Blog" />
				<meta property="og:description" content="emscb.github.io/emscb_blog" />
			</Helmet>
			<div
				style={{
					display: "flex",
					minHeight: "100vh",
					flexDirection: "column",
					backgroundColor: "#E9DCF0",
					fontFamily: "Nunito Sans, sans-serif",
				}}
			>
				<div style={{ flex: "1" }}>
					<Menu />
					<div className="container">
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} />
						<Route path="/cv" component={Resume} />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
