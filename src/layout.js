import React from 'react';
import _ from 'lodash'
import moment from 'moment'
import highcharts from 'highcharts'
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {};

export default Layout;