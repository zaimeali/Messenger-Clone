import React, { forwardRef } from 'react'

import { Card, CardContent, Typography } from '@material-ui/core'

// Styling
import './Message.css'

const Message = forwardRef(({ current, user, text }, ref) => {
    const isUser = current === user;
    return (
        <div className={ `message ${isUser && 'message_user'}` }>
            <div className="userDisplayDiv">
                <small className="userDisplay">{ isUser ? '' : `${user || 'Anonymous'}` }</small>
            </div>
            <Card className={ isUser ? "message_userCard" : "message_guestCard" }>
                <CardContent>
                    <Typography 
                        variant="h6"
                        component="h2"
                        className={ `${ isUser && 'message_userFont' }` }
                    >
                        { text }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
