import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import { IconButton, Tooltip } from '@material-ui/core';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import { Session } from 'meteor/session';

const intlMessages = defineMessages({
  breakoutTitle: {
    id: 'app.createBreakoutRoom.title',
    description: 'breakout title',
  },
});
const toggleBreakoutPanel = () => {
  Session.set(
    'openPanel',
    Session.get('openPanel') === 'breakoutroom'
      ? 'userlist'
      : 'breakoutroom',
  );
};

const BreakoutRoomItem = ({
  hasBreakoutRoom,
  intl,
}) => {
  if (hasBreakoutRoom) {
    return (
      <Tooltip title="Breakout Rooms">
        <IconButton tabIndex={0} onClick={toggleBreakoutPanel} style={{ padding: 0 }}>
          <VideoLabelIcon style={{ color: '#fff' }} />
        </IconButton>
      </Tooltip>
    );
  }
  return <span />;
};

export default injectIntl(BreakoutRoomItem);

BreakoutRoomItem.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  hasBreakoutRoom: PropTypes.bool.isRequired,
};
