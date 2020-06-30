import React, { PureComponent } from 'react'; 
import DesktopShare from './components/component';

class DesktopShareComp extends PureComponent {
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
            <DesktopShare {...{
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

export default DesktopShareComp;
