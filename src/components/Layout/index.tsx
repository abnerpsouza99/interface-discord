import React from 'react'
import {Grid} from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
// Maneira de exportar a função com TypeScript

const Layout: React.FC = function(){
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
        </Grid>
    );
}

export default Layout;