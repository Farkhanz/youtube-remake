import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
    color: ${({ theme }) => theme.text};
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`

const Channelimage = styled.img`
    width: 75px;
    height: 30px;
    border-radius: 50%;
    background-color: #999;
`

const Text = styled.div`

`

const TitleVideo = styled.h1`
    font-size: 16px;
    font-weight: 500;
`

const NameChannel = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 10px 0px;
`

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

const Card = () => {
    return (
        <Link to="/video/run" style={{textDecoration:"none"}}>
            <Container>
                <Image src='https://i.ytimg.com/vi/fy1dW_weSdM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCMxKw6dik7okqo5GiFEjfNIIibPw' />
                <Details>
                    <Channelimage src='https://yt3.ggpht.com/ytc/AMLnZu-QOSJJrZyxzO1IzST7qHiBEJ7DS-HJzWE0Km6xdQ=s68-c-k-c0x00ffffff-no-rj' />
                    <Text>
                        <TitleVideo>Kenapa Ketiga Main DPS ini TIDAK AKAN MATI atau ABADI! (META Analysis) | Genshin Impact Indonesia</TitleVideo>
                        <NameChannel>neovoid</NameChannel>
                        <Info>110.184 x ditonton • 2 bulan yang lalu</Info>
                    </Text>
                </Details>
            </Container>
        </Link>
    )
}

export default Card
