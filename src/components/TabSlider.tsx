// src/components/TabSlider.tsx
// import React from 'react';
import clsx from 'clsx';
import { useSlider } from '../hooks/useSlider';
import { TabSliderStyled } from '../styles/TabSliderStyled';

// 탭 목록과 각 탭에 대응하는 내용을 배열로 관리
const tabs = [
    { label: '쇼핑라이브', content: <div>쇼핑라이브 내용</div> },
    { label: '징보기', content: <div>징보기 내용</div> },
    { label: '원뿔딜', content: <div>원뿔딜 내용</div> },
    { label: '책방', content: <div>책방 내용</div> },
    { label: '선물샵', content: <div>선물샵 내용</div> },
    { label: '도착보장', content: <div>도착보장 내용</div> },
    { label: '패션뷰티', content: <div>패션뷰티 내용</div> },
    { label: '쇼핑', content: <div>쇼핑 내용</div> },
    { label: '홈', content: <div>홈 내용</div> },
    { label: '뉴스', content: <div>뉴스 내용</div> },
    { label: '스포츠', content: <div>스포츠 내용</div> },
    { label: '연예', content: <div>연예 내용</div> },
    { label: '경제', content: <div>경제 내용</div> },
    { label: '쇼핑투데이', content: <div>쇼핑투데이 내용</div> },
    { label: '자동차', content: <div>자동차 내용</div> },
    { label: '게임', content: <div>게임 내용</div> },
    { label: '클립', content: <div>클립 내용</div> },
    { label: '건강', content: <div>건강 내용</div> },
    { label: '웹툰', content: <div>웹툰 내용</div> },
    { label: '지식+', content: <div>지식+ 내용</div> },
];

export default function TabSlider() {
  // useSlider 훅을 사용해 활성 인덱스, ref, 클릭 핸들러를 가져옴
  const { activeIndex, sliderRef, handleClick } = useSlider(0);

  return (
    <>
      {/* 탭 버튼 영역 */}
      <TabSliderStyled ref={sliderRef}>
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={clsx('slider-item', { active: index === activeIndex })}
            onClick={() => handleClick(index)}
            role="tab"
            tabIndex={0}
          >
            {tab.label}
          </div>
        ))}
      </TabSliderStyled>
      {/* 
        아래 부분이 핵심!
        현재 활성화된 탭의 인덱스(activeIndex)에 해당하는 content만 렌더링됨.
        탭을 클릭하면 activeIndex가 바뀌고, 그에 따라 다른 내용이 표시됨.
      */}
      <div style={{ marginTop: 24 }}>
        {tabs[activeIndex].content}
      </div>
    </>
  );
}
