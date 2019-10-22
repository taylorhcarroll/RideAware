import React, { Component } from 'react';
import KidCard from './KidCard'


class KidsList extends Component {
	state = {
		myCard: ''
	};

	// handleDelete = id => {
	// 	EventsManager.delete(id).then(() => {
	// 		this.props.getData();
	// 	});
	// };

	componentDidMount() {
	 }

	render() {
		return (
			<>
            <p>Hello this is a Kid List</p>
            <KidCard
						// key={article.id}
						// article={article}
						{...this.props}
						// getData={this.getData}
					/>
            </>
		);
	}
}

export default KidsList;
