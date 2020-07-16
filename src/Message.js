import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core'

// Styling
import './Message.css'

export default function Message({ current, user, text }) {
    const isUser = current === user;
    return (
        <div className={ `message ${isUser && 'message_user'}` }>
            <Card className={ isUser ? "message_userCard" : "message_guestCard" }>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                        className={ isUser && 'message_userFont' }
                    >
                        { user }: { text }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
