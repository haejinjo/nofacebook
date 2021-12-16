// Run this example by adding <%= javascript_pack_tag '<name of this file>' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Nav = () => (
  <div className="text-xl">
    TOP NAVIGATION
  </div>
)
const App = props => (
  <>
  <Nav />
  <div>Hello {props.name}!</div>
  </>
)

App.defaultProps = {
  name: 'David'
}

App.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
