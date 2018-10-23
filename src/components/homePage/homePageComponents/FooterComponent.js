import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default () => (
    <div className="footer">
        <div className="row">
            <div className="col-sm-4">
                <h5>Šis puslapis yra skirtas darbdaviams, žiūrintiems į mane kaip į potencialų naują komandos narį.</h5>
            </div>
            <div className="col-sm-4">
                <h5>
                    Puslapyje naudojama: ReactJS, Material-UI, Bootsrap v4.
                </h5>
            </div>
            <div className="col-sm-4">
                <div className="btn-group" role="group">
                    <div className="col-sm-6">
                        <SocialIcon url="https://www.linkedin.com/in/justinas-andriekus-b51072155/" color="E8630C" />
                    </div>
                    <div className="col-sm-6">
                        <SocialIcon url="https://github.com/andriekus" color="#E8630C" />
                    </div>
                </div>
                <div className="mediaButtons">
                    <div className="row">
                        <div className="col-sm-12">
                            <SocialIcon url="https://www.linkedin.com/in/justinas-andriekus-b51072155/" color="E8630C" />
                            <SocialIcon url="https://github.com/andriekus" color="#E8630C" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <h6>{<a href="mailto:andriekus.justinas@gmail.com">andriekus.justinas@gmail.com</a>}</h6>
        <h6>{<a href="tel:+37062958214">+37062958214</a>}</h6>
        <h5>Lapą kūrė Justinas Andriekus</h5>
    </div>
);