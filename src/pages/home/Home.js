import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";

const Home = () => {
	return (
		<div className="home">
			<Sidebar></Sidebar>
			<div className="homeContainer">
				<Navbar></Navbar>
				<div className="widgets">
					<Widget type="students"></Widget>
					<Widget type="courses"></Widget>
				</div>
				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
				</div>
				<div className="listContainer">
					<div className="listTitle">Latest Students</div>
					<List />
				</div>
			</div>
		</div>
	);
};

export default Home;
