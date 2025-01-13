import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path d="M0 0 C0.86625 0.185625 1.7325 0.37125 2.625 0.5625 C2.78355469 1.24957031 2.94210938 1.93664062 3.10546875 2.64453125 C4.46313758 8.41661151 4.46313758 8.41661151 8.3125 12.6875 C9.075625 12.97625 9.83875 13.265 10.625 13.5625 C10.46 14.14 10.295 14.7175 10.125 15.3125 C9.48037969 17.82914369 9.48037969 17.82914369 9.625 21.5625 C10.140625 22.243125 10.65625 22.92375 11.1875 23.625 C11.661875 24.264375 12.13625 24.90375 12.625 25.5625 C12.295 26.5525 11.965 27.5425 11.625 28.5625 C5.25060386 29.05283816 5.25060386 29.05283816 2.3125 26.75 C1.01666524 25.0702142 -0.1981897 23.32771545 -1.375 21.5625 C-4.28302461 23.78178194 -6.32812762 25.49219143 -8.375 28.5625 C-11.5 28.75 -11.5 28.75 -14.375 28.5625 C-16.54708211 21.72493976 -12.35635316 15.60524265 -9.375 9.5625 C-4.78063035 0.79677173 -4.78063035 0.79677173 0 0 Z " fill="#FFFFFF" transform="translate(17.375,1.4375)"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
