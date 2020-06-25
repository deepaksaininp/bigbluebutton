import React from 'react'; 
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from 'react-intl';
import getFromUserSettings from '/imports/ui/services/users-settings';
import VideoService from '../video-provider/service';

import Sidepanel from './component';

const SidepanelContainer = props => <Sidepanel {...props} />



export default withTracker(() => ({
    handleExitVideo: () => VideoService.exitVideo(),
    handleJoinVideo: () => VideoService.joinVideo(),
    enableVideo: getFromUserSettings('bbb_enable_video', Meteor.settings.public.kurento.enableVideo),    
    isMeteorConnected: Meteor.status().connected
}))(injectIntl(SidepanelContainer));
