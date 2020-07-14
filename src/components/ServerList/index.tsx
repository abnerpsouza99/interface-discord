import React from 'react'
import ServerButton from '../ServerButton'
import {Container, Separator} from './styles'

const ServerList: React.FC = function(){
    return (
        <Container>
            <ServerButton isHome />
            <Separator/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton mentions={5}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton mentions={5}/>
            <ServerButton/>
        </Container>
    )

}

export default ServerList;