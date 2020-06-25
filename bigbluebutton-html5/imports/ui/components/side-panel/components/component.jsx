import React, { PureComponent } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import EditIcon from '@material-ui/icons/Edit';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PublicUserActionContainer from './../../user-public-chat/container';

import ShareDesktopContainer from './../../desktop-share/container'

import { styles } from "./styles";

export default class SubSidebar extends PureComponent {
    render() {
        return (
            <div className={styles.subSidebarBox}>
                <div className={styles.subSidebarContent}>
                    <div className={styles.gutter}>
                        <PublicUserActionContainer />
                    </div>
                    <div className={styles.gutter}>
                        <Tooltip title="Questions" className={styles.icon}>
                            <IconButton>
                                <ContactSupportIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className={styles.gutter}>
                        <Tooltip title="Share Screen" className={styles.icon}>
                            <ShareDesktopContainer />
                        </Tooltip>
                    </div>
                    <div className={styles.gutter}>
                        <Tooltip title="Edit" className={styles.icon}>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className={styles.gutter}>
                        <Tooltip title="" className={styles.icon}>
                            <IconButton>
                                <AssessmentIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title="Share Notes" className={styles.icon}>
                            <IconButton>
                                <PostAddIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}
