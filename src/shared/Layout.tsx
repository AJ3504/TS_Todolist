import React, { ReactNode } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

// 타입스크립트에서 children을 명시적으로 지정하려면 React.ReactNode 타입을 사용하면 됩니다. React.ReactNode는 React 컴포넌트가 반환할 수 있는 모든 유형의 데이터를 포함하는 타입입니다.
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
