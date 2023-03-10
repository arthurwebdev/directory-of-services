import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async function () {
		const responseUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
		const responsePhotos = await axios.get('https://jsonplaceholder.typicode.com/photos')

		const usersData = responseUsers.data
		const photosData = responsePhotos.data

		const data = usersData.map(user => ({
			id: user.id.toString(),
			firstName: user.username,
			lastName: user.name.slice(user.name.indexOf(' '), user.name.length),
			phoneNumber1: user.phone,
			login: user.email,
			password: 'pass',
			profileIsAvailable: false,
			profile: {
				email: user.email,
				address: user.address.city,
				phoneNumber2: user.phone,
				avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
				rating: Math.floor(Math.random() * 10),
				gallery: photosData.filter(photos => photos.albumId === user.id)
					.map(photo => ({
						id: photo.id.toString(),
						photo: photo.url,
					})
					),
				linkedin: 'www.linkedin.com/in/arthur-harutyunyan-27a112261/',
				gitHub: 'github.com/arthurwebdev',
				profession: 'Programmer',
				bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsunt here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humoe word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes ofd and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',
				skills: [
					{ id: '1678297965870', skill: 'Html' },
					{ id: '1678297968007', skill: 'Css' },
					{ id: '1678298006719', skill: 'Sass' },
					{ id: '1678298030244', skill: 'JavaScript' },
					{ id: '1678298036045', skill: 'React js' },
					{ id: '1678298039253', skill: 'Java' },
					{ id: '1678298046621', skill: 'C#' }
				],
				experience: [
					{id: '1678297d942346', company: 'Company Name', headline: 'Headline', from: '2023-03-01', to: '2024-07-11'},
					{id: '16782d97959535', company: 'Company Name', headline: ' Headline', from: '2022-01-08', to: 'sitll working'}
				],
				category: '1',
				birthday: '2001-11-17',
				other: 'twitter.com/?lang=ru',
				instagram: 'www.instagram.com/arthurharutyunyan__/',
				facebook: 'www.facebook.com/arthurwebdev/',
				twitter: 'twitter.com/?lang=ru',
				educations: [
					{
						eduEnd: "2023",
						eduStart: "2019",
						faculty: "Institute of Information and Telecommunication Technologies and Electronics",
						id: "167d82973xz220d19",
						specialization: "Software Engineering",
						university: "National Polytechnic University of Armenia",
					},
					{
						eduEnd: "2019",
						eduStart: "2007",
						faculty: " ",
						id: "167829sdcscsdc7322019d",
						specialization: " ",
						university: "Ptghni village secondary school",
					},
					{
						eduEnd: "2015",
						eduStart: "2020",
						faculty: "Software Engineering",
						id: "1s6782973scsdcs220d19",
						specialization: " ",
						university: "TUMO Center for Creative Technologies",
					},
					{
						eduEnd: "2023",
						eduStart: "2023",
						faculty: "Web Development",
						id: "16782d973scsdcs22ss019",
						specialization: " ",
						university: "Tumo Labs",
					},
					{
						eduEnd: "2022",
						eduStart: "2022",
						faculty: "React js",
						id: "16782973sdcdscsdc22d019",
						specialization: " ",
						university: "SmartCode dewelopment school",
					},
				],
				languages: [
					{ id: '16782980dd89308', language: 'Armenian', level: 'Native / Bilingual Proficiency' },
					{ id: '1678d298d150515', language: 'Russian', level: 'Professional Working Proficiency' },
					{ id: '1678d2d98179937', language: 'English', level: 'Elementary Proficiency' }
				],
			},
			reviews: [],
			messenger: [],
		})
		)
		return data
	}
) 