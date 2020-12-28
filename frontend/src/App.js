import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main className="py-3">
          <Container>
            <HomeScreen></HomeScreen>
          </Container>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
