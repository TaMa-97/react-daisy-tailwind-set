import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '@/theme';
import ScrollContext from './ScrollContext';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  /*スクロールバー非表示（IE・Edge）*/
  -ms-overflow-style: none;
  /*スクロールバー非表示（Firefox）*/
  scrollbar-width: none;
  /*スクロールバー非表示（Chrome・Safari）*/
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  ${theme.bp.tabletP`
    overflow-y: scroll;
    justify-content: center;
  `}
`;
const StyledBody = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
`;
const StyledContainerInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  white-space: pre-wrap;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 50px;
`;

export interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <ScrollContext.Provider value={containerRef}>
      <StyledContainer>
        <StyledBody>
          <StyledContainerInner ref={containerRef}>
            {children}
          </StyledContainerInner>
        </StyledBody>
      </StyledContainer>
    </ScrollContext.Provider>
  );
}

export default Container;
