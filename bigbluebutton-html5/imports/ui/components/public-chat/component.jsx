import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import injectWbResizeEvent from '/imports/ui/components/presentation/resize-wrapper/component';
import { styles } from './styles.scss';
import UserPublicAction from './components/container';

const propTypes = {
    activeChats: PropTypes.arrayOf(String).isRequired,
    compact: PropTypes.bool,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
    CustomLogoUrl: PropTypes.string.isRequired,
    isPublicChat: PropTypes.func.isRequired,
    setEmojiStatus: PropTypes.func.isRequired,
    roving: PropTypes.func.isRequired,
    showBranding: PropTypes.bool.isRequired,
    requestUserInformation: PropTypes.func.isRequired,
};

const defaultProps = {
    compact: false,
};

class PublicUserContainer extends PureComponent {
    render() {
        const {
            intl,
            activeChats,
            compact,
            setEmojiStatus,
            isPublicChat,
            roving,
            CustomLogoUrl,
            showBranding,
            hasBreakoutRoom,
            requestUserInformation,
        } = this.props;

        return (
            <UserPublicAction
                {...{
                    intl,
                    activeChats,
                    compact,
                    setEmojiStatus,
                    isPublicChat,
                    roving,
                    hasBreakoutRoom,
                    requestUserInformation,
                }
                }
            />
        );
    }
}

PublicUserContainer.propTypes = propTypes;
PublicUserContainer.defaultProps = defaultProps;

export default injectWbResizeEvent(injectIntl(PublicUserContainer));
