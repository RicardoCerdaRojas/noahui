import React from "react";
import "./viewstudent.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";

const ViewStudent = () => {
	return (
		<div className="viewStudent">
			<Sidebar />
			<div className="viewStudentContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="editButton">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								src="http://dummyimage.com/236x100.png/cc0000/ffffff"
								alt=""
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">Jane Doe</h1>
								<div className="detailItem">
									<span className="itemKey">Email</span>
									<span className="itemValue">dasda@asd.cl</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone</span>
									<span className="itemValue">+56 9 88314264</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Gender</span>
									<span className="itemValue">Male</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Status</span>
									<span className="itemValue">Active</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Next Assignment</h1>
					<List />
				</div>
			</div>
		</div>
	);
};

export default ViewStudent;
