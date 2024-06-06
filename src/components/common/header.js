import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import uvt from '../../assets/images/uvt.png';

const { Link } = Anchor;

function AppHeader({ loggedIn, onLogout }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="header" style={{ position: 'relative' }}>
        <div className="logo" style={{ position: 'absolute', top: '0', left: '0', zIndex: '9999' }}>
          <img src={uvt} style={{ maxWidth: '500px', maxHeight: '100px' }} alt="Logo" /> 
        </div>
        <div style={{ marginLeft: '120px' }}> 
          <a href="#hero" style={{ fontWeight: 'bold', fontSize: '35px' }}>Robot Superviseur</a>
        </div>

        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Accueil" />
            <Link href="#about" title="Contexte" />
            <Link href="#feature" title="Technologies" />
            {/* <Link href="#works" title="How it works" /> */}
            {loggedIn ? (
              <>
                <Link href="#robot-control" title="Streaming" />
                <Link href="#logout" className="header-link">
                  <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={handleLogout}>Logout</a>
                </Link>
              </>
            ) : (
              <Link href="#login" title="Login" />
            )}
          </Anchor>
        </div>

        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              {loggedIn ? (
                <>
                  <Link href="#robot-control" title="Streaming" />
                  <Link className="header-link" onClick={handleLogout} title="Logout" />
                </>
              ) : (
                <Link href="#login" title="Login" />
              )}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
