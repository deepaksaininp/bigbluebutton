import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { styles } from './../user-list/styles';
import UserPolls from './../user-list/user-list-content/user-polls/component';

const propTypes = {
    currentUser: PropTypes.shape({}).isRequired,
    pollIsOpen: PropTypes.bool.isRequired,
    forcePollOpen: PropTypes.bool.isRequired,
};

const defaultProps = {
    compact: false,
};
const CHAT_ENABLED = Meteor.settings.public.chat.enabled;
const ROLE_MODERATOR = Meteor.settings.public.user.role_moderator;

class UserPollAction extends PureComponent {
    render() {
        const {
            currentUser,
            pollIsOpen,
            forcePollOpen,
        } = this.props;


        return (
            <UserPolls
                isPresenter={currentUser.presenter}
                {...{
                    pollIsOpen,
                    forcePollOpen,
                }}
            />
        );
    }
}

UserPollAction.propTypes = propTypes;
UserPollAction.defaultProps = defaultProps;

export default UserPollAction;
