import React from 'react';

const IntroListItem = ({ fact }) => (
    <div className="row">
        <div className="col-sm-1">
            <i className="material-icons">info</i>
        </div>
        <div className="col-sm">
            <div className="factLeft">
                <p>{fact}</p>
            </div>
        </div>
    </div>
);

export default IntroListItem;