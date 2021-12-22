import axios from 'axios';

export const checkIfLoggedIn = async (history) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	try {
		const res = await axios.get('/api/_me', config);
		if (res.status != 200) {
			history.push('/login');
		} else {
			localStorage.setItem('userInfo', JSON.stringify(res.data));
			console.log(res.data);
			return res.data;
		}
	} catch {
		history.push('/login');
	}
	// if()
};
