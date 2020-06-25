import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import BreakoutRoomContainer from '/imports/ui/components/breakout-room/container';
import UserListContainer from '/imports/ui/components/user-list/container';
import ChatContainer from '/imports/ui/components/chat/container';
import NoteContainer from '/imports/ui/components/note/container';
import PollContainer from '/imports/ui/components/poll/container';
import CaptionsContainer from '/imports/ui/components/captions/pad/container';
import WaitingUsersPanel from '/imports/ui/components/waiting-users/container';
import _ from 'lodash';

import { styles } from './styles';

class SubSidePanel extends Component {
    constructor() {
        super();

        this.padKey = _.uniqueId('resize-pad-');
        this.userlistKey = _.uniqueId('userlist-');
        this.breakoutroomKey = _.uniqueId('breakoutroom-');
        this.chatKey = _.uniqueId('chat-');
        this.pollKey = _.uniqueId('poll-');
        this.noteKey = _.uniqueId('note-');
        this.captionsKey = _.uniqueId('captions-');
        this.waitingUsers = _.uniqueId('waitingUsers-');
    }

    renderPoll() {
        return (
            <div className={styles.poll} key={this.pollKey}>
                <PollContainer />
            </div>
        )
    }

    render() {
        const { openPanel, enableResize, isRTL } = this.props;
        if (openPanel === '') return null;
        const panels = [];

        if (openPanel === 'poll') {
            panels.push(this.renderPoll())
        }
        return panels
    }
}

export default injectIntl(SubSidePanel)