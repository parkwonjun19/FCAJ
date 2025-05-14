// src/pages/MainPage.tsx

// import React from 'react';
// import Box from '@mui/material/Box';


export default function MainPage() {
  // 환영 메시지와 공지 리스트 데이터
  const welcome = "환영합니다!";
  const items = ["공지사항", "이벤트", "업데이트"];

  // 여러 태그를 반환할 때는 반드시 하나의 부모 요소(예: <div> 또는 Fragment)로 감싸야 합니다.
  // Fragment(<>...</>)를 사용하면 불필요한 div 없이 여러 태그를 그룹화할 수 있습니다.
  return (
    <>

        <h2>메인 페이지</h2>
        <p>{welcome}</p>
        <ul>
          {/* 배열의 map을 이용해 리스트 아이템을 동적으로 생성합니다. */}
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

    </>
  );
}
