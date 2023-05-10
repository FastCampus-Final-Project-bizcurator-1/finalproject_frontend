import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';

export default function SideBar() {
  const [select, setSelect] = useState('userlist');
  const navigate = useNavigate();

  const handleClick = e => {
    const target = e.target.dataset.id;
    setSelect(target);
    if (target) {
      navigate(`/admin/management/${target}`);
    }
  };

  console.log(select);

  return (
    <Container>
      <ItemContainer onClick={handleClick}>
        <Item select={select} dataId="userlist" text="회원" />
        <Item select={select} dataId="product" text="상품" />
        <Item select={select} dataId="paymenthistory" text="판매" />
        <Item select={select} dataId="inquiryhistory" text="문의" />
      </ItemContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 94px;
  height: 200px;
  font-size: 16px;
  background-color: yellow;
  left: 20%;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
