import React from 'react';
import Helmet from 'react-helmet';

const NoScript = (props) => {
    return <noscript>
        <Helmet>
        <link rel="stylesheet"  href="./NoScript.css"/>
        </Helmet>
    </noscript>
}

export default NoScript;