import React, { PureComponent } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import BreakoutRoomActionContainer from './../../breakout-room-action/container';
import UserPollActionContainer from './../../userpoll-action/container';
import PublicUserActionContainer from '../../public-chat/container';
import ShareNotesContainer from '../../share-notes/container';
import UserCaptionNoteContainer from '../../user-captions-note/container';

import { styles } from "./styles";

export default class SubSidebar extends PureComponent {
    constructor(props) {
        super(props);

        this.openNoteHandler = this.openNoteHandler.bind(this);
    }

    openNoteHandler = () => {
        Session.set('openPanel', 'note');
        hideSubMenuHandler();
    }

    render() {
        const { hideSubMenuHandler } = this.props;
        return (
            <div className={styles.subSidebarBox}>
                <div className={styles.subSidebarContent}>
                    <div style={{ marginBottom: "10px" }}>
                        <div onClick={() => hideSubMenuHandler()}>
                            <BreakoutRoomActionContainer />
                        </div>
                    </div>
                    <div className={styles.gutter}>
                        <div style={{ padding: '5px 0' }} onClick={() => hideSubMenuHandler()}>
                            <UserPollActionContainer />
                        </div>
                    </div>
                    <div className={styles.gutter}>
                        <div style={{ cursor: "pointer", marginLeft: '5px' }} onClick={() => hideSubMenuHandler()}>
                            <Tooltip title="Public Chat" className={styles.icon}>
                                <PublicUserActionContainer />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={styles.gutter} onClick={() => hideSubMenuHandler()}>
                        <UserCaptionNoteContainer />
                    </div>
                    <div className={styles.gutter} onClick={() => hideSubMenuHandler()}>
                        <ShareNotesContainer />
                    </div>
                </div>
            </div>
        )
    }
}
