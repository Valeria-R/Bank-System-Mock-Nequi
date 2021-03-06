import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';

export default ({ style, translate }) => (
    <Card style={style}>
        <CardHeader
            title={'Welcome to Nequi'}
            subtitle={'This is our main page for your account.'}
            subtitle={'Navigate on left menu'}
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
    </Card>
);
