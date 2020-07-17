import React, {useRef, useEffect} from 'react'
import ChannelMessage, {Mention} from '../ChannelMessage'
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles'

const ChannelData: React.FC = function(){
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    
    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                    key={n} 
                    author="Juliana Avila"
                    date="16/07/2020"
                    content="Oi, tudo bem?"
                />
                ))}
                
                
                <ChannelMessage 
                    author="João"
                    date="16/07/2020"
                    content={
                        <>
                            <Mention>@Abner Pena de Souza</Mention>, reunião amanhã 14h?
                        </>
                    }
                    hasMention
                    isBot
                />
                    
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon/>
            </InputWrapper>

        </Container>
    );
}

export default ChannelData;