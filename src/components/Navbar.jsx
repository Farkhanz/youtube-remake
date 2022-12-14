import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background};
  height: 56px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`

const Search = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const Input = styled.input`
  border: none;
  background-color: transparent;
`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Telusuri' />

                    <SearchOutlinedIcon />
                </Search>
                <Button><AccountCircleIcon />Login</Button>
            </Wrapper>
        </Container>
    )
}
