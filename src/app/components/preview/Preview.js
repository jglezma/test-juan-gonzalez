import React, {useEffect} from "react";
import PaperClipIcon from "../../assets/icons/paper-clip";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import './style.sass';
import { selectMail } from "../../actions";

const Preview = ({mail, mailSelected, selectMailAction, isMobile, setDetail}) => {

const handleSelectMail = (mail) => {
  selectMailAction(mail);
  if(isMobile){
    setDetail('mail');
  }
};

return( 
    <div
      onClick={()=> handleSelectMail(mail)}
      className={mail?.status === "unread" ? "container-blue" : "container"}
    >
      <div>
        <p className="text-title">{mail?.mail?.subject}</p>
        <p className="text-preview">{mail?.mail?.body.substring(0,32)}</p>
      </div>
      <div className="right-container">
        <p className="text-hour">{mail?.mail?.date}</p>
        {mail?.mail.attachements.length > 0 ?
          <div className="clip-container-preview">
            <PaperClipIcon />
          </div> : null
        }
      </div>
    </div>
)};
const mapStateToProps = ({mailSelected}) => ({
  mailSelected,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectMailAction: selectMail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
