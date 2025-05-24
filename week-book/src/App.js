import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Name } from './components/Name';
import { Price } from './components/Price';
import { Description } from './components/Description';
import { Image } from './components/Image';

const firstName = "Hanane";

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem', margin: '0 auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Hello, {firstName ? firstName : 'there'}!</h3>
        {firstName && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            style={{ width: '80px', borderRadius: '50%', marginTop: '10px' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
