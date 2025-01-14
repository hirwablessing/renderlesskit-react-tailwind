import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useSwitchContext } from "./Switch";
import { forwardRefWithAs } from "../utils/types";

export type SwitchIconProps = BoxProps & {};

export const SwitchIcon = forwardRefWithAs<
  SwitchIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { state, size = "md" } = useSwitchContext();

  const theme = useTheme();
  const switchIconWrapperStyles = cx(
    theme.switch.icon.wrapper.base,
    theme.switch.icon.wrapper.size[size],
    state?.state
      ? theme.switch.icon.wrapper.checked
      : theme.switch.icon.wrapper.unchecked,
    className,
  );
  const switchIconContentStyles = cx(
    theme.switch.icon.content.base,
    theme.switch.icon.content.size[size],
    state?.state
      ? theme.switch.icon.content.checked[size]
      : theme.switch.icon.content.unchecked,
  );

  return (
    <Box
      as="span"
      className={switchIconWrapperStyles}
      ref={ref}
      aria-hidden="true"
      role="img"
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Box as="span" className={switchIconContentStyles} />
      )}
    </Box>
  );
});

SwitchIcon.displayName = "SwitchIcon";
