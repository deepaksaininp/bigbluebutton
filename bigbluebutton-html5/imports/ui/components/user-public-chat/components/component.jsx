import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { styles } from './../styles'; 
import UserPublicChat from './components/component'; 

const propTypes = {
  activeChats: PropTypes.arrayOf(String).isRequired,
  compact: PropTypes.bool,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired, 
  isPublicChat: PropTypes.func.isRequired, 
  roving: PropTypes.func.isRequired,  
};

const defaultProps = {
  compact: false,
};
const CHAT_ENABLED = Meteor.settings.public.chat.enabled; 

class UserPublicChatContent extends PureComponent {
  render() {
    const {
      compact,
      intl, 
      roving,
      isPublicChat,
      activeChats, 
    } = this.props;

    return (
      <div
        data-test="userListContent"
        className={styles.content}
        role="complementary"
      >
        {CHAT_ENABLED
          ? (<UserPublicChat
            {...{
              isPublicChat,
              activeChats,
              compact,
              intl,
              roving,
            }}
          />
          ) : null
        } 
      </div>
    );
  }
}

UserPublicChatContent.propTypes = propTypes;
UserPublicChatContent.defaultProps = defaultProps;

export default UserPublicChatContent;
