import React from 'react';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: "l'Iot en Action",
    content: "Dans un monde connecté, l'IoT émerge comme catalyseur majeur de transformation. Des dispositifs intelligents, dotés de capteurs sophistiqués, communiquent pour améliorer la qualité de vie. De la gestion énergétique à la santé, l'IoT ouvre des possibilités d'innovation. ",
  },
  {
    key: '2',
    title: "Robotique Révolutionnaire",
    content: "La robotique transforme notre monde avec des machines autonomes et intelligentes. De l'industrie manufacturière à l'exploration spatiale, ces robots innovants améliorent l'efficacité et ouvrent de nouvelles possibilités technologiques",
  },
  {
    key: '3',
    title: "Fusion Futuriste : IoT et Robotique",
    content: "Lorsque l'IoT rencontre la robotique, une nouvelle ère d'efficacité émerge. Des environnements intelligents à la production automatisée, cette fusion crée des systèmes adaptatifs. En exploitant les données pour informer les actions des robots, cette synergie redéfinit les normes de performance.",
  },
];

class AppHero extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.next();
    }, 5000); // Changement toutes les 6 secondes
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  next() {
    this.carousel.next();
  }

  render() {
    return (
      <div id="hero" className="heroBlock">
        <Carousel ref={el => (this.carousel = el)}>
          {items.map(item => {
            return (
              <div key={item.key} className="container-fluid">
                <div className="content">
                  <h3 style={{ fontSize: '2em' }}>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>  
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default AppHero;
