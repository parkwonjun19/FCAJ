// src/components/TabSlider.tsx
import React from 'react';
import clsx from 'clsx';
import { useSlider } from '../hooks/useSlider';
import { TabSliderStyled } from '../styles/TabSliderStyled';

// 탭 목록과 각 탭에 대응하는 내용을 배열로 관리
const tabs = [
  { label: '쇼핑라이브', content: <div>쇼핑라이브 내용</div> },
  { label: '징보기', content: <div>징보기 내용</div> },
  { label: '원뿔딜', content: <div>원뿔딜 내용</div> },
  // ... 추가 탭
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
