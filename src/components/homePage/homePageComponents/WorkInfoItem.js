import React from 'react';

const workItem = ({ title, position, startDate, endDate, duration, learned }) => (
        <div className="col-sm-4">
            <h4>{<i className="material-icons">work</i>} {title}</h4>
            <h5>{<i className="material-icons">perm_identity</i>} {position}</h5>
            <h6>{<i className="material-icons">timeline</i>} {startDate} - {endDate}</h6>
            <h6>{<i className="material-icons">hourglass_full</i>} {duration}</h6>
            <h6>{learned}</h6>
        </div>
);

export default workItem;