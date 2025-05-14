// src/hooks/useSlider.ts
import { useRef, useState } from 'react';

/**
 * useSlider 훅은 탭 슬라이더의 활성 인덱스 상태와
 * 슬라이더 컨테이너의 ref, 탭 클릭 시 처리 로직을 관리합니다.
 *
 * @param initialIndex 초기 활성 탭 인덱스 (기본값 0)
 * @returns 활성 인덱스, 슬라이더 ref, 클릭 핸들러 함수
 */
export function useSlider(initialIndex: number = 0) {
  // 현재 활성화된 탭의 인덱스 상태
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // 슬라이더 컨테이너 DOM 참조용 ref
  const sliderRef = useRef<HTMLDivElement>(null);

  /**
   * 탭 클릭 시 호출되는 함수
   * @param index 클릭한 탭의 인덱스
   *
   * 활성 인덱스를 변경하고,
   * 클릭한 탭이 슬라이더 내에서 중앙에 오도록 스크롤 처리
   */
  const handleClick = (index: number) => {
    setActiveIndex(index);
    const slider = sliderRef.current;
    if (slider) {
      const item = slider.children[index] as HTMLElement;
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',    // 수직 정렬은 변화 없음
        inline: 'center',    // 수평 중앙 정렬
      });
    }
  };

  // 훅에서 관리하는 값과 함수를 반환
  return { activeIndex, sliderRef, handleClick };
}
