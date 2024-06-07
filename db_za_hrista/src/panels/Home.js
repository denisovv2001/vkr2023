import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import novomych from '../img/novomych.jpg';
import './Novomychenik.css';

const Home = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<Group header={<Header mode="secondary">Navigation</Header>}>
			<Div>
				<Button stretched size="l" mode='secondary' onClick={go} data-to='display'>
					Интерфейс поиска по базе данных "За Христа пострадавшие"
				</Button>
			</Div>

			<Div>
				<img 
					className="Novomychenik"
					src={novomych} 
					alt="For Christ, the victims"
				/>
				{alert('Hello')}
			</Div>
		</Group>
		<PanelHeader>Посетитель</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
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
