import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session'; 
import withShortcutHelper from '/imports/ui/components/shortcut-help/service'; 
import { defineMessages, injectIntl } from 'react-intl'; 
import { styles } from './styles.scss'; 
import TalkingIndicatorContainer from '/imports/ui/components/nav-bar/talking-indicator/container'; 


const intlMessages = defineMessages({
  toggleUserListLabel: {
    id: 'app.navBar.userListToggleBtnLabel',
    description: 'Toggle button label',
  },
  toggleUserListAria: {
    id: 'app.navBar.toggleUserList.ariaLabel',
    description: 'description of the lists inside the userlist',
  },
  newMessages: {
    id: 'app.navBar.toggleUserList.newMessages',
    description: 'label for toggleUserList btn when showing red notification',
  },
});

const propTypes = {
  presentationTitle: PropTypes.string,
  hasUnreadMessages: PropTypes.bool,
  shortcuts: PropTypes.string,
};

const defaultProps = {
  presentationTitle: 'Default Room Title',
  hasUnreadMessages: false,
  shortcuts: '',
};

class NavBar extends PureComponent {
  static handleToggleUserList() {
    Session.set(
      'openPanel',
      Session.get('openPanel') !== ''
        ? ''
        : 'userlist',
    );
    Session.set('idChatOpen', '');
  }

 

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      hasUnreadMessages,
      isExpanded,
      intl,
      shortcuts: TOGGLE_USERLIST_AK, 
      presentationTitle,
      amIModerator,
    } = this.props;


    const toggleBtnClasses = {};
    toggleBtnClasses[styles.btn] = true;
    toggleBtnClasses[styles.btnWithNotificationDot] = hasUnreadMessages;

    let ariaLabel = intl.formatMessage(intlMessages.toggleUserListAria);
    ariaLabel += hasUnreadMessages ? (` ${intl.formatMessage(intlMessages.newMessages)}`) : '';

    return (
      <div className={styles.navbar}>
        <div className={styles.top}>
          {/* <div className={styles.left}>
            {!isExpanded ? null
              : <Icon iconName="left_arrow" className={styles.arrowLeft} />
            }
            <Button
              data-test="userListToggleButton"
              onClick={NavBar.handleToggleUserList}
              ghost
              circle
              hideLabel
              data-test={hasUnreadMessages ? 'hasUnreadMessages' : null}
              label={intl.formatMessage(intlMessages.toggleUserListLabel)}
              aria-label={ariaLabel}
              icon="user"
              className={cx(toggleBtnClasses)}
              aria-expanded={isExpanded}
              accessKey={TOGGLE_USERLIST_AK}
            />
            {isExpanded ? null
              : <Icon iconName="right_arrow" className={styles.arrowRight} />
            }
          </div> */}
          <div className={styles.center}>
            <h1 className={styles.presentationTitle}>{presentationTitle}</h1>

             
          </div> 
        </div>
        <div className={styles.bottom}>
          <TalkingIndicatorContainer amIModerator={amIModerator} />
        </div>
      </div>
    );
  }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
export default withShortcutHelper(injectIntl(NavBar), 'toggleUserList');
