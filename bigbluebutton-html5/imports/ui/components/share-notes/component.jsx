import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import UserNotesContainer from './../user-list/user-list-content/user-notes/container';

const propTypes = {
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired
};


class ShareNotes extends PureComponent {
    render() {
        const {
            intl,
        } = this.props;

        return (
            <div
                data-test="userListContent"
                // className={styles.content}
                role="complementary"
            >
                <UserNotesContainer
                    {...{
                        intl,
                    }}
                />
            </div>
        );
    }
}

ShareNotes.propTypes = propTypes;

export default injectIntl(ShareNotes);
