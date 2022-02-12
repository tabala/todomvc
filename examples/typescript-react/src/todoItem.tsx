/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="./interfaces.d.ts"/>

import * as classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ENTER_KEY, ESCAPE_KEY } from "./constants";

class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

  public state : ITodoItemState;

  constructor(props : ITodoItemProps){
    super(props);
    this.state = { title: this.props.todo.title, tags: this.props.todo.tags };
  }

	public handleSubmit(event : React.FormEvent) {
		console.log("submit");
		const title = this.state.title.trim();
		var tags = this.state.tags.trim();
    if (tags || title) {
			// todo (i) uncomment
      this.props.onSave(title);
      this.setState({title: title});
    } else {
      this.props.onDestroy();
    }
  }

  public handleEdit() {
    this.props.onEdit();
		console.log("edit")
    this.setState({title: this.props.todo.title, tags: this.props.todo.tags});
  }

  public handleKeyDown(event : React.KeyboardEvent) {
		console.log('key down');
		if (event.keyCode === ESCAPE_KEY) {
      this.setState({title: this.props.todo.title});
      this.props.onCancel(event);
    } else if (event.keyCode === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  public handleChange(event : React.FormEvent) {
		console.log("change");
		var input : any = event.target;
		const split = input.value.split(' ');
		console.log("value", input.value)


		const tags = []
		const title = []
		for (let i = 0; i < split.length; i++) {
			split[i].includes("@") ? tags.push(split[i]) : title.push(split[i])
		}
		console.log(tags)
		console.log(title)

		const tagsJoined = tags.join(" ")
		const titleJoined = title.join(" ")


		this.setState({ title: titleJoined, tags: tagsJoined });
  }

  /**
   * This is a completely optional performance enhancement that you can
   * implement on any React component. If you were to delete this method
   * the app would still work correctly (and still be very performant!), we
   * just use it as an example of how little code it takes to get an order
   * of magnitude performance improvement.
   */
  public shouldComponentUpdate(nextProps : ITodoItemProps, nextState : ITodoItemState) {
    return (
      nextProps.todo !== this.props.todo ||
      nextProps.editing !== this.props.editing ||
      nextState.title !== this.state.title ||
			nextState.tags !== this.state.tags
    );
  }

  /**
   * Safely manipulate the DOM after updating the state when invoking
   * `this.props.onEdit()` in the `handleEdit` method above.
   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
   */
  public componentDidUpdate(prevProps : ITodoItemProps) {
    if (!prevProps.editing && this.props.editing) {
      var node = (ReactDOM.findDOMNode(this.refs["editField"]) as HTMLInputElement);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  public render() {
    return (
      <li className={classNames({
        completed: this.props.todo.completed,
        editing: this.props.editing
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
					<div style={{display: "flex", justifyContent: "space-between"}} onDoubleClick={ e => this.handleEdit() }>
						<label>
							{this.props.todo.title}
						</label>
						<div style={{display: "flex"}}>
						<label  style={{color: "red"}}>
							{this.props.todo.tags}
						</label>
						<button style={{display: "block", position: "relative"}} className="destroy" onClick={this.props.onDestroy} />
						</div>
					</div>
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.state.title + " " +  this.state.tags}
          onBlur={ e => this.handleSubmit(e) }
          onChange={ e => this.handleChange(e) }
          onKeyDown={ e => this.handleKeyDown(e) }
        />
      </li>
    );
  }
}

export { TodoItem };
