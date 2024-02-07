import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import ViewStudent from "./pages/viewstudent/ViewStudent";
import Students from "./pages/students/Students";
import { courseInputs, studentInputs } from "./setting/formSource";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
	const [studentId, setStudentId] = useState("");
	const { darkMode } = useContext(DarkModeContext);
	const { currentUser } = useContext(AuthContext);

	const getStudentIDHandler = (id) => {
		console.log("The student ID is: " + id);
		setStudentId(id);
	};

	const RequireAuth = ({ children }) => {
		//console.log(children);
		return currentUser ? children : <Navigate to="/login" />;
	};

	//console.log(currentUser);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path="login" element={<Login />}></Route>
						<Route
							index
							element={
								<RequireAuth>
									<Home />
								</RequireAuth>
							}
						></Route>

						<Route path="students">
							<Route
								index
								element={
									<RequireAuth>
										<Students />
									</RequireAuth>
								}
							></Route>
							<Route
								path=":userID"
								element={
									<RequireAuth>
										<ViewStudent />
									</RequireAuth>
								}
							></Route>
							<Route
								path="new"
								element={
									<RequireAuth>
										<New inputs={studentInputs} title={"Add New Student"} />
									</RequireAuth>
								}
							></Route>
						</Route>
						<Route path="courses">
							<Route
								index
								element={
									<RequireAuth>
										<Students getStudentID={getStudentIDHandler} />
									</RequireAuth>
								}
							></Route>
							<Route
								path=":userID"
								element={
									<RequireAuth>
										<ViewStudent />
									</RequireAuth>
								}
							></Route>
							<Route
								path="new"
								element={
									<RequireAuth>
										<New inputs={courseInputs} title={"Add New Course"} />
									</RequireAuth>
								}
							></Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
