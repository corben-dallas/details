import React, { Fragment } from 'react';

const List = ({ users, onSelectUser }) => {
	return (
		<div>
			{users && !!users.length && users.map(o => (
				<p 
					key={o.id}
					onClick={() => onSelectUser(o.id)}
				>
						{o.name}
				</p>
			))}
		</div>
	)
};

export default List;
