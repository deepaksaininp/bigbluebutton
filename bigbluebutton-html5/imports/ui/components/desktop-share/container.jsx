import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from 'react-intl';
import getFromUserSettings from '/imports/ui/services/users-settings';
// import Auth from '/imports/ui/services/auth';
// import PresentationService from '/imports/ui/components/presentation/service';
// import Presentations from '/imports/api/presentations';
import ShareDesktopBar from './component';
import Service from './service';
// import VideoService from '../video-provider/service';
// import ExternalVideoService from '/imports/ui/components/external-video-player/service';
// import CaptionsService from '/imports/ui/components/captions/service';
import {
  shareScreen,
  unshareScreen,
  isVideoBroadcasting,
  screenShareEndAlert,
  dataSavingSetting,
} from '../screenshare/service';

// import MediaService, {
//   getSwapLayout,
//   shouldEnableSwapLayout,
// } from '../media/service';

const ShareDesktopContainer = props => <ShareDesktopBar {...props} />;
// const POLLING_ENABLED = Meteor.settings.public.poll.enabled;

export default withTracker(() => ({
  amIPresenter: Service.amIPresenter(),
  handleShareScreen: onFail => shareScreen(onFail),
  handleUnshareScreen: () => unshareScreen(),
  isVideoBroadcasting: isVideoBroadcasting(),
  screenSharingCheck: getFromUserSettings('bbb_enable_screen_sharing', Meteor.settings.public.kurento.enableScreensharing),
  screenShareEndAlert,
  screenshareDataSavingSetting: dataSavingSetting(),
  isMeteorConnected: Meteor.status().connected,

  // amIModerator: Service.amIModerator(),
  // stopExternalVideoShare: ExternalVideoService.stopWatching,
  // handleExitVideo: () => VideoService.exitVideo(),
  // handleJoinVideo: () => VideoService.joinVideo(),
  // enableVideo: getFromUserSettings('bbb_enable_video', Meteor.settings.public.kurento.enableVideo),
  // isLayoutSwapped: getSwapLayout() && shouldEnableSwapLayout(),
  // toggleSwapLayout: MediaService.toggleSwapLayout,
  // handleTakePresenter: Service.takePresenterRole,
  // currentSlidHasContent: PresentationService.currentSlidHasContent(),
  // parseCurrentSlideContent: PresentationService.parseCurrentSlideContent,
  // isSharingVideo: Service.isSharingVideo(),
  // isCaptionsAvailable: CaptionsService.isCaptionsAvailable(),
  // isPollingEnabled: POLLING_ENABLED,
  // isThereCurrentPresentation: Presentations.findOne({ meetingId: Auth.meetingID, current: true },
  //   { fields: {} }),
  // allowExternalVideo: Meteor.settings.public.externalVideoPlayer.enabled,
}))(injectIntl(ShareDesktopContainer));