import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
/*
function dataField(_form) {
	alert("Вы ввели: " + _form.char.value);

	//var iterator = prompt(('enter num', '1 or 2')); // ввод значения в диалоговом окне
	var toWebBrowser = "";
	var iterator = document.getElementById('testing').value; // значение итератору присваивается из формы
	for(var i=1; i<=iterator; i++){
		toWebBrowser += i;
	}
	//Показываем значение JavaScript переменной в HTML теге
	document.getElementById("myMessage").innerHTML = toWebBrowser; 
} 
<form id='sum_form'>
<div>Input count of iterator (5, 10 or other)</div>
<p><input type='number' name='char'value='10' id='testing'/></p>
<p><input type='button' onClick={dataField()}/></p>
</form>
*/

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		<h2>Программа на JavaScript</h2>
		<i id='myMessage'>Текст выделен курсивом</i>

	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
