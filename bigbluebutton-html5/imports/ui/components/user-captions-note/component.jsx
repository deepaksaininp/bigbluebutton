import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
// import { styles } from './styles';
import UserCaptionsContainer from './../user-list/user-list-content/user-captions/container';

const propTypes = {
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
    currentUser: PropTypes.shape({}).isRequired,
};


const ROLE_MODERATOR = Meteor.settings.public.user.role_moderator;

class UserCaptionsNote extends PureComponent {
    render() {
        const {
            intl,
            currentUser,
        } = this.props;

        return (
            <div
                data-test="userListContent"
                // className={styles.content}
                role="complementary"
            >
                {currentUser.role === ROLE_MODERATOR
                    ? (
                        <UserCaptionsContainer
                            {...{
                                intl,
                            }}
                        />
                    ) : null
                }
            </div>
        );
    }
}

UserCaptionsNote.propTypes = propTypes;

export default injectIntl(UserCaptionsNote);
