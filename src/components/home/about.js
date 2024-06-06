import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Raspberry Pi',
    content: "Ordinateur monocarte polyvalent pour exécuter un système d'exploitation et interagir avec des périphériques.",
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Capteurs et actionneurs',
    content: "Instruments pour percevoir et interagir avec l'environnement, comme des caméras, des capteurs de distance et des moteurs.",
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'MQTT et logiciels',
    content: "intégration de bibliothèques MQTT pour la communication, ainsi que l'utilisation de WebSocket pour des communications en temps réel.",
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Contexte du Projet </h2>
        </div>
        <div className="contentHolder">
          <p>Nous sommes Riadh Halila et Jamel Benkhalifa, étudiants en licence Réseaux et IoT à l'Université Virtuelle de Tunis. Bien que nous venions de disciplines diversifiées, Riadh en gestion financière et Jamel en technologie de l'information, nous avons collaboré pour développer un "Robot Superviseur" pour notre projet de fin d'études. Ce projet innovant intègre les technologies de l'IoT et de la robotique pour créer un système capable de surveiller divers environnements.<br/> Notre objectif est de démontrer comment ces avancées technologiques peuvent améliorer la surveillance, l'efficacité opérationnelle et la sécurité. </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        <p> <b>Architecture Matérielle : Assemblage et Composants du Robot</b> :<br/> La partie hardware du projet se concentre sur l'assemblage et l'intégration des composants physiques du robot. Le processus d'assemblage comprend le montage du kit robot, l'installation des servomoteurs pour le mouvement, l'intégration de capteurs ultrason pour la détection d'obstacles, ainsi que l'ajout de roues et de batteries pour l'alimentation. Cette phase de développement matériel vise à créer une plateforme physique stable et fonctionnelle pour le contrôle du robot.</p>
        <p><b>Développement Logiciel : Site Web et Intégration des Technologies</b> :<br/> La partie software de ce projet repose sur le développement d'un site web interactif pour le contrôle du robot à distance. Le site web est construit en utilisant des technologies modernes telles que React pour l'interface utilisateur, HTML, CSS et JavaScript pour la présentation et l'interaction, ainsi que Python pour la gestion des fonctionnalités côté serveur. Le code d'exécution Python est spécialement conçu pour interagir avec les composants matériels du robot, recevoir et traiter les commandes de contrôle, et assurer la connectivité avec le protocole MQTT. </p>
        <p><b>Connectivité Sécurisée: Protocole MQTT avec WebSockets</b> :<br/>La connectivité entre le site web et les robots est établie grâce à une combinaison du protocole MQTT et des WebSockets. MQTT assure une communication légère et efficace entre le site web et les robots, tandis que les WebSockets permettent une connexion bidirectionnelle en temps réel pour une interaction fluide. Cette approche garantit une connectivité sécurisée et fiable, tout en offrant la possibilité de contrôler les robots à distance de manière réactive et instantanée. </p>
      </div>
    </div>
  );
}

export default AppAbout;