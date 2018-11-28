import React from 'react'
//import PropTypes from 'prop-types'
import List from './List'
console.log(ur);
console.log(url);
const SocketList = ({ url }) => (
	<section id="messages-list">
		<ul>
            {url.map(ur => (
                <List
                    key={ur.id}
                    {...ur}
                />
               
			))}
		</ul>
	</section>
)

export default SocketList;