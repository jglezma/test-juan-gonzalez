import React, {useState, useEffect} from "react";
import Navbar from "../components/navbar/Navbar";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PaperClipIcon from "../assets/icons/paper-clip";
import { statusMail } from "../actions";
import "./style.sass";

const Mail = ({mailSelected, statusMail, isMobile, detail, setDetail}) => {
  const [mailDetail, setMailDetail] = useState({});

  useEffect(() => {
    setMailDetail(mailSelected)
  }, [mailSelected])

  const handleStatusMail = (status) => {
    statusMail({id: mailSelected.id, status})
    if(isMobile){
      setDetail('sidebar');
    }
  };

  return(
    <div className={isMobile ? detail == 'mail' ? 'mail-layout-mobile' :  'mail-layout-active' : 'mail-layout'}>
      {Object.keys(mailDetail).length === 0 ? null :
      <>
      <Navbar
        left={
          <div className="button-container">
            <div className="delete-button"
              onClick={()=>handleStatusMail('deleted')}
            >
              Delete
            </div>
            <div 
              className="spam-button"
              onClick={()=>handleStatusMail('spam')}
            >
              Spam
            </div>
          </div>
        }
        right={
          <div
            className="unread-button"
            onClick={()=>handleStatusMail('unread')}
          >
            Mark as unread
          </div>
        } 
      />
      <div className="mail-container">
        <p className="text-title">{mailDetail?.mail?.subject}</p>
        <div className="tags-container">
          <p className="tags-title">Tags</p>
          <div className="tags">
            <p className="text-tags">{mailDetail?.mail?.tag}</p>
          </div>
        </div>
        <div className="body-container">
          <p className="text-body">
            {mailDetail?.mail?.body}
          </p>
          <div className="replay">
          {mailDetail?.mail?.attachements.length > 0 ?
            <div className="clip-container">
              <a download={mailDetail?.mail?.attachements[0].name} href={mailDetail?.mail?.attachements[0].file}
                rel="noopener" target="_blank"
              >
                <PaperClipIcon />
              </a>
            </div>
          : null}
            <a style={{textDecoration: 'none'}} 
            href={`mailto:${mailDetail?.mail?.from}?subject=${mailDetail?.mail?.subject} `} >
              <div className="replay-button">Replay</div>
            </a>
          </div>
        </div>
      </div>
      </>
      }
    </div>
  );
}
const mapStateToProps = ({mailSelected}) => ({
  mailSelected,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  statusMail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mail);

