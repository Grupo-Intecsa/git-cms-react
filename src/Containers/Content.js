import React, { Fragment, Suspense } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import routes from '../routers'

const loading = (
    <div className="pt-3 text-center">
    <div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
    </div>
)

const Content = () => {
    return (
        <Fragment>
                <Suspense fallback={loading}>
                    <Switch>
                        {
                            routes
                                .map((route, idx) => {
                                    return route.component && (
                                        <Route 
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <div>
                                                    <route.component {...props} />
                                                </div>
                                            )}
                                        />
                                    )
                                })
                        }
                    <Redirect from="/" to="/landing"/>
                    </Switch>
                </Suspense>
        </Fragment>
    )
}

export default React.memo(Content)

