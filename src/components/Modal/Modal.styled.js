import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const FullImage = styled.div`
  max-width: calc(70vw - 48px);
  max-height: calc(100vh - 24px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #d1d1d1;
  }
`;
