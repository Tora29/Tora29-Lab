import { writable, derived } from 'svelte/store';

// ウィンドウ幅を保持するストア
export const windowWidth = writable(0);

// 1回だけリスナーを登録
if (typeof window !== 'undefined') {
  const updateWidth = () => windowWidth.set(window.innerWidth);

  // 初期値をセット
  updateWidth();
  // リサイズイベント
  window.addEventListener('resize', updateWidth);
}

// ブレイクポイントに応じて他コンポーネントから計算されるストア
export const breakpoint = derived(windowWidth, ($width) => {
  return {
    isXSmall: $width < 640,                   // ~639
    isSmall: $width >= 640 && $width < 768,   // 640-767
    isMedium: $width >= 768 && $width < 1024, // 768-1023
    isLarge: $width >= 1024 && $width < 1280, // 1024-1279
    isXLarge: $width >= 1280,                 // 1280~
  };
});
