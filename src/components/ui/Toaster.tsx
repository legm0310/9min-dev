'use client';

import { Toaster as SonnerToaster, type ToasterProps } from 'sonner';
import { useTheme } from 'next-themes';

interface CustomToasterProps extends Partial<ToasterProps> {}

const Toaster = ({
  position = 'bottom-left',
  expand = true,
  ...rest
}: CustomToasterProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <SonnerToaster
      theme={resolvedTheme as ToasterProps['theme']}
      position={position}
      expand={expand}
      {...rest} // 확장
    />
  );
};

export default Toaster;
