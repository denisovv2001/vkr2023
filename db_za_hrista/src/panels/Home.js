import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { print_num } from './print_num.js';
const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
const description = 'Gregorio Y. Zara';
/*			<Div>
				<input type="text" class="form-control" name="name" id="name" value="1" placeholder="Имя"/>
				<button class="btn btn-default" onclick={alert(document.getElementById('name').value)}>Отправить</button>
			</Div>*/

const today = new Date();

function formatDate(date) {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
	}).format(date);
}

const name = 'Gregorio Y. Zara';
let _content_in_js = 'Denisov Vasiliy';
console.log('cont do: %d',_content_in_js)

const handleClick = () => { // действие на нажатие кнопки
	alert("Button clicked!");
	_content_in_js = print_num();
	console.log('cont posle: %d',_content_in_js)
};

class App extends React.Component {
	state = {
		text: 'something'
	}
	onClickButton1 = () => {
		this.setState({
			text: 'clicked 1'
		});
	}
	render(){
		return (
			<div>
				<button onClick={this.onClickButton1}>
					Button 1
				</button>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}
let test_l = new App();


const Home = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="novomych">
					Show me the New Martyr, please
				</Button>
				<Button mode='secondary' onClick={go} data-to='display'>
					Programm in JavaScript
				</Button>
			</Div>

			<Div>
				<img
					className="avatar"
					src="https://i.imgur.com/7vQD0fPs.jpg"
					alt="Gregorio Y. Zara"
				/>
				{alert('Hello')}
				
				<img
					className="avatar"
					src={avatar}
					alt={description}
				/>
			</Div>
			<Div>
				<h1>To Do List for {formatDate(today)}</h1>
				<h1>{name}'s To Do List</h1>
			</Div>
			<Div>{_content_in_js}</Div>
			<Div>
				<center>
					<button
						style={{
							color: "white",
							backgroundColor: "black",
							padding: "10px 15px",
						}}
						onClick={handleClick}
					>
						Click me
					</button>
				</center>
			</Div>
			<Div>
				{test_l.render()}
			</Div>
		</Group>
	</Panel>
);




Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
