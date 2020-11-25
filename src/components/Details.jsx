import React, { useEffect, useState } from 'react'

const Details = ({ selected }) => {
	const [userInfo, setUserInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true)
		const data = getUserInfo(selected);
		data
			.then(resp => {
				setUserInfo(resp);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err.message);
				setIsLoading(false);
			})
	}, [selected])

	const getUserInfo = async(id) => {
		let json = null;
		const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
		if (response.ok) {
			json = response.json();
		}
		return json;
	}

	return (
		userInfo && userInfo.details && 
		<div>
			{isLoading ?  
				<p>Loadding...</p>:
				<div>
					<img src={userInfo.avatar} alt="avatar" style={{width: '300px', height: '300px'}}/>
					<p>{userInfo.name}</p>
					<p>Details: </p>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<span>{userInfo.details.city}</span>
						<span>{userInfo.details.company}</span>
						<span>{userInfo.details.position}</span>
					</div>
				</div>
			}
		</div>
	)
}

export default Details
