import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthanticated, component: Component, ...rest }) => <Route {...rest} component={(props) => (isAuthanticated ? <Redirect to='/dashboard' /> : <Component {...props} />)} />;

const mapStateToProps = (state) => ({
  isAuthanticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
