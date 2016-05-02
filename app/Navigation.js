// import React from "react";
// import IndexLink from "react-router";
// import Link from "react-router";

// var React = require('react');
// var IndexLink = require('react-router').IndexLink;
// var Link = require('react-router').Link;

import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
     var collapsed = !this.state.collapsed;
     this.setState({collapsed:collapsed});
  }

  render(){
    return (
        <div>
          <p>asdasdasasdadasd</p>
        </div>
      )
  }

  // render() {
  //   var location = this.props.location;
  //   var collapsed = this.state.collapsed;
  //   var featuredClass = location.pathname === "/" ? "active" : "";
  //   var archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
  //   var settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
  //   var navClass = collapsed ? "collapse" : "";

  //   return (
  //     <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  //       <div class="container">
  //         <div class="navbar-header">
  //             <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
  //             <span class="sr-only">Toggle navigation</span>
  //             <span class="icon-bar"></span>
  //             <span class="icon-bar"></span>
  //             <span class="icon-bar"></span>
  //           </button>
  //           <a class="navbar-brand" href="#">News feed</a>
  //         </div>
  //         <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
  //           <ul class="nav navbar-nav">
  //             <li class={featuredClass}>
  //               <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
  //             </li>
  //             <li class={archivesClass}>
  //               <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
  //             </li>
  //             <li class={settingsClass}>
  //               <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }
}
