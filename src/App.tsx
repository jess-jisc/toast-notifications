import { useState } from 'react';
import Aaron from './components/Aaron';
import './App.css';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

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
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  width: 300px;
  height: 25px;
  margin: auto;
`;

const Wrapper = styled.section`
  display: flex;
  height: 300px;
`;

const App = () => {
  const [list, setList] = useState<any>([]);
  const [displayNotification, setDisplayNotification] = useState<boolean>(
    false
  );

  let toastProps: any = [];
  
  const showToast = (type: any) => {
    switch (type) {
      case 'ok':
        toastProps = {
          id: uuidv4(),
          name: 'Ok',
          backgroundColor: '#D4EDDA',
          text: 'Hire',
        };
        break;
      case 'information':
        toastProps = {
          id: uuidv4(),
          name: 'Promote',
          backgroundColor: '#D1ECF1',
          text: 'Information',
        };
        break;
      case 'error':
        toastProps = {
          id: uuidv4(),
          name: 'Error',
          backgroundColor: '#F8D7DA',
          text: 'Fire',
        };
        break;
    }
    setList([...list, toastProps]);
  };

  const closeToast = (id: number) => {
    const toastCopy = list;

    const toastIndex = toastCopy.findIndex((obj: any) => obj.id === id);
    toastCopy.splice(toastIndex, 1);

    setList(toastCopy);

    return list;
  }

  // if (displayNotification) {
  //   setTimeout(() => {
  //     setDisplayNotification(false)
  //   }, 10000)
  // }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Toast Notifications</h1>
      </header>
      <Wrapper>
        <Box>
          <Button onClick={() => showToast('ok')}>
            Hire
          </Button>
          <Button onClick={() => showToast('information')}>
            Promote
          </Button>
          <Button onClick={() => showToast('error')}>
            Fire
          </Button>
        </Box>
      </Wrapper>
      {displayNotification ? <Aaron toastList={list} closeToast={closeToast} /> : null}
    </div>
  );
}

export default App;
