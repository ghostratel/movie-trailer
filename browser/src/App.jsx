import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import { BrowserRouter, Route } from 'react-router-dom'
import PageIndex from './pages/index/index'
import PageSearch from './pages/search/index'
import PageRank from './pages/rank/index'
import PageBookcase from './pages/bookcase/index'
import PageCategory from './pages/category/index'
import PageBooklist from './pages/booklist/index'
import PageDetail from './pages/detail/index'
import 'amfe-flexible/index.min.js'
import 'normalize.css'
import './assets/iconfont/iconfont.css'
import './App.scss'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Fragment>
						<Header />
						<Nav />
						<Route path='/' exact component={PageIndex} />
						<Route path='/search' exact component={PageSearch} />
						<Route path='/rank' exact component={PageRank} />
						<Route path='/category/:sex' component={PageCategory} />
						<Route path='/bookcase' exact component={PageBookcase} />
						<Route path='/booklist/:cateID' exact component={PageBooklist}/>
						<Route path='/book/:novelID' exact component={PageDetail}/>
					</Fragment>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App
