import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { IconButton, Badge } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import getFromUserSettings from '/imports/ui/services/users-settings';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withModalMounter } from '/imports/ui/components/modal/service';
import JoinVideoContainer from '../join-video/container';
import AudioControlsContainer from '../audio/audio-controls/container';
import SettingsDropdownContainer from './../nav-bar/settings-dropdown/container';
import QuickPollContainer from '../quick-poll/container';
import { injectIntl } from 'react-intl';
import { makeCall } from '/imports/ui/services/api';
import RecordingIndicator from './../nav-bar/recording-indicator/container';
import withShortcutHelper from '/imports/ui/components/shortcut-help/service';

import DesktopShareCompContainer from './../desktop-share/container';
import UserListService from '/imports/ui/components/user-list/service';
import { styles } from './style';
import Service from './../actions-bar/service';
import Users from '/imports/api/users';
import Auth from '/imports/ui/services/auth';
import SubSidebar from './components/component';



const PUBLIC_CONFIG = Meteor.settings.public;
const ROLE_MODERATOR = PUBLIC_CONFIG.user.role_moderator;
const { connectRecordingObserver, processOutsideToggleRecording } = Service;

class SidePanelManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubMenu: false
        }
        this.LOGOUT_CODE = '680';
        this.leaveSession = this.leaveSession.bind(this);
        this.toggleUserPanel = this.toggleUserPanel.bind(this);
    }

    componentDidMount() {
        if (Meteor.settings.public.allowOutsideCommands.toggleRecording
            || getFromUserSettings('bbb_outside_toggle_recording', false)) {
            connectRecordingObserver();
            window.addEventListener('message', processOutsideToggleRecording);
        }
    }

    toggleUserPanel = () => {
        Session.set(
            'openPanel',
            Session.get('openPanel') === 'userlist'
                ? ''
                : 'userlist',
        );
    };

    leaveSession = () => {
        makeCall('userLeftMeeting');
        // we don't check askForFeedbackOnLogout here,
        // it is checked in meeting-ended component
        Session.set('codeError', this.LOGOUT_CODE);
        mountModal(<MeetingEndedComponent code={LOGOUT_CODE} />);
    }

    showSubMenuHandler = () => {
        const { showSubMenu } = this.state;
        this.setState({ showSubMenu: !showSubMenu })
    }
    hideSubMenuHandler = () => {
        this.setState({ showSubMenu: false })
    }


    render() {
        const { mountModal } = this.props;
        const { showSubMenu } = this.state;
        const currentUser = Users.findOne({ userId: Auth.userID }, { fields: { role: 1 } });
        const amIModerator = currentUser.role === ROLE_MODERATOR; 
        const totalUsers = UserListService.getUsers().length; 
        return (
            <Fragment>
                {showSubMenu === true ? <SubSidebar hideSubMenuHandler={this.hideSubMenuHandler} /> : null}
                <div className={styles.sidepanel}>
                    <div className={styles.sidepanel__top}>
                        <div className={styles.gutter} onClick={() => hideSubMenuHandler()}>
                            <DesktopShareCompContainer />
                        </div>
                        <div className={styles.gutter}>
                            <JoinVideoContainer />
                        </div>
                        <div className={styles.gutter}>
                            <AudioControlsContainer />
                        </div>
                        <div className={styles.gutter}>
                            <IconButton onClick={() => this.leaveSession()}>
                                <ExitToAppIcon className={styles.whiteColor} />
                            </IconButton>
                        </div>
                    </div>
                    <div className={styles.sidepanel__middle}>
                        <div className={styles.gutter}>
                            <IconButton onClick={() => this.toggleUserPanel()}>
                                <Badge badgeContent={totalUsers} className={styles.userBadge}>
                                    <PeopleIcon className={styles.whiteColor} />
                                </Badge>
                            </IconButton>
                        </div>

                        <div className={styles.gutter}>
                            <IconButton onClick={() => this.showSubMenuHandler()}>
                                <MoreHorizIcon className={styles.whiteColor} />
                            </IconButton>
                        </div>
                    </div>
                    <div className={styles.sidepanel__bottom}>
                        <div className={styles.gutter}>
                            <QuickPollContainer />
                        </div>
                        <div className={styles.gutter}>
                            <RecordingIndicator
                                mountModal={mountModal}
                                amIModerator={amIModerator}
                            />
                        </div>
                        <div className={styles.gutter}>
                            <SettingsDropdownContainer amIModerator={amIModerator} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default withShortcutHelper(withModalMounter(injectIntl(SidePanelManager)), 'openOptions');;

