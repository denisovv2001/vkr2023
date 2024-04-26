import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import * as say from './say.js';
import { print_num } from './print_num.js';
import { print_web } from './print_web.js';
const user = {
	name: 'Denisov Vasiliy',
};
var string1 = "Я";
var string2 = "тестовая строка";

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
				<h1>{user.name}</h1>
				{say.sayHi('John')} 
				{say.sayBye('John')}
				{console.log(string1, string2)}
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="novomych">
					Show me the New Martyr, please
				</Button>
			</Div>
			<Div>
				<h2>Программа на JavaScript</h2>
				{print_num()}
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
