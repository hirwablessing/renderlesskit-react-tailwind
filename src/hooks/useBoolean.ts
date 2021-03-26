// https://github.com/chakra-ui/chakra-ui/blob/400baf10768f5a1572a90474bddeceeccff7ddac/packages/hooks/src/use-boolean.ts
import { useCallback, useState } from "react";

type InitialState = boolean | (() => boolean);

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export function useBoolean(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, { on, off, toggle }] as const;
}
