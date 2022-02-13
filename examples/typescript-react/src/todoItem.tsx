/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="./interfaces.d.ts"/>

import * as classNames from "classnames";
import * as React from "react";
import {ENTER_KEY, ESCAPE_KEY} from "./constants";
import {useState} from "react";

export const TodoItem = ({
													 todo,
													 editing = false,
													 onSave,
													 onDestroy,
													 onEdit,
													 onCancel,
													 onToggle
												 }: ITodoItemProps) => {

	const [inputState, setInputState] = useState<string>(`${todo.title} ${todo.tags}`);

	const handleSubmit = () => {
		if (inputState) {
			onSave(inputState);
		} else {
			onDestroy();
		}
	}

	const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target
		setInputState(value)
	}

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.keyCode === ESCAPE_KEY) {
			// setItemState({title: todo.title, tags: todo.tags});
			setInputState(`${todo.title} ${todo.tags}`)
			onCancel(event);
		} else if (event.keyCode === ENTER_KEY) {
			handleSubmit();
		}
	}

	const handleEdit = () => {
		onEdit();
	}

	return (
		<li className={classNames({
			completed: todo.completed,
			editing: editing
		})}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={todo.completed}
					onChange={onToggle}
				/>
				<div style={{display: "flex", justifyContent: "space-between"}} onDoubleClick={e => handleEdit()}>
					<label>{todo.title}</label>
					<div style={{display: "flex"}}>
						{todo?.tags &&
						(
							<label style={{color: "red"}}>
								{todo.tags}
							</label>
						)}

						<button style={{display: "block", position: "relative"}} className="destroy"
										onClick={onDestroy}/>
					</div>
				</div>
			</div>
			<input
				className="edit"
				type="text"
				id="title input"
				value={inputState}
				onBlur={e => handleSubmit()}
				onChange={e => handleChange(e)}
				onKeyDown={e => handleKeyDown(e)}
			/>
		</li>
	);

}
