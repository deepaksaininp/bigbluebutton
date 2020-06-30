import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl'; 
import { Session } from 'meteor/session';
import { IconButton, Tooltip } from '@material-ui/core';
import PollSharpIcon from '@material-ui/icons/PollSharp';
import { styles } from '/imports/ui/components/user-list/user-list-content/styles';

const intlMessages = defineMessages({
  pollLabel: {
    id: 'app.poll.pollPaneTitle',
    description: 'label for user-list poll button',
  },
});

class UserPolls extends PureComponent {
  render() {
    const handleClickTogglePoll = () => {
      Session.set(
        'openPanel',
        Session.get('openPanel') === 'poll'
          ? 'userlist'
          : 'poll',
      );
    };
    const {
      intl,
      isPresenter,
      pollIsOpen,
      forcePollOpen,
    } = this.props;

    if (!isPresenter) return null;
    if (!pollIsOpen && !forcePollOpen) return null;

    return (
      <Tooltip title="Polling">
        <IconButton tabIndex={0} onClick={handleClickTogglePoll}>
          <PollSharpIcon style={{ color: '#fff' }} />
        </IconButton>
      </Tooltip>
    );
  }
}

export default injectIntl(UserPolls);

UserPolls.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  isPresenter: PropTypes.bool.isRequired,
  pollIsOpen: PropTypes.bool.isRequired,
  forcePollOpen: PropTypes.bool.isRequired,
};
