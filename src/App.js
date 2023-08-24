import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import ViewStudent from "./pages/viewstudent/ViewStudent";
import List from "./pages/list/List";
import { courseInputs, studentInputs } from "./setting/formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="students">
							<Route index element={<List />}></Route>
							<Route path=":userID" element={<ViewStudent />}></Route>
							<Route
								path="new"
								element={
									<New inputs={studentInputs} title={"Add New Student"} />
								}
							></Route>
						</Route>
						<Route path="courses">
							<Route index element={<List />}></Route>
							<Route path=":userID" element={<ViewStudent />}></Route>
							<Route
								path="new"
								element={<New inputs={courseInputs} title={"Add New Course"} />}
							></Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
