import React from 'react';

const rrd = require('react-router-dom');

// Just render a fragment with its children
rrd.BrowserRouter = ({ children }) => <>{children}</>;
module.exports = rrd;
