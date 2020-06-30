import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { styles } from '/imports/ui/components/user-list/user-list-content/styles';
import BreakoutRoomItem from '/imports/ui/components/user-list/user-list-content/breakout-room/component';

const propTypes = { 
  currentUser: PropTypes.shape({}).isRequired, 
};
 

class UserContent extends PureComponent {
  render() {
    const { 
      currentUser, 
      hasBreakoutRoom, 
    } = this.props;
 

    return (
      <div
        data-test="userListContent"
        className={styles.content}
        role="complementary"
      > 
        <BreakoutRoomItem isPresenter={currentUser.presenter} hasBreakoutRoom={hasBreakoutRoom} />
         
      </div>
    );
  }
}

UserContent.propTypes = propTypes; 

export default UserContent;
