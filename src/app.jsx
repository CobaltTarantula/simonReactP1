import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
export default function App() {
  return (
    <BrowserRouter>
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
	<nav className='navbar fixed-top navbar-dark'>
	  <div className='navbar-brand'>
	    Simon<sup>&reg;</sup>
	  </div>
	  <menu className='navbar-nav'>
	    <li className='nav-item'>
	      <NavLink className='nav-link' to=''>
		Login
	      </NavLink>
	    </li>
	    <li className='nav-item'>
	      <NavLink className='nav-link' to='play'>
		Play
	      </NavLink>
	    </li>
	    <li className='nav-item'>
	      <NavLink className='nav-link' to='scores'>
		Scores
	      </NavLink>
	    </li>
	    <li className='nav-item'>
	      <NavLink className='nav-link' to='about'>
		About
	      </NavLink>
	    </li>
	  </menu>
	</nav>
      </header>

      <main>App components go here</main>

      <footer className='bg-dark text-white-50'>
        <div className='container-fluid'>
          <span className='text-reset'>Author Name(s)</span>
          <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
            Source
          </a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}