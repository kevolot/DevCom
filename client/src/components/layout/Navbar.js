/*
 * Filename: /Users/heydaykk/Desktop/Desktop - macOS-i7-4770HQ/Development/DevCom/client/src/components/layout/Navbar.js
 * Path: /Users/heydaykk/Desktop/Desktop - macOS-i7-4770HQ/Development/DevCom/client
 * Created Date: Tuesday, November 19th 2019, 9:30:15 pm
 * Author: Chen Zhengcheng
 * 
 * Copyright (c) 2019 Your Company
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/landing">DevCom</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles"> Developers
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

