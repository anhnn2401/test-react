import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'

export function renderRouter () {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, idx) => (
            <Route key={idx} exact {...route} />
          ))
        }
      </Switch>
    </Router>
  )
}
