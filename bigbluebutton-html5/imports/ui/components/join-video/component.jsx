import React, { PureComponent, Fragment } from 'react';
import JoinVideoOptionsContainer from '../video-provider/video-button/container';

class JoinVideo extends PureComponent {
    render() {
        const {
            amIPresenter,
            handleExitVideo,
            handleJoinVideo,
            handleShareScreen,
            handleUnshareScreen,
            isVideoBroadcasting,
            amIModerator,
            screenSharingCheck,
            enableVideo,
            isLayoutSwapped,
            toggleSwapLayout,
            handleTakePresenter,
            intl,
            currentSlidHasContent,
            parseCurrentSlideContent,
            isSharingVideo,
            screenShareEndAlert,
            stopExternalVideoShare,
            screenshareDataSavingSetting,
            isCaptionsAvailable,
            isMeteorConnected,
            isPollingEnabled,
            isThereCurrentPresentation,
            allowExternalVideo,
        } = this.props;

        return (
            <Fragment>
                {enableVideo
                    ? (
                        <JoinVideoOptionsContainer
                            handleJoinVideo={handleJoinVideo}
                            handleCloseVideo={handleExitVideo}
                        />
                    )
                    : null}
            </Fragment>
        );
    }
}

export default JoinVideo;
