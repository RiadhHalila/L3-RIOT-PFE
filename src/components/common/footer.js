import React from 'react';
import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="https://www.uvt.rnu.tn">Université Virtuelle de Tunis</a>
        </div>
        
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Licence en Technologies de l'information et de la communication : Réseaux IoTs</h4>
            <p><strong>Titre du Projet:</strong> Remote Controlled Robot</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:email@example.com">etudiant.halila.riadh@uvt.tn</a></p>
            <p>Email: <a href="mailto:email@example.com">etudiant.benkhalifa.jamel@uvt.tn</a></p>
          </div>


          <div className="footer-section">
            <p><a href="https://github.com"><i className="fab fa-github"></i> GitHub</a></p>
          </div>

        </div>

        <div className="copyright">
          &copy; 2024 RIADH & JAMEL. Tous droits réservés.
        </div>

        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
