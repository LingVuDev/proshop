import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
          </Container>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    )
  }
}

export default App
