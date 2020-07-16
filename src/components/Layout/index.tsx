import React from 'react'
import {Grid} from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
// Maneira de exportar a função com TypeScript

const Layout: React.FC = function(){
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
        </Grid>
    );
}

export default Layout;