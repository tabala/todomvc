import {render, screen} from '@testing-library/react';
import React = require('react');

var TodoApp = require('./app')
var TodoModel = require('./todoModel')

var model = new TodoModel('react-todos');

describe('App', () => {
	test('renders App component', () => {
		render(<TodoApp model={model}/>);
		screen.debug();
	});
});
