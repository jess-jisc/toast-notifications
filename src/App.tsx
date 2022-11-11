import { Aaron } from './components/Aaron';
import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #2f3e46;
  cursor: pointer;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0px 0px 0px 10px;
  padding: 10px 20px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Box = styled.section`
  width: 10em;
  padding: 4em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  width: 300px; 
  height: 25px;
  margin: auto; 
`;

const Wrapper = styled.section`
    display: flex;
    height: 300px;
`


function App() {

const [displayNotification, setDisplayNotifcation] = useState<boolean>(false)

const handleClick = () => {
  setDisplayNotifcation(true)
  }

  if (displayNotification) {
    setTimeout(() => {
      setDisplayNotifcation(false)
    }, 10000)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Toast Notifications</h1>
      </header>
      <Wrapper>
      <Box>
        <Button onClick={handleClick}>Hire</Button>
        <Button onClick={handleClick}>Promote</Button>
        <Button onClick={handleClick}>Fire</Button>
      </Box>
      </Wrapper>
      {displayNotification && <Aaron/>}
    </div>
  );
}

export default App;
