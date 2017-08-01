import React, { Component } from 'react';

export class Tasks extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const tasks_title = ['Sign contract for "What are conference organizers afraid of?"',
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
                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                            <i className="fa fa-times"></i>
                        </button>
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
