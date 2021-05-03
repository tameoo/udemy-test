import React from 'react'
import { Header } from '../Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer'
import { Promotion } from '../Promotion'
import { Auth } from '../Auth'
import { Route } from 'react-router-dom'
import { PrivateRoute } from '../PrivateRoute'
import './App.css'

const App = () => {

	return (
		<div className="app">
			<Header />
			<Route exact path="/" component={Promotion} />
			<Route path="/sign-in">
				<Auth signIn={true} />
			</Route>
			<Route path="/sign-up">
				<Auth signUp={true} />
			</Route>
			<PrivateRoute path="/main" component={Main} />
			<Footer />
		</div>
	)
}

export { App }
