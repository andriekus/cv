import React from 'react';
import IntroRows from './IntroRows';
import uuid from 'uuid';

const facts = [
    "Esu antro kurso studentas Kauno technologijos universitete",
    "Žingeidus, savamokslis bei siekiantis aukščiausių tikslų",
    "Taip, labai mėgstu oranžinę spalvą... Internetiniuose puslapiuose"


];

export default () => (
    <div>
        <h3>Kodėl taip?</h3>
        <hr />
        <div className="row">
            <div className="col-sm-12">
                <p>{<i className="material-icons">invert_colors</i>} Oranžinė spalva man simbolizuoja šilumą, taiką ir gerovę, todėl jos čia netrūksta.</p>
            </div>
        </div>
        <hr />
        <h3>Trumpai apie mane</h3>
        <hr />
        {facts.map((fact) => {
            return <IntroRows key={uuid()} fact={fact} />
        })}
    </div>
);