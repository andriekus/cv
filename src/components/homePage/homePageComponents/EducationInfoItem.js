import React from 'react';


const educationItem = ({ title, startDate, endDate, note }) => (
    <div>
        <div className="row">
            <div className="col-sm-12">
                <h4>{<i className="material-icons">location_on</i>} {title}</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <h5>{<i className="material-icons">timeline</i>} {startDate} - {endDate}</h5>
            </div>
        </div>
        {note.length !== 0 &&
            <div className="row">
            <div className="col-sm-12">
                <h6>{<i className="material-icons">subject</i>} {note}</h6>
            </div>
        </div>}
        <hr />
    </div>
);

export default educationItem;