// Run this example by adding <%= javascript_pack_tag '<name of this file>' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DummyProfilePicture from "images/no-face-wiki-profile-picture.png";

const TopNav = () => (
  <div className="w-screen fixed top-0 drop-shadow-md mx-auto h-12">
    TOP NAVIGATION
  </div>
);

const SideNav = () => (
  <div className="fixed right-0 lg:w-36 md:w-28 sm:w-24">
    <div className="grid grid-cols-1 divide-y">

      <div className="flex flex-col">
        <div>Sponsored</div>
        <div>{/* render a couple fake ads here */}</div>
      </div>
      <div className="flex flex-col">
      <div>Friends</div>
      <div>{/* render friend users here */}</div>
      </div>
    </div>
  </div>
);

const CreatePost = () => (
  <div className="flex w-72">
  <img className="w-10 h-10 rounded-full mr-2" src={DummyProfilePicture} />
  <input className="w-full rounded-lg default:bg-slate-200 default:text-slate-500" placeholder="What's on your mind, USER?" type="text" />
  </div>
);

const Feed = () => (
  <div className="flex flex-auto flex-col">
  <CreatePost />
    posts here
  </div>
);

const App = props => (
  <div>
  <TopNav />
  <div className="mt-12 w-screen ">
  <Feed />
  <SideNav />
  </div>
  </div>
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
