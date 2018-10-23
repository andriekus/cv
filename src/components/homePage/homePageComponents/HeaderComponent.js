import React from 'react';
import AvatarComponent from './AvatarComponent';

export default () => (
    <div className="header">
        <div className="row">
            <div className="col-sm-6">
                <div className="avatar">
                    <AvatarComponent />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="centeredHeader">
                    <h2>Gyvenimo aprašymas</h2>
                    <h3>Justinas Andriekus</h3>
                    <h6>Kaunas</h6>
                </div>
            </div>
        </div>
    </div>
);