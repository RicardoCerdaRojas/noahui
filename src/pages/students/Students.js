import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Datatable from "../../components/datatable/Datatable";
import "./students.scss";

const Students = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Datatable />
			</div>
		</div>
	);
};

export default Students;
