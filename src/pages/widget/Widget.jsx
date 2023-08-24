import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ClassIcon from "@mui/icons-material/Class";
import { purple } from "@mui/material/colors";

const Widget = ({ type }) => {
	let data;
	// temporary
	const amount = 100;
	const diff = 30;

	switch (type) {
		case "students":
			data = {
				title: "STUDENTS",
				isMoney: false,
				link: "See all students",
				icon: (
					<PersonOutlineOutlinedIcon
						className="icon"
						style={{
							backgroundColor: "rgba(0, 128, 0, 0.2",
							color: "green",
						}}
					/>
				),
			};
			break;
		case "courses":
			data = {
				title: "COURSES",
				isMoney: true,
				link: "See all courses",
				icon: (
					<ClassIcon
						className="icon"
						style={{
							backgroundColor: "rgba(128, 0, 128, 0.2",
							color: "purple",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpOutlinedIcon />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
