import React, { useEffect, useState } from "react";
import Sidebar from "./app/layout/sidebar";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Mail from "./app/layout/mail";
import { addMail } from "./app/actions";
import { store } from "./app/store";
import './style.sass';

const App = ({addMailAction, mails}) => {

  useEffect(() => {
    addMailAction();
    setInterval(() => {
      addMailAction();
    }, 90000);
    console.log('mails', mails);
    console.log('store', store.getState());
  }, []);
  const [width, setWidth] = useState(window.innerWidth);
  const [detail, setDetail] = useState('sidebar');

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  
  return( 
    <div className="main-layout">
      <div id="layout-container">
        <Sidebar setDetail={setDetail} isMobile={isMobile} detail={detail}/>
        <Mail setDetail={setDetail} isMobile={isMobile} detail={detail}/>
      </div>
    </div>
  );
};
const mapStateToProps = ({mails}) => ({
  mails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  addMailAction: addMail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
