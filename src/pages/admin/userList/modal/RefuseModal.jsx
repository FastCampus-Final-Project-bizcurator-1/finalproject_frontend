import React from 'react';
import styled from 'styled-components';
import { useService } from '../../../../context/context';

export default function RefuseModal({ userId, handleRefuseModal }) {
  const { service } = useService();

  function roleRefuse() {
    // service.roleChangeRefuse(userId);
    handleRefuseModal();
  }

  return (
    <Wrapper>
      <Container>
        <Large>해당 회원의 가입을 반려하시겠습니까?.</Large>
        <Small>반려된 회원은 서비스 이용이 불가능합니다.</Small>
        <BtnContainer>
          <Btn onClick={roleRefuse}>반려하기</Btn>
          <Btn2 onClick={handleRefuseModal}>취소</Btn2>
        </BtnContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const Container = styled.div`
  width: 380px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 290px;
    height: 150px;
  }
`;

const Large = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 15px;
  padding: 0;
  text-align: center;
  color: red;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Small = styled.p`
  font-size: 13px;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BtnContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 100%;
`;

const Btn = styled.button`
  width: 40%;
  height: 40px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin: 15px 5px;
  cursor: pointer;
`;

const Btn2 = styled.button`
  width: 40%;
  height: 40px;
  font-weight: 600;
  color: #2b66fa;
  border: 2px solid #2b66fa;
  border-radius: 999px;
  background-color: #ffffff;
  margin: 20px 5px;
  cursor: pointer;
`;
