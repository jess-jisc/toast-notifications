import React from 'react';
import styled from 'styled-components';
import '../App.css';

const Wrapper = styled.section`
  display: flex;
  height: 100px;
`;

const Toast = styled.section`
  width: 10em;
  padding: 4em;
  border-radius: 0.25rem;
  padding: 0.75rem;
  z-index: 999998;
  justify-content: flex-start;
  align-items: flex-start;
  animation: toast-slide-up 0.3s;
  will-change: transform;
  margin: auto;
`;

const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #2f3e46;
  cursor: pointer;
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

export const Aaron = (props: {toastList: any}) => {
  return (
    <React.Fragment>
    {props.toastList.map((toast: any, i: number) => {
        return (
        <Wrapper key={i}>
        <Toast style={{backgroundColor: toast.backgroundColor}}>
          {toast.text}
          <Button>
            <img src={require('../assets/cross.png')} alt={`cancel the notification ${toast.name}`} className='cancel-img' />
          </Button>
        </Toast>
      </Wrapper>
      )
  })}
    </React.Fragment>
  );
};
