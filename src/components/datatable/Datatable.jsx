import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
	collection,
	getDocs,
	deleteDoc,
	doc,
	onSnapshot,
} from "firebase/firestore";
import { studentsColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../../firebase";
import { useEffect } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	Snackbar,
	Alert,
} from "@mui/material";

const Datatable = () => {
	const [data, setData] = useState([]);
	const dbCollectionName = "estudiantes";
	const [openDialog, setOpenDialog] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Puede ser "error", "warning", "info", "success"
	const [idToDelete, setIdToDelete] = useState(null);

	useEffect(() => {
		// read data in realtime...
		const unsub = onSnapshot(
			collection(db, dbCollectionName),
			(snapShot) => {
				let list = [];
				snapShot.docs.forEach((doc) => {
					list.push({ id: doc.id, ...doc.data() });
				});
				setData(list);
			},
			(error) => {
				console.log(error);
			}
		);
		return () => {
			unsub();
		};
	}, []);

	const handleDelete = async (id) => {
		setIdToDelete(id);
		setOpenDialog(true);
	};

	const handleConfirm = async () => {
		setOpenDialog(false);

		if (idToDelete != null) {
			try {
				await deleteDoc(doc(db, dbCollectionName, idToDelete));
				setData(data.filter((item) => item.id !== idToDelete));

				// Agregar snackbar para notificar el exito..
				setSnackbarMessage("The new student has been deleted successfully!");
				setSnackbarSeverity("success");
				setSnackbarOpen(true);

				// Cierra el snackbar después de un tiempo y navega
				setTimeout(() => {
					setSnackbarOpen(false); // Esto actualizará el estado y el useEffect se activará
				}, 3000);
			} catch (error) {
				console.log(error);
				// Agregar snackbar para notificar el error...
				setSnackbarMessage(`Something went wrong: ${error.message}`);
				setSnackbarSeverity("error");
				setSnackbarOpen(true);
			}
		}
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogTitle>
					{"Are you sure you want to delete this student?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Doing this will save the new student's data.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenDialog(false)} color="primary">
						Cancel
					</Button>
					<Button onClick={handleConfirm} color="primary" autoFocus>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000} // El Snackbar se cierra después de 6000ms
				onClose={() => setSnackbarOpen(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Posiciona el Snackbar
			>
				<Alert
					onClose={() => setSnackbarOpen(false)}
					severity={snackbarSeverity}
					sx={{ width: "100%" }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>

			<div className="datatableTitle">
				List Students
				<Link to="/students/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={studentsColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
