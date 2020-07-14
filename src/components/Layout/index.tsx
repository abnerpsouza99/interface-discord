import React from 'react'
import {Grid} from './styles'
import ServerList from '../ServerList'
// Maneira de exportar a função com TypeScript

const Layout: React.FC = function(){
    return (
        <Grid>
            <ServerList/>
        </Grid>
    );
}

export default Layout;