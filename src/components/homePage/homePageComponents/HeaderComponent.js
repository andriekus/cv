import React from 'react';
import AvatarComponent from './AvatarComponent';

export default () => (
    <div className="header">
        <div className="row">
            <div className="col-sm-6">
                <img src="https://scontent.fvno3-1.fna.fbcdn.net/v/t1.0-9/17553959_1271831666270690_8022462577852088696_n.jpg?_nc_cat=100&_nc_ht=scontent.fvno3-1.fna&oh=ccaf3ec209e6838260e92122ffe7ecc9&oe=5C5840BC" alt="as" />
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