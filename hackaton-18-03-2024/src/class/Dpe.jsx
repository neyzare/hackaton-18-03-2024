import React from 'react';

class Dpe extends React.Component {
  constructor(props) {
    super(props);
    this.dpe = props.dpe;
    this.state = {};
  }

  getAdress() {
    fetch('https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/trouve_adresse/2362E0868302S', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2RhX3NjaG9vbF9zdHVkZW50IiwiZXhwIjoxNzEwNzkzNTE3fQ.OS4ON7Fft5TXxF7elpA15e9VElad2cm2-wJdxxXdlZ4'`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      this.setState({ adresse: 'hello' });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de l\'adresse:', error);
    });
  }

  render() {
    return (
      <div>
        <h1>Bonjour, je m'appelle {this.state.nom} et j'ai {this.state.age} ans.</h1>
      </div>
    );
  }
}

export default Dpe;