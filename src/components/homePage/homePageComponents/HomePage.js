import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import TabsComponent from './TabsComponent';
import ShortIntro from './ShortIntro';

export default () => (
    <div className="container">
        <HeaderComponent />
        <hr />
        <div className="centered">
            <ShortIntro />
            <TabsComponent />
        </div>
        <hr />
        <FooterComponent />
    </div>
);