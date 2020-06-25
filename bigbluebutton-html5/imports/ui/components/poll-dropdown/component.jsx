import React, { PureComponent } from 'react';
import cx from 'classnames';
import { styles } from './styles.scss'; 
import ActionsDropdown from './../actions-bar/actions-dropdown/component';
import QuickPollDropdown from './../actions-bar/quick-poll-dropdown/component';  
import CaptionsButtonContainer from '/imports/ui/components/actions-bar/captions/container'; 

class ActionPollDropdown extends PureComponent {
    render() {
        const {
            amIPresenter,
            handleTakePresenter,
            intl,
            currentSlidHasContent,
            parseCurrentSlideContent,
            isSharingVideo,
            amIModerator,
            stopExternalVideoShare,
            isMeteorConnected,
            isPollingEnabled,
            allowExternalVideo, 
            isCaptionsAvailable
        } = this.props; 

        return (
            <div className={styles.left}>
                <ActionsDropdown {...{
                    amIPresenter,
                    amIModerator,
                    isPollingEnabled,
                    allowExternalVideo,
                    handleTakePresenter,
                    intl,
                    isSharingVideo,
                    stopExternalVideoShare,
                    isMeteorConnected,
                    isCaptionsAvailable
                }}
                />
                {isPollingEnabled
                    ? (
                        <QuickPollDropdown
                            {...{
                                currentSlidHasContent,
                                intl,
                                amIPresenter,
                                parseCurrentSlideContent,
                            }}
                        />
                    ) : null
                }
                {isCaptionsAvailable
                    ? (
                        <CaptionsButtonContainer {...{ intl }} />
                    )
                    : null
                }
            </div>
        );
    }
}

export default ActionPollDropdown;