import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
	const rows = [
		{
			id: 1,
			first_name: "Ansley",
			last_name: "Stannas",
			email: "astannas0@pen.io",
			gender: "Genderqueer",
			img: "http://dummyimage.com/221x100.png/cc0000/ffffff",
			active: true,
		},
		{
			id: 2,
			first_name: "Amber",
			last_name: "Houdhury",
			email: "ahoudhury1@earthlink.net",
			gender: "Female",
			img: "http://dummyimage.com/125x100.png/cc0000/ffffff",
			active: true,
		},
		{
			id: 3,
			first_name: "Ricky",
			last_name: "Di Pietro",
			email: "rdipietro2@amazonaws.com",
			gender: "Male",
			img: "http://dummyimage.com/184x100.png/cc0000/ffffff",
			active: true,
		},
		{
			id: 4,
			first_name: "Goddart",
			last_name: "Rouby",
			email: "grouby3@cafepress.com",
			gender: "Male",
			img: "http://dummyimage.com/236x100.png/cc0000/ffffff",
			active: true,
		},
		{
			id: 5,
			first_name: "Doralin",
			last_name: "Prescott",
			email: "dprescott4@naver.com",
			gender: "Female",
			img: "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
			active: false,
		},
		{
			id: 6,
			first_name: "Julianne",
			last_name: "Deniskevich",
			email: "jdeniskevich5@nationalgeographic.com",
			gender: "Female",
			img: "http://dummyimage.com/244x100.png/ff4444/ffffff",
			active: true,
		},
		{
			id: 7,
			first_name: "Eulalie",
			last_name: "Hembrow",
			email: "ehembrow6@berkeley.edu",
			gender: "Female",
			img: "http://dummyimage.com/128x100.png/cc0000/ffffff",
			active: true,
		},
		{
			id: 8,
			first_name: "Carlen",
			last_name: "Le Borgne",
			email: "cleborgne7@vkontakte.ru",
			gender: "Female",
			img: "http://dummyimage.com/179x100.png/5fa2dd/ffffff",
			active: true,
		},
		{
			id: 9,
			first_name: "Tristan",
			last_name: "Pfiffer",
			email: "tpfiffer8@devhub.com",
			gender: "Male",
			img: "http://dummyimage.com/176x100.png/dddddd/000000",
			active: true,
		},
		{
			id: 10,
			first_name: "Edee",
			last_name: "Ruggieri",
			email: "eruggieri9@independent.co.uk",
			gender: "Female",
			img: "http://dummyimage.com/227x100.png/dddddd/000000",
			active: true,
		},
		{
			id: 11,
			first_name: "Codi",
			last_name: "Fitter",
			email: "cfittera@stanford.edu",
			gender: "Female",
			img: "http://dummyimage.com/198x100.png/cc0000/ffffff",
			active: true,
		},
		{
			id: 12,
			first_name: "Brnaba",
			last_name: "Murdoch",
			email: "bmurdochb@yolasite.com",
			gender: "Male",
			img: "http://dummyimage.com/188x100.png/ff4444/ffffff",
			active: true,
		},
		{
			id: 13,
			first_name: "Marji",
			last_name: "Aizik",
			email: "maizikc@uiuc.edu",
			gender: "Non-binary",
			img: "http://dummyimage.com/161x100.png/ff4444/ffffff",
			active: true,
		},
		{
			id: 14,
			first_name: "Heinrick",
			last_name: "MacPherson",
			email: "hmacphersond@shop-pro.jp",
			gender: "Male",
			img: "http://dummyimage.com/241x100.png/dddddd/000000",
			active: true,
		},
		{
			id: 15,
			first_name: "Hamnet",
			last_name: "Best",
			email: "hbeste@vkontakte.ru",
			gender: "Male",
			img: "http://dummyimage.com/218x100.png/dddddd/000000",
			active: true,
		},
		{
			id: 16,
			first_name: "Johnnie",
			last_name: "Vannah",
			email: "jvannahf@flavors.me",
			gender: "Male",
			img: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
			active: true,
		},
		{
			id: 17,
			first_name: "Sherline",
			last_name: "Orro",
			email: "sorrog@fda.gov",
			gender: "Female",
			img: "http://dummyimage.com/202x100.png/ff4444/ffffff",
			active: true,
		},
		{
			id: 18,
			first_name: "Celestyna",
			last_name: "Weson",
			email: "cwesonh@geocities.com",
			gender: "Female",
			img: "http://dummyimage.com/222x100.png/ff4444/ffffff",
			active: true,
		},
		{
			id: 19,
			first_name: "Ronny",
			last_name: "Antunes",
			email: "rantunesi@engadget.com",
			gender: "Male",
			img: "http://dummyimage.com/184x100.png/ff4444/ffffff",
			active: true,
		},
		{
			id: 20,
			first_name: "Saunders",
			last_name: "Shird",
			email: "sshirdj@businessweek.com",
			gender: "Polygender",
			img: "http://dummyimage.com/139x100.png/cc0000/ffffff",
			active: true,
		},
	];

	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">First Name</TableCell>
						<TableCell className="tableCell">Last Name</TableCell>
						<TableCell className="tableCell">Email</TableCell>
						<TableCell className="tableCell">Gender</TableCell>
						<TableCell className="tableCell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="tableCell">
								<div className="cellWrapper">
									<img src={row.img} alt={row.first_name} className="image" />
									{row.first_name}
								</div>
							</TableCell>
							<TableCell className="tableCell">{row.last_name}</TableCell>
							<TableCell className="tableCell">{row.email}</TableCell>
							<TableCell className="tableCell">{row.gender}</TableCell>
							<TableCell className="tableCell">
								<span className={`status ${row.active ? "Active" : "Paused"}`}>
									{row.active ? "Active" : "Paused"}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
