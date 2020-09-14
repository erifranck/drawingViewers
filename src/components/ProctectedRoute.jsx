import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ layout: Layout, component: Component,...props }) => {
      if (props.validator()) {
            return (
                  <Redirect to={props.redirectionPath} />
            )
      }
      return (
            <Route {...props} render={(componentProps) => (
                  <Layout>
                        <Component {...componentProps}/>
                  </Layout>
            )}/>
      )
}
