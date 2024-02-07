import { db } from "../../firebase-config";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	onSnapshot,
} from "firebase/firestore";

const studentCollectionRef = collection(db, "students");
class StudentDataService {
	addStudent = (newStudent) => {
		return addDoc(studentCollectionRef, newStudent);
	};

	getStudents = () => {
		return getDocs(studentCollectionRef);
	};

	getStudent = (studentId) => {
		const studentDocRef = doc(db, studentCollectionRef, studentId);
		return getDoc(studentDocRef);
	};

	deleteStudent = (studentId) => {
		const studentDocRef = doc(db, studentCollectionRef, studentId);
		return deleteDoc(studentDocRef);
	};
}
