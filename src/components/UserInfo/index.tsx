import React from 'react'
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'
const UserInfo: React.FC = function () {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Abner Pena de Souza</strong>
                    <span>#0088</span>
                </UserData>    
            </Profile>


            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    );
}

export default UserInfo;