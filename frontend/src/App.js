import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer'
import Header from './components/Header'

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main className="py-3">
          <Container>
            <h1>Welcome To ProShop</h1>
          </Container>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
