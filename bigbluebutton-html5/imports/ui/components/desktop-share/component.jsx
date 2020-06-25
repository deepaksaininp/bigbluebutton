import React, { PureComponent } from 'react'; 
import ShareDesktop from './components/component'; 

class ShareDesktopBar extends PureComponent {
    render() {
        const {
            amIPresenter, 
            handleShareScreen,
            handleUnshareScreen,
            isVideoBroadcasting, 
            screenSharingCheck, 
            screenShareEndAlert, 
            screenshareDataSavingSetting, 
            isMeteorConnected, 
        } = this.props;
 

        return (
            <ShareDesktop {...{
                handleShareScreen,
                handleUnshareScreen,
                isVideoBroadcasting,
                amIPresenter,
                screenSharingCheck,
                screenShareEndAlert,
                isMeteorConnected,
                screenshareDataSavingSetting,
            }}
            />
        );
    }
}

export default ShareDesktopBar;