import React from 'react';

export default () => (
    <div className="row">
        <div className="col-sm-6">
            <h3>Įgūdžiai</h3>
            <div className="skills">
                <div className="row">
                    <div className="col-sm-12">
                    <h5>{<i className="material-icons">fiber_manual_record</i>} ReactJS</h5>
                    <br />
                    <h5>{<i className="material-icons">fiber_manual_record</i>} Redux</h5>
                    <br />
                    <h5>{<i className="material-icons">fiber_manual_record</i>} CSS</h5>
                    <br />
                    <h5>{<i className="material-icons">fiber_manual_record</i>} MaterialUI</h5>
                    <br />
                    <h5>{<i className="material-icons">fiber_manual_record</i>} Bootstrap</h5>
                    <br />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
            <h3>Asmeninės savybės</h3>
            <div className="personal">
                <div className="row">
                    <div className="col-sm-12">
                        <h5>Žingeidus {<i className="material-icons">laptop_chromebook</i>}</h5>
                        <br />                  
                        <h5>Noras tobulėti {<i className="material-icons">done</i>}</h5>
                        <br />
                        <h5>Problemų sprendimas {<i className="material-icons">sentiment_satisfied_alt</i>}</h5>
                        <br />
                        <h5>Darbas komandoje {<i className="material-icons">group_work</i>}</h5>
                        <br />
                        <h5>Laiko planavimas {<i className="material-icons">access_time</i>}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
);