import { useState } from 'react';

export const useBoolean = () => {
  const [value, setValue] = useState(false);

  const onToggle = () => setValue((prev) => !prev);
  const onTrue = () => setValue(true);
  const onFalse = () => setValue(false);

  return {
    value,
    onToggle,
    onTrue,
    onFalse,
  };
};
