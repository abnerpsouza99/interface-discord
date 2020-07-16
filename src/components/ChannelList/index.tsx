import React from 'react'
import {Container, Category, AddCategoryIcon} from './styles'
const ChannelList: React.FC = function(){
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            {/*<ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="games"/>*/}
        </Container>
    );
}

export default ChannelList;