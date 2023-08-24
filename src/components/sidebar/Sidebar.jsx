import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">Noah</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<Link to="/" style={{ textDecoration: "none" }}>
						<li>
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</li>
					</Link>
					<Link to="/students" style={{ textDecoration: "none" }}>
						<li>
							<PeopleIcon className="icon" />
							<span>Students</span>
						</li>
					</Link>
					<Link to="/courses" style={{ textDecoration: "none" }}>
						<li>
							<ClassIcon className="icon" />
							<span>Courses</span>
						</li>
					</Link>
					<li>
						<AccountBoxIcon className="icon" />
						<span>Profile</span>
					</li>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<li>
						<PeopleIcon className="icon" />
						<span>Students</span>
					</li>
					<li>
						<ClassIcon className="icon" />
						<span>Courses</span>
					</li>
					<li>
						<AccountBoxIcon className="icon" />
						<span>Profile</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="ColorOption"
					onClick={() => dispatch({ type: "LIGHT" })}
				></div>
				<div
					className="ColorOption"
					onClick={() => dispatch({ type: "DARK" })}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
