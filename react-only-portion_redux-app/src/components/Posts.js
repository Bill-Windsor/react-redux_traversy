import React, { Component } from 'react';

// For now, we put the Class Posts in the Component State; 
//   later we will put State in the Application State
class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		console.log("ComponentDidMount in Posts.js");
//	Below: we could use 'fetch' or 'axios' for the API fetch
		fetch('https://jsonplaceholder.typicode.com/posts')  
			.then(res => res.json())
//			.then(data => console.log(data))
			.then(data => this.setState({ posts: data }));
	}

	render() {
		const postItems = this.state.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

export default Posts;
