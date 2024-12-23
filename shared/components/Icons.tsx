interface PropType {
  fill?: string;
  stroke?: string;
  className?: string;
}

export const DashboardHome = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className}>
      <g clipPath="url(#clip0_284_74731)">
        <path
          d="M3 17H16.5M5.25 14V8.75M8.25 14V8.75M11.25 14V8.75M14.25 14V8.75M9.75 2L15.75 5.75H3.75L9.75 2Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_284_74731">
          <rect width="18" height="18" transform="translate(0.75 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Actions = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 19 19" className={className}>
      <g clipPath="url(#clip0_284_74734)">
        <path
          d="M3 13.25L4.5 14.75L7.5 11.75M10.5 5H16.5M10.5 9.5H16.5M10.5 14H16.5M3.75 4.25H6.75C7.16421 4.25 7.5 4.58579 7.5 5V8C7.5 8.41421 7.16421 8.75 6.75 8.75H3.75C3.33579 8.75 3 8.41421 3 8V5C3 4.58579 3.33579 4.25 3.75 4.25Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const Reports = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className}>
      <g clipPath="url(#clip0_284_74737)">
        <path
          d="M3 2.75V16.25H16.5M14.25 13.25V7.25M10.5 13.25V4.25M6.75 13.25V11"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const Search = ({ fill = 'none' }: PropType) => {
  return (
    <svg viewBox="0 0 16 17" fill={fill}>
      <path
        d="M7.33333 13.1667C10.2789 13.1667 12.6667 10.7789 12.6667 7.83333C12.6667 4.88781 10.2789 2.5 7.33333 2.5C4.38781 2.5 2 4.88781 2 7.83333C2 10.7789 4.38781 13.1667 7.33333 13.1667Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.4999L11.1 11.5999"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Bell = ({ fill = 'none', stroke = '#9EC1FF' }: PropType) => {
  return (
    <svg viewBox="0 0 20 21" fill={fill}>
      <path
        d="M15 7.16602C15 5.83993 14.4732 4.56816 13.5355 3.63048C12.5979 2.6928 11.3261 2.16602 10 2.16602C8.67392 2.16602 7.40215 2.6928 6.46447 3.63048C5.52678 4.56816 5 5.83993 5 7.16602C5 12.9993 2.5 14.666 2.5 14.666H17.5C17.5 14.666 15 12.9993 15 7.16602Z"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.438 18C11.2915 18.2526 11.0812 18.4622 10.8282 18.6079C10.5752 18.7537 10.2883 18.8304 9.99635 18.8304C9.70437 18.8304 9.41751 18.7537 9.1645 18.6079C8.91148 18.4622 8.7012 18.2526 8.55469 18"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const GripHorizontal = ({ fill = 'none' }: PropType) => {
  return (
    <svg viewBox="0 0 16 17" fill={fill}>
      <path
        d="M7.99998 7.16659C8.36817 7.16659 8.66665 6.86811 8.66665 6.49992C8.66665 6.13173 8.36817 5.83325 7.99998 5.83325C7.63179 5.83325 7.33331 6.13173 7.33331 6.49992C7.33331 6.86811 7.63179 7.16659 7.99998 7.16659Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 7.16659C13.0349 7.16659 13.3333 6.86811 13.3333 6.49992C13.3333 6.13173 13.0349 5.83325 12.6667 5.83325C12.2985 5.83325 12 6.13173 12 6.49992C12 6.86811 12.2985 7.16659 12.6667 7.16659Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33335 7.16659C3.70154 7.16659 4.00002 6.86811 4.00002 6.49992C4.00002 6.13173 3.70154 5.83325 3.33335 5.83325C2.96516 5.83325 2.66669 6.13173 2.66669 6.49992C2.66669 6.86811 2.96516 7.16659 3.33335 7.16659Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99998 11.1666C8.36817 11.1666 8.66665 10.8681 8.66665 10.4999C8.66665 10.1317 8.36817 9.83325 7.99998 9.83325C7.63179 9.83325 7.33331 10.1317 7.33331 10.4999C7.33331 10.8681 7.63179 11.1666 7.99998 11.1666Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 11.1666C13.0349 11.1666 13.3333 10.8681 13.3333 10.4999C13.3333 10.1317 13.0349 9.83325 12.6667 9.83325C12.2985 9.83325 12 10.1317 12 10.4999C12 10.8681 12.2985 11.1666 12.6667 11.1666Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33335 11.1666C3.70154 11.1666 4.00002 10.8681 4.00002 10.4999C4.00002 10.1317 3.70154 9.83325 3.33335 9.83325C2.96516 9.83325 2.66669 10.1317 2.66669 10.4999C2.66669 10.8681 2.96516 11.1666 3.33335 11.1666Z"
        stroke="#64748B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ConciergeBell = ({ fill = 'none' }: PropType) => {
  return (
    <svg viewBox="0 0 80 80" fill={fill} data-testid="conciergeBellIcon">
      <path
        d="M6.66669 59.9999C6.66669 58.2318 7.36907 56.5361 8.61931 55.2859C9.86955 54.0356 11.5652 53.3333 13.3334 53.3333H66.6667C68.4348 53.3333 70.1305 54.0356 71.3807 55.2859C72.631 56.5361 73.3334 58.2318 73.3334 59.9999V66.6666H6.66669V59.9999Z"
        stroke="#737E92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.6666 53.3334C66.6666 46.261 63.8571 39.4782 58.8562 34.4772C53.8552 29.4763 47.0724 26.6667 40 26.6667C32.9275 26.6667 26.1448 29.4763 21.1438 34.4772C16.1428 39.4782 13.3333 46.261 13.3333 53.3334"
        stroke="#737E92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 13.3333V26.6666"
        stroke="#737E92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3333 13.3333H46.6666"
        stroke="#737E92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CircleHelp = ({ stroke = '#000' }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_48_186899)">
        <path
          d="M6.06001 5.99992C6.21675 5.55436 6.52611 5.17866 6.93331 4.93934C7.34051 4.70002 7.81927 4.61254 8.28479 4.69239C8.75031 4.77224 9.17255 5.01427 9.47673 5.3756C9.7809 5.73694 9.94738 6.19427 9.94668 6.66658C9.94668 7.99992 7.94668 8.66658 7.94668 8.66658M8.00001 11.3333H8.00668M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.31811 1.33325 8.00001 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
          stroke={stroke}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_186899">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ChevronDown = () => {
  return (
    <svg viewBox="0 0 14 9" fill="none">
      <path
        d="M1 1.5L7 7.5L13 1.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ChevronUp = ({ className = '#0961FF' }: PropType) => {
  return (
    <svg viewBox="0 0 14 9" fill="none" className={className}>
      <path
        d="M1 1.5L7 7.5L13 1.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MoreItem = ({ stroke = '#0961FF' }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        d="M7.99998 8.66659C8.36817 8.66659 8.66665 8.36811 8.66665 7.99992C8.66665 7.63173 8.36817 7.33325 7.99998 7.33325C7.63179 7.33325 7.33331 7.63173 7.33331 7.99992C7.33331 8.36811 7.63179 8.66659 7.99998 8.66659Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99998 4.00008C8.36817 4.00008 8.66665 3.7016 8.66665 3.33341C8.66665 2.96522 8.36817 2.66675 7.99998 2.66675C7.63179 2.66675 7.33331 2.96522 7.33331 3.33341C7.33331 3.7016 7.63179 4.00008 7.99998 4.00008Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99998 13.3333C8.36817 13.3333 8.66665 13.0349 8.66665 12.6667C8.66665 12.2985 8.36817 12 7.99998 12C7.63179 12 7.33331 12.2985 7.33331 12.6667C7.33331 13.0349 7.63179 13.3333 7.99998 13.3333Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logout = ({ fill = 'none', className = '' }) => {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className}>
      <path
        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17L21 12L16 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12H9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlertInCircle = ({ fill = 'none', className = '' }: PropType) => {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16H12.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlertInTriangle = ({ className = '' }: PropType) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M21.7304 18L13.7304 3.99998C13.556 3.69218 13.303 3.43617 12.9973 3.25805C12.6917 3.07993 12.3442 2.98608 11.9904 2.98608C11.6366 2.98608 11.2892 3.07993 10.9835 3.25805C10.6778 3.43617 10.4249 3.69218 10.2504 3.99998L2.25042 18C2.0741 18.3053 1.98165 18.6519 1.98243 19.0045C1.98321 19.3571 2.0772 19.7032 2.25486 20.0078C2.43253 20.3124 2.68757 20.5646 2.99411 20.7388C3.30066 20.9131 3.64783 21.0032 4.00042 21H20.0004C20.3513 20.9996 20.6959 20.9069 20.9997 20.7313C21.3035 20.5556 21.5556 20.3031 21.7309 19.9991C21.9062 19.6951 21.9985 19.3504 21.9984 18.9995C21.9983 18.6486 21.9059 18.3039 21.7304 18Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H12.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AlertInfo = ({ fill = 'none', className = '' }: PropType) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H12.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const AlertSuccess = ({ fill = 'none', className = '' }: PropType) => {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className}>
      <path
        d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CrossCircle = ({ stroke = '#0961FF' }: PropType) => {
  return (
    <svg viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_475_25822)">
        <path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke={stroke}
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 6.75L6.75 11.25"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 6.75L11.25 11.25"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_475_25822">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowUpDown = ({ stroke = '#737E92' }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        d="M2 10.668L4.66667 13.3346M4.66667 13.3346L7.33333 10.668M4.66667 13.3346V2.66797M14 5.33464L11.3333 2.66797M11.3333 2.66797L8.66667 5.33464M11.3333 2.66797V13.3346"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ExpandIcon = ({ stroke = '#5C43DA' }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        d="M14 14L10 10M14 14V10.8M14 14H10.8"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.8V14M2 14H5.2M2 14L6 10"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.2V2M14 2H10.8M14 2L10 6"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 5.2V2M2 2H5.2M2 2L6 6"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ExternalLink = ({
  className = 'stroke-main-500 fillWhite',
}: PropType) => {
  return (
    <svg viewBox="0 0 12 12" className={className}>
      <path
        d="M9 6.5V9.5C9 9.76522 8.89464 10.0196 8.70711 10.2071C8.51957 10.3946 8.26522 10.5 8 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 1.5H10.5V4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 7L10.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const HelpCircle = ({ stroke = '#0961FF' }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_48_186899)">
        <path
          d="M6.06001 5.99992C6.21675 5.55436 6.52611 5.17866 6.93331 4.93934C7.34051 4.70002 7.81927 4.61254 8.28479 4.69239C8.75031 4.77224 9.17255 5.01427 9.47673 5.3756C9.7809 5.73694 9.94738 6.19427 9.94668 6.66658C9.94668 7.99992 7.94668 8.66658 7.94668 8.66658M8.00001 11.3333H8.00668M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.31811 1.33325 8.00001 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
          stroke={stroke}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_186899">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ChevronRight = ({ stroke = '#0961FF' }: PropType) => {
  return (
    <svg fill="none" stroke={stroke} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  );
};

export const Add = ({ stroke = '#0961FF' }: PropType) => {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M10 4.1665V15.8332"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16699 10H15.8337"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Close = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M15 5L5 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CheckCheck = () => {
  return (
    <svg
      viewBox="0 0 30 30"
      data-testid="checkCheckIcon"
    >
      <path
        d="M21.9969 7.80078L8.79688 21.0008L2.79688 15.0008"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.8 12.6016L17.8 21.6016L16 19.8016"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Trash2 = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M2 4H14"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6654 4V13.3333C12.6654 14 11.9987 14.6667 11.332 14.6667H4.66536C3.9987 14.6667 3.33203 14 3.33203 13.3333V4"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33203 3.9987V2.66536C5.33203 1.9987 5.9987 1.33203 6.66536 1.33203H9.33203C9.9987 1.33203 10.6654 1.9987 10.6654 2.66536V3.9987"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66797 7.33203V11.332"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33203 7.33203V11.332"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const File = ({ className }: PropType) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2V8H20" fill="#9EC1FF" />
    </svg>
  );
};
export const ArrowRight = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 16 17" className={className}>
      <path
        d="M3.33301 8.47827H12.6663"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.81152L12.6667 8.47819L8 13.1449"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CircleCheck = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <g clipPath="url(#clip0_711_2268)">
        <path
          d="M14.6663 7.38674V8.00007C14.6655 9.43769 14.2 10.8365 13.3392 11.988C12.4785 13.1394 11.2685 13.9817 9.88991 14.3893C8.5113 14.797 7.03785 14.748 5.68932 14.2498C4.3408 13.7516 3.18944 12.8308 2.40698 11.6248C1.62452 10.4188 1.25287 8.99211 1.34746 7.55761C1.44205 6.12312 1.99781 4.75762 2.93186 3.66479C3.86591 2.57195 5.1282 1.81033 6.53047 1.4935C7.93274 1.17668 9.39985 1.32163 10.713 1.90674"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 2.66675L8 9.34008L6 7.34008"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const XCircle = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <g clipPath="url(#clip0_711_2274)">
        <path
          d="M7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 4.31802 11.6816 1.33325 7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 6L6 10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L10 10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};
export const UserPlus = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8V14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 11H16"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Plus = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M12 5V19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Minus = () => {
  return (
    <svg
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Copy = ({ className }: PropType) => {
  return (
    <svg viewBox="0 0 24 24" className={className} data-testid="copyIcon">
      <path
        d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Edit = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1590_31113)">
        <path
          d="M7.33334 2.66797H2.66668C2.31305 2.66797 1.97392 2.80844 1.72387 3.05849C1.47382 3.30854 1.33334 3.64768 1.33334 4.0013V13.3346C1.33334 13.6883 1.47382 14.0274 1.72387 14.2774C1.97392 14.5275 2.31305 14.668 2.66668 14.668H12C12.3536 14.668 12.6928 14.5275 12.9428 14.2774C13.1929 14.0274 13.3333 13.6883 13.3333 13.3346V8.66797"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3333 1.66812C12.5986 1.4029 12.9583 1.25391 13.3333 1.25391C13.7084 1.25391 14.0681 1.4029 14.3333 1.66812C14.5986 1.93334 14.7476 2.29305 14.7476 2.66812C14.7476 3.04319 14.5986 3.4029 14.3333 3.66812L8.00001 10.0015L5.33334 10.6681L6.00001 8.00145L12.3333 1.66812Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1590_31113">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Refresh = ({ stroke = '#FFFFFF' }: PropType) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 1.33203V5.33203H6"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7.99844C13.9989 6.84065 13.6629 5.7079 13.0325 4.7368C12.4021 3.76571 11.5041 2.99775 10.447 2.52557C9.38987 2.05338 8.2187 1.89714 7.07476 2.07568C5.93082 2.25422 4.86297 2.75992 4 3.53178L2 5.33178"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.668V10.668H10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8C2.00105 9.15779 2.33707 10.2905 2.9675 11.2616C3.59794 12.2327 4.49588 13.0007 5.55301 13.4729C6.61013 13.9451 7.7813 14.1013 8.92524 13.9228C10.0692 13.7442 11.137 13.2385 12 12.4667L14 10.6667"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Eye = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
        stroke="#020617"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#020617"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const EyeOff = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M9.87964 9.88C9.58489 10.1547 9.34848 10.4859 9.18451 10.8539C9.02055 11.2218 8.93238 11.6191 8.92527 12.0219C8.91816 12.4247 8.99226 12.8248 9.14315 13.1984C9.29403 13.5719 9.51861 13.9113 9.80348 14.1962C10.0884 14.481 10.4277 14.7056 10.8012 14.8565C11.1748 15.0074 11.5749 15.0815 11.9777 15.0744C12.3805 15.0673 12.7778 14.9791 13.1458 14.8151C13.5138 14.6512 13.845 14.4148 14.1196 14.12"
        stroke="#020617"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7305 5.08C11.1518 5.02751 11.5759 5.00079 12.0005 5C19.0005 5 22.0005 12 22.0005 12C21.5534 12.9571 20.9927 13.8569 20.3305 14.68"
        stroke="#020617"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39"
        stroke="#020617"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L22 22"
        stroke="#020617"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DateIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2V6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14H8.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14H12.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14H16.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18H8.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H12.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 18H16.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronLeft = ({ className }: PropType) => {
  return (
    <svg
      width="5"
      height="10"
      viewBox="0 0 5 10"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.58238 1.01754C4.79327 1.22842 4.79327 1.57033 4.58238 1.78121L1.36422 4.99937L4.58238 8.21754C4.79327 8.42842 4.79327 8.77033 4.58238 8.98121C4.3715 9.1921 4.02959 9.19209 3.81871 8.98121L0.218709 5.38121C0.11744 5.27994 0.0605471 5.14259 0.0605471 4.99937C0.0605471 4.85616 0.11744 4.71881 0.218709 4.61754L3.81871 1.01754C4.02959 0.806654 4.3715 0.806654 4.58238 1.01754Z"
      />
    </svg>
  );
};

export const HelpWithInfo = ({ className }: PropType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 16V12" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 8H12.01" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};