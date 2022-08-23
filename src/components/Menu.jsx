import React from 'react'
import styled from 'styled-components'
import Nimetube from '../img/Logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HistoryIcon from '@mui/icons-material/History';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex:1;
    background-color: ${({ theme }) => theme.background};
    height: auto;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 8px 0px;
`;

const Hr = styled.div`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`
const Sign = styled.div``
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color:#aaaaaa;
    margin-bottom: 20px;

`

export const Menu = ({ darkMode, setdarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color:"inherit" }}>
                    <Logo>
                        <Img src={Nimetube} />
                        Nimetube
                    </Logo>
                </Link>
                <Title>AKTIVITAS</Title>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <ShortTextIcon />
                    Short
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscription
                </Item>
                <Hr />
                <Item>
                    <CollectionsBookmarkIcon />
                    Koleksi
                </Item>
                <Item>
                    <HistoryIcon />
                    Histori
                </Item>
                <Hr />
                <Sign>
                    Login untuk memberi tanda suka pada video, memberi komentar, dan subscribe.
                    <Button><AccountCircleIcon />Login</Button>
                </Sign>
                <Hr />
                <Title>EKSPLORASI</Title>
                <Item>
                    {/* <VideoLibraryIcon /> */}
                    <LibraryMusicOutlinedIcon />
                    Musik
                </Item>
                <Item>
                    {/* <WatchLaterIcon /> */}
                    <SportsFootballOutlinedIcon />
                    Olahraga
                </Item>
                <Item>
                    {/* <ThumbUpIcon /> */}
                    <SportsEsportsOutlinedIcon />
                    Game
                </Item>
                <Item>
                    {/* <ThumbUpIcon /> */}
                    <MovieCreationOutlinedIcon />
                    Film
                </Item>
                <Item>
                    {/* <ThumbUpIcon /> */}
                    <NewspaperOutlinedIcon />
                    Berita
                </Item>
                <Hr />
                <Item>
                    <SettingsIcon />
                    Setelan
                </Item>
                <Item>
                    <HistoryToggleOffIcon />
                    Histori laporan
                </Item>
                <Item>
                    <HelpIcon />
                    Bantuan
                </Item>
                <Item>
                    <FeedbackOutlinedIcon />
                    Kirim masukan
                </Item>
                <Item onClick={() => setdarkMode(!darkMode)}>
                    <ToggleOnIcon />
                    Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
