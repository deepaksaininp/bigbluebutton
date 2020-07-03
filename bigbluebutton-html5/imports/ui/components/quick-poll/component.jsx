import React, { PureComponent, Fragment } from 'react';

import ActionsDropdown from './../actions-bar/actions-dropdown/component';
import QuickPollDropdown from './quick-poll-dropdown/component';
import CaptionsButtonContainer from '/imports/ui/components/actions-bar/captions/container';

class QuickPoll extends PureComponent {
    render() {
        const {
            amIPresenter,
            amIModerator,
            handleTakePresenter,
            intl,
            currentSlidHasContent,
            parseCurrentSlideContent,
            isSharingVideo,
            stopExternalVideoShare,
            isCaptionsAvailable,
            isMeteorConnected,
            isPollingEnabled,
            allowExternalVideo,
        } = this.props;


        return (
            <Fragment>
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
                <div style={{padding: "20px 0"}}>
                    {isCaptionsAvailable
                        ? (
                            <CaptionsButtonContainer {...{ intl }} />
                        )
                        : null
                    }
                </div>
            </Fragment>
        );
    }
}

export default QuickPoll;
