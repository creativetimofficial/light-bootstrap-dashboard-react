import React, { Component } from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';

export class Tasks extends Component{
    render(){
        const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
        const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);
        const tasks_title = [
            'Sign contract for "What are conference organizers afraid of?"',
            'Lines From Great Russian Literature? Or E-mails From My Boss?',
            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi',
            'Create 4 Invisible User Experiences you Never Knew About',
            'Read "Following makes Medium better"',
            'Unfollow 5 enemies from twitter'
        ];
        var tasks = [];
        var number;
        for (var i = 0; i < tasks_title.length; i++) {
            number = "checkbox"+i;
            tasks.push(
                <tr key={i}>
                    <td>
                        <div className="checkbox">
                            <input id={number} type="checkbox" />
                            <label htmlFor={number}>
                            </label>
                        </div>
                    </td>
                    <td>{tasks_title[i]}</td>
                    <td className="td-actions text-right">
                        <OverlayTrigger placement="top" overlay={edit}>
                            <button type="button" className="btn btn-info btn-simple btn-xs">
                                <i className="fa fa-edit"></i>
                            </button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={remove}>
                            <button type="button"className="btn btn-danger btn-simple btn-xs">
                                <i className="fa fa-times"></i>
                            </button>
                        </OverlayTrigger>

                    </td>
                </tr>
            );
        }
        return (
            <tbody>
                {tasks}
            </tbody>
        );
    }
}

export default Tasks;
