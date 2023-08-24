export const studentsColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "student",
		headerName: "Student",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img
						src={params.row.img}
						alt={params.row.first_name}
						className="cellImg"
					/>
					{params.row.first_name} {params.row.last_name}
				</div>
			);
		},
	},
	{ field: "gender", headerName: "Gender", width: 130 },
	{ field: "email", headerName: "Email", width: 230 },
	{
		field: "status",
		headerName: "Status",
		width: 130,
		renderCell: (params) => {
			return (
				<div
					className={`cellWithStatus ${
						params.row.active ? "active" : "paused"
					}`}
				>
					{params.row.active ? "Active" : "Paused"}
				</div>
			);
		},
	},
];

// Temporary data for testing
export const studentsRows = [
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
