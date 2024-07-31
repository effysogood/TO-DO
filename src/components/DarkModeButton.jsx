import { useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);
  const handleClick = (prev) => setIsDark(!prev);

  return (
    <button type='button' onClick={handleClick}>
      {isDark ? IoMoon : IoSunny}
    </button>
  );
}
