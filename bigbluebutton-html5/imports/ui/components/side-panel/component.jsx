import React, { PureComponent, Fragment } from 'react';
import { IconButton, Badge } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { withModalMounter } from '/imports/ui/components/modal/service';
import AudioControlsContainer from '../audio/audio-controls/container';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsDropdownContainer from './../nav-bar/settings-dropdown/container';
import getFromUserSettings from '/imports/ui/services/users-settings';
import { injectIntl } from 'react-intl';
import Users from '/imports/api/users';
import Auth from '/imports/ui/services/auth';
import RecordingIndicator from './../nav-bar/recording-indicator/container';
import Service from './service';
import ActionsBarContainer from './../actions-bar/container';
import SubSidebarContainer from './components/container';
import JoinVideoOptionsContainer from './../video-provider/video-button/container';
import ActionPollDropdownContainer from '../poll-dropdown/container';
import withShortcutHelper from '/imports/ui/components/shortcut-help/service'; 
import { makeCall } from '/imports/ui/services/api';


import { styles } from './style';



const PUBLIC_CONFIG = Meteor.settings.public;
const ROLE_MODERATOR = PUBLIC_CONFIG.user.role_moderator;
const { connectRecordingObserver, processOutsideToggleRecording } = Service;

class SidePanel extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            showSubMenu: false
        }

        this.LOGOUT_CODE = '680';
        this.leaveSession = this.leaveSession.bind(this);
        this.showSubMenuHandler = this.showSubMenuHandler.bind(this);


    }

    componentDidMount() {
        if (Meteor.settings.public.allowOutsideCommands.toggleRecording
            || getFromUserSettings('bbb_outside_toggle_recording', false)) {
            connectRecordingObserver();
            window.addEventListener('message', processOutsideToggleRecording);
        }
    }

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
    



    render() {
        const { showSubMenu } = this.state
        const { mountModal, enableVideo, handleJoinVideo, handleExitVideo, MenusHandler } = this.props;
        const currentUser = Users.findOne({ userId: Auth.userID }, { fields: { role: 1 } });
        const amIModerator = currentUser.role === ROLE_MODERATOR;


        return (
            <Fragment>
                <div className={styles.sidepanel}>
                    {/* <UserListContainer /> */}
                    {showSubMenu === true ? <SubSidebarContainer /> : null}
                    <div className={styles.sidepanel__top}>
                        <div className={styles.gutter}>
                            <JoinVideoOptionsContainer
                                handleJoinVideo={handleJoinVideo}
                                handleCloseVideo={handleExitVideo}
                            />
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
                        <ActionsBarContainer />
                        <div className={styles.gutter}>
                            <IconButton onClick={() => {
                                Session.set('openPanel', 'userlist');
                            }}>
                                <Badge badgeContent={4} className={styles.userBadge}>
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
                            <ActionPollDropdownContainer />
                        </div>
                        <div className={styles.gutter}>
                            <RecordingIndicator
                                mountModal={mountModal}
                                amIModerator={amIModerator}
                            />
                        </div>
                        <div className={styles.gutter}>
                            <IconButton>
                                <PersonAddIcon className={styles.whiteColor} />
                            </IconButton>
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

export default withShortcutHelper(withModalMounter(injectIntl(SidePanel)), 'openOptions');