import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

class App extends React.Component {
  state = {
    title: 'Beata Rudzka',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'Projects', path: '/Projects' },
      { title: 'Contact', path: '/Contact' }
    ],
    home: {
      title: 'Cześć, jestem Beata',
      subtitle: 'Web developer',
      text: 'Więcej o mnie'
    },
    projects: {
      title: 'Moje projekty',
    },
    contact: {
      title: 'Porozmawiajmy',
    }
  }
  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom">
            <Navbar.Brand>Beata Rudzka</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    )
  }
}

export default App
