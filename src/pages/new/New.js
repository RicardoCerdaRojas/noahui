import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import {
	InputLabel,
	Select,
	MenuItem,
	FormControl,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	Snackbar,
	Alert,
} from "@mui/material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	const [data, setData] = useState(null);
	const [selectedOptions, setSelectedOptions] = useState({});
	const navigate = useNavigate();
	const dbCollectionName = "estudiantes";
	const [openDialog, setOpenDialog] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Puede ser "error", "warning", "info", "success"
	const [isOperationSuccessful, setIsOperationSuccessful] = useState(false);

	useEffect(() => {
		const uploadFile = () => {
			const imageName = new Date().getTime() + file.name;
			const storageRef = ref(storage, imageName);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
						default:
							break;
					}
				},
				(error) => {
					console.log(error);
				},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setData((prev) => ({ ...prev, img: downloadURL }));
					});
				}
			);
		};
		file && uploadFile();
	}, [file]);

	const handleInput = (e) => {
		e.preventDefault();

		const { name, id } = e.target;
		let value = e.target.value;
		//console.log(e.target.name);
		setSelectedOptions((prevSelectedOptions) => ({
			...prevSelectedOptions,
			[name]: value,
		}));

		const field = name || id;
		setData({ ...data, [field]: value });
		//console.log(data);
	};

	const handleAdd = async (e) => {
		e.preventDefault();
		setOpenDialog(true);
	};

	// Efecto secundario para manejar la navegación después del cierre del snackbar
	useEffect(() => {
		if (isOperationSuccessful && !snackbarOpen) {
			navigate("/students");
			setIsOperationSuccessful(false); // Restablece el estado para futuras operaciones
		}
		// Esta dependencia asegura que el efecto solo se active después de una operación y cuando el snackbar se cierre
	}, [snackbarOpen, isOperationSuccessful, navigate]);

	const handleConfirm = async () => {
		setOpenDialog(false);
		if (data) {
			try {
				const res = await addDoc(collection(db, dbCollectionName), {
					...data,
					timeStamp: serverTimestamp(),
				});
				// Agregar snackbar para notificar el exito..
				setSnackbarMessage("The new student has been saved successfully!");
				setSnackbarSeverity("success");
				setSnackbarOpen(true);

				// Cierra el snackbar después de un tiempo y navega
				setTimeout(() => {
					setSnackbarOpen(false); // Esto actualizará el estado y el useEffect se activará
					setIsOperationSuccessful(true);
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

	function generateFormElements(input, index) {
		const { id, label, element, type, placeholder, component, list } = input;

		if (element === "input") {
			return (
				<div className="formInput" key={index}>
					<label htmlFor={id}>{label}</label>
					<input
						type={type}
						id={id}
						placeholder={placeholder}
						onChange={handleInput}
					/>
				</div>
			);
		}

		if (element === "checkbox") {
			return (
				<div className="formInput" key={index}>
					<input type="checkbox" id={id} onChange={handleInput} />
					<label htmlFor={id}>{label}</label>
				</div>
			);
		}

		if (component === "simpledropdown") {
			return (
				<div className="formInput" key={index}>
					<label htmlFor={id}>{label}</label>
					<select id={id}>
						<option key="-1" value="">
							{placeholder}
						</option>
						{/* Render options from the provided list prop */}
						{list.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
			);
		}

		if (component === "dropdown") {
			return (
				<div className="formInput" key={index}>
					<FormControl fullWidth>
						<InputLabel id={"lbl" + id}>{label}</InputLabel>
						<Select
							labelId={"lbl" + id}
							id={id}
							name={id}
							value={selectedOptions[id] || ""}
							label={label}
							onChange={handleInput}
						>
							{list.map((option, index) => (
								<MenuItem key={id + "_" + index} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			);
		}

		return null;
	}

	return (
		<div className="new">
			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogTitle>
					{"Are you sure you want to save this new student?"}
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

			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
							}
							alt=""
						/>
					</div>
					<div className="right">
						<form onSubmit={handleAdd}>
							<div className="formInput">
								<label htmlFor="file">
									{" "}
									Image:
									<DriveFolderUploadOutlinedIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: "none" }}
								/>
							</div>
							{inputs.map((input, index) => {
								return generateFormElements(input, index);
							})}
							<br />
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
