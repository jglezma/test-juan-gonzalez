import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar";
import SearchBar from "../components/search/Search";
import Preview from "../components/preview/Preview";
import { connect } from "react-redux";
import './style.sass';

const Sidebar = ({mails, setDetail, isMobile, detail}) => {
  const [badge, setBadge] = useState(0);
  const [value, setValue] = useState([]);

  useEffect(() => {
    setBadge(mails.filter(mail=>mail?.status === "unread").length);
    setValue(mails.filter(mail=>mail?.status === "unread"));
  }, [mails]);

  const handleAddrTypeChange = (e) => {
    setValue(mails.filter(mail=>mail?.status === e.target.value))
    setBadge(mails.filter(mail=>mail?.status === e.target.value).length)
  };

  const handleSearchChange = (e) => {
    setValue(mails.filter(mail=>mail?.mail?.subject.toLowerCase().includes(e.target.value.toLowerCase())))
    setBadge(mails.filter(mail=>mail?.mail?.subject.toLowerCase().includes(e.target.value.toLowerCase())).length)
  };

  return( 
      <div className={isMobile ? detail == 'sidebar' ? 'side-layout-mobile' :  'side-layout-active':  'side-layout'}>
        <Navbar 
          left={
            <div className="button-container">
              <b>Inbox</b>
              <div className="badge">
                {badge}
              </div>
            </div>
          }
          right={
              <select name="filter" id="filter"
              onChange={handleAddrTypeChange}>
                <option style={{display:'none'}}>Filter by</option>
                <option value="unread">Inbox</option>
                <option value="spam">Spam</option>
                <option value="deleted">Deleted</option>
              </select>
          }
        />
        <SearchBar setValue={handleSearchChange}/>
        <div className="messages-container">
          <div className="messages">
            {value.map((mail, index) => (
                <Preview key={index} mail={mail}
                setDetail={setDetail} isMobile={isMobile}/>
              ))
            }
            </div>
        </div>
      </div>
  )
}

const mapStateToProps = ({mails}) => ({
  mails,
});

export default connect(mapStateToProps, null)(Sidebar);
