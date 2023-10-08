export const LeftArrow = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19.92L8.48003 13.4C7.71003 12.63 7.71003 11.37 8.48003 10.6L15 4.07999" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const RatingSvg = ({ fill = true }) => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
    >
        <path
            d="M6.78179 1.73373L7.65112 3.4724C7.76966 3.71443 8.08579 3.94658 8.35251 3.99103L9.92818 4.25282C10.9358 4.42076 11.1729 5.15179 10.4468 5.87294L9.22185 7.09791C9.01439 7.30537 8.90078 7.70546 8.965 7.99194L9.31569 9.50834C9.5923 10.7086 8.95512 11.1729 7.89315 10.5456L6.41627 9.67134C6.14954 9.51328 5.70994 9.51328 5.43827 9.67134L3.96139 10.5456C2.90436 11.1729 2.26224 10.7037 2.53885 9.50834L2.88954 7.99194C2.95375 7.70546 2.84015 7.30537 2.63269 7.09791L1.40772 5.87294C0.686573 5.15179 0.918725 4.42076 1.92636 4.25282L3.50203 3.99103C3.76382 3.94658 4.07994 3.71443 4.19848 3.4724L5.06782 1.73373C5.542 0.790305 6.31254 0.790305 6.78179 1.73373Z"
            fill={fill ? '#FFC130' : 'none'}
            stroke="#FFC130"
            strokeWidth="0.740909"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>)
}

export const Whatsapp = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5.175 15.45C6.3 16.125 7.65 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 10.35 1.875 11.625 2.475 12.75L1.94044 14.806C1.74572 15.5549 2.43892 16.2317 3.18299 16.0191L5.175 15.45Z" stroke="#121212" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.375 11.1364C12.375 11.2579 12.348 11.3828 12.2905 11.5043C12.233 11.6258 12.1587 11.7405 12.0607 11.8485C11.895 12.0308 11.7125 12.1624 11.5063 12.2468C11.3035 12.3311 11.0838 12.375 10.8472 12.375C10.5024 12.375 10.134 12.294 9.74531 12.1286C9.3566 11.9633 8.96789 11.7405 8.58256 11.4604C8.19385 11.1769 7.82543 10.863 7.4739 10.5154C7.12575 10.1644 6.8114 9.7965 6.53086 9.41175C6.25369 9.027 6.03061 8.64225 5.86837 8.26088C5.70612 7.87613 5.625 7.50825 5.625 7.15725C5.625 6.92775 5.66556 6.70838 5.74668 6.50588C5.8278 6.3 5.95625 6.111 6.13539 5.94225C6.35172 5.72963 6.58832 5.625 6.83845 5.625C6.93309 5.625 7.02773 5.64525 7.11223 5.68575C7.20011 5.72625 7.27785 5.787 7.3387 5.87475L8.12287 6.97838C8.18371 7.06275 8.22765 7.14038 8.25807 7.21463C8.2885 7.2855 8.3054 7.35638 8.3054 7.4205C8.3054 7.5015 8.28174 7.5825 8.23441 7.66012C8.19047 7.73775 8.12625 7.81875 8.04513 7.89975L7.78824 8.16637C7.75106 8.2035 7.73416 8.24738 7.73416 8.30138C7.73416 8.32838 7.73754 8.352 7.7443 8.379C7.75444 8.406 7.76458 8.42625 7.77134 8.4465C7.83219 8.55787 7.93697 8.703 8.08569 8.8785C8.23779 9.054 8.40004 9.23288 8.5758 9.41175C8.75833 9.59063 8.93409 9.756 9.11323 9.90787C9.289 10.0564 9.43434 10.1576 9.54926 10.2184C9.56616 10.2251 9.58644 10.2352 9.6101 10.2454C9.63714 10.2555 9.66418 10.2589 9.6946 10.2589C9.75207 10.2589 9.79601 10.2386 9.83319 10.2015L10.0901 9.94838C10.1746 9.864 10.2557 9.79988 10.3334 9.75938C10.4112 9.71213 10.4889 9.6885 10.5734 9.6885C10.6376 9.6885 10.7052 9.702 10.7796 9.73238C10.854 9.76275 10.9317 9.80663 11.0162 9.864L12.135 10.6571C12.2229 10.7179 12.2837 10.7887 12.3209 10.8731C12.3547 10.9575 12.375 11.0419 12.375 11.1364Z" stroke="#121212" strokeMiterlimit="10" />
    </svg>)
}

export const Close = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
        <path d="M12 22.7819C17.5 22.7819 22 18.2819 22 12.7819C22 7.28186 17.5 2.78186 12 2.78186C6.5 2.78186 2 7.28186 2 12.7819C2 18.2819 6.5 22.7819 12 22.7819Z" stroke="#EB3030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.17 15.6119L14.83 9.95186" stroke="#EB3030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.83 15.6119L9.17 9.95186" stroke="#EB3030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}
export const Tick = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
        <path d="M12 22.7819C17.5 22.7819 22 18.2819 22 12.7819C22 7.28186 17.5 2.78186 12 2.78186C6.5 2.78186 2 7.28186 2 12.7819C2 18.2819 6.5 22.7819 12 22.7819Z" stroke="#00C408" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.75 12.7819L10.58 15.6119L16.25 9.95186" stroke="#00C408" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const ChevronDown = ({ classname }) => {
    return (
        <svg
            className={classname}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#787878"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.47021 10.74L12.0002 14.26L15.5302 10.74"
                stroke="#787878"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const DollarSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Paypal = ({ isSelected }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="-3.5 0 48 48" version="1.1">

            <title>Paypal-color</title>
            <desc>Created with Sketch.</desc>
            <defs>

            </defs>
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Color-" transform="translate(-804.000000, -660.000000)" fill="#022B87">
                    <path d="M838.91167,663.619443 C836.67088,661.085983 832.621734,660 827.440097,660 L812.404732,660 C811.344818,660 810.443663,660.764988 810.277343,661.801472 L804.016136,701.193856 C803.892151,701.970844 804.498465,702.674333 805.292267,702.674333 L814.574458,702.674333 L816.905967,688.004562 L816.833391,688.463555 C816.999712,687.427071 817.894818,686.662083 818.95322,686.662083 L823.363735,686.662083 C832.030541,686.662083 838.814901,683.170138 840.797138,673.069296 C840.856106,672.7693 840.951363,672.194809 840.951363,672.194809 C841.513828,668.456868 840.946827,665.920407 838.91167,663.619443 Z M843.301017,674.10803 C841.144899,684.052874 834.27133,689.316292 823.363735,689.316292 L819.408334,689.316292 L816.458414,708 L822.873846,708 C823.800704,708 824.588458,707.33101 824.733611,706.423525 L824.809211,706.027531 L826.284927,696.754676 L826.380183,696.243184 C826.523823,695.335698 827.313089,694.666708 828.238435,694.666708 L829.410238,694.666708 C836.989913,694.666708 842.92604,691.611256 844.660308,682.776394 C845.35583,679.23045 845.021677,676.257496 843.301017,674.10803 Z" id="Paypal">

                    </path>
                </g>
            </g>
        </svg>
    )
}

export const Card = ({ isSelected }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 8.50488H22" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 16.5049H8" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 16.5049H14.5" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Debitcard = ({ isSelected }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 9.5V14.5" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 9.5V14.5" stroke={isSelected ? '#FFC130' : '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Visa = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -140 780 780" enableBackground="new 0 0 780 500" version="1.1" xmlSpace="preserve"><path d="m293.2 348.73l33.359-195.76h53.358l-33.384 195.76h-53.333zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-0.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-0.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885 0.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-0.271 30.088 3.534 39.936 7.5l4.781 2.259 7.231-42.427m137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555 0.084 68.336 0.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-0.314 0.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293v3e-3zm-363.3-126.41l-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-0.063 84.004-195.39-56.524-1e-3" fill="#0E4595" /><path d="m146.92 152.96h-86.041l-0.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528" fill="#F2AE14" /></svg>
    )
}

export const Search = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.58335 17.5C13.9556 17.5 17.5 13.9555 17.5 9.58329C17.5 5.21104 13.9556 1.66663 9.58335 1.66663C5.2111 1.66663 1.66669 5.21104 1.66669 9.58329C1.66669 13.9555 5.2111 17.5 9.58335 17.5Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.3334 18.3333L16.6667 16.6666" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Filter = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.5 1.75H15.5C16.4167 1.75 17.1667 2.5 17.1667 3.41667V5.25C17.1667 5.91667 16.75 6.75 16.3333 7.16667L12.75 10.3333C12.25 10.75 11.9167 11.5833 11.9167 12.25V15.8333C11.9167 16.3333 11.5833 17 11.1667 17.25L10 18C8.91667 18.6667 7.41667 17.9167 7.41667 16.5833V12.1667C7.41667 11.5833 7.08334 10.8333 6.75 10.4167L3.58334 7.08333C3.16667 6.66667 2.83334 5.91667 2.83334 5.41667V3.5C2.83334 2.5 3.58334 1.75 4.5 1.75Z" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.10833 1.75L5 8.33333" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const Sort = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 5.83337H17.5" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 10H15" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8.33333 14.1666H11.6667" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export const Book = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18.3333 3.89162V13.95C18.3333 14.75 17.6833 15.4999 16.8833 15.5999L16.6083 15.6333C14.7917 15.875 11.9916 16.7999 10.3916 17.6833C10.175 17.8083 9.81666 17.8083 9.59166 17.6833L9.5583 17.6666C7.9583 16.7916 5.16668 15.875 3.35835 15.6333L3.11665 15.5999C2.31665 15.4999 1.66666 14.75 1.66666 13.95V3.88328C1.66666 2.89161 2.47497 2.14162 3.46663 2.22495C5.21663 2.36662 7.86663 3.24998 9.34997 4.17498L9.5583 4.29995C9.79997 4.44995 10.2 4.44995 10.4417 4.29995L10.5833 4.20829C11.1083 3.88329 11.775 3.55829 12.5 3.26662V6.66663L14.1667 5.55829L15.8333 6.66663V2.31666C16.0583 2.27499 16.275 2.24996 16.475 2.2333H16.525C17.5167 2.14996 18.3333 2.89162 18.3333 3.89162Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 4.57495V17.075" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.8333 2.31665V6.66663L14.1667 5.55828L12.5 6.66663V3.26661C13.5917 2.83328 14.8083 2.48332 15.8333 2.31665Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Notes = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M18.05 9.20005L17.2333 12.6834C16.5333 15.6917 15.15 16.9084 12.55 16.6584C12.1333 16.625 11.6833 16.55 11.2 16.4334L9.79999 16.1C6.32499 15.275 5.24999 13.5584 6.06665 10.075L6.88332 6.58338C7.04999 5.87505 7.24999 5.25838 7.49999 4.75005C8.47499 2.73338 10.1333 2.19171 12.9167 2.85005L14.3083 3.17505C17.8 3.99171 18.8667 5.71671 18.05 9.20005Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.55 16.6583C12.0333 17.0083 11.3833 17.3 10.5916 17.5583L9.27498 17.9917C5.96665 19.0583 4.22498 18.1667 3.14998 14.8583L2.08331 11.5667C1.01665 8.25833 1.89998 6.50833 5.20831 5.44167L6.52498 5.00833C6.86665 4.9 7.19165 4.80833 7.49998 4.75C7.24998 5.25833 7.04998 5.875 6.88331 6.58333L6.06665 10.075C5.24998 13.5583 6.32498 15.275 9.79998 16.1L11.2 16.4333C11.6833 16.55 12.1333 16.625 12.55 16.6583Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5333 7.60828L14.575 8.63328" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.71667 10.8334L12.1333 11.45" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 18.3333C14.5834 18.3333 18.3334 14.5833 18.3334 9.99996C18.3334 5.41663 14.5834 1.66663 10 1.66663C5.41669 1.66663 1.66669 5.41663 1.66669 9.99996C1.66669 14.5833 5.41669 18.3333 10 18.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.64166 12.3584L12.3583 7.64172" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3583 12.3584L7.64166 7.64172" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Calendar = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 9.08984H20.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.6947 13.7002H15.7037" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.6947 16.7002H15.7037" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 13.7002H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 16.7002H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.29431 13.7002H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.29431 16.7002H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const TutorProfile =() => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9.12004 8.1525C9.04504 8.145 8.95504 8.145 8.87254 8.1525C7.08754 8.0925 5.67004 6.63 5.67004 4.83C5.67004 2.9925 7.15504 1.5 9.00004 1.5C10.8375 1.5 12.33 2.9925 12.33 4.83C12.3225 6.63 10.905 8.0925 9.12004 8.1525Z" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const Note2 = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M16.245 7.82988L15.51 10.9649C14.88 13.6724 13.635 14.7674 11.295 14.5424C10.92 14.5124 10.515 14.4449 10.08 14.3399L8.82001 14.0399C5.69251 13.2974 4.72501 11.7524 5.46001 8.61738L6.19501 5.47488C6.34501 4.83738 6.52501 4.28238 6.75001 3.82488C7.62751 2.00988 9.12001 1.52238 11.625 2.11488L12.8775 2.40738C16.02 3.14238 16.98 4.69488 16.245 7.82988Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.295 14.5427C10.83 14.8577 10.245 15.1202 9.53251 15.3527L8.34751 15.7427C5.37001 16.7027 3.80251 15.9002 2.83501 12.9227L1.87501 9.9602C0.915012 6.9827 1.71001 5.4077 4.68751 4.4477L5.87251 4.0577C6.18001 3.9602 6.47251 3.8777 6.75001 3.8252C6.52501 4.2827 6.34501 4.8377 6.19501 5.4752L5.46001 8.6177C4.72501 11.7527 5.69251 13.2977 8.82001 14.0402L10.08 14.3402C10.515 14.4452 10.92 14.5127 11.295 14.5427Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.47998 6.39746L13.1175 7.31996" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.745 9.2998L10.92 9.85481" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const Messages = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6.375 14.2275H6C3 14.2275 1.5 13.4775 1.5 9.72754V5.97754C1.5 2.97754 3 1.47754 6 1.47754H12C15 1.47754 16.5 2.97754 16.5 5.97754V9.72754C16.5 12.7275 15 14.2275 12 14.2275H11.625C11.3925 14.2275 11.1675 14.3401 11.025 14.5276L9.90001 16.0276C9.40501 16.6876 8.59499 16.6876 8.09999 16.0276L6.97499 14.5276C6.85499 14.3626 6.585 14.2275 6.375 14.2275Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6.52539L4.5 8.02539L6 9.52539" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6.52539L13.5 8.02539L12 9.52539" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.75 6.27734L8.25 9.77237" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const Bank = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9.2775 1.61238L16.0275 4.31236C16.29 4.41736 16.5 4.73236 16.5 5.00986V7.49986C16.5 7.91236 16.1625 8.24986 15.75 8.24986H2.25C1.8375 8.24986 1.5 7.91236 1.5 7.49986V5.00986C1.5 4.73236 1.71 4.41736 1.9725 4.31236L8.7225 1.61238C8.8725 1.55238 9.1275 1.55238 9.2775 1.61238Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 16.5H1.5V14.25C1.5 13.8375 1.8375 13.5 2.25 13.5H15.75C16.1625 13.5 16.5 13.8375 16.5 14.25V16.5Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 13.5V8.25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 13.5V8.25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13.5V8.25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13.5V8.25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 13.5V8.25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0.75 16.5H17.25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 6.375C9.62132 6.375 10.125 5.87132 10.125 5.25C10.125 4.62868 9.62132 4.125 9 4.125C8.37868 4.125 7.875 4.62868 7.875 5.25C7.875 5.87132 8.37868 6.375 9 6.375Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const EditProfile = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 7.5C6.15685 7.5 7.5 6.15685 7.5 4.5C7.5 2.84315 6.15685 1.5 4.5 1.5C2.84315 1.5 1.5 2.84315 1.5 4.5C1.5 6.15685 2.84315 7.5 4.5 7.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 16.5C15.1569 16.5 16.5 15.1569 16.5 13.5C16.5 11.8431 15.1569 10.5 13.5 10.5C11.8431 10.5 10.5 11.8431 10.5 13.5C10.5 15.1569 11.8431 16.5 13.5 16.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const SideBarCalendar = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 1.5V3.75" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 1.5V3.75" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.625 6.81738H15.375" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.771 10.2754H11.7778" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.771 12.5254H11.7778" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99661 10.2754H9.00335" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99661 12.5254H9.00335" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.22073 10.2754H6.22747" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.22073 12.5254H6.22747" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const Logout = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.41663 6.3002C7.67496 3.3002 9.21663 2.0752 12.5916 2.0752H12.7C16.425 2.0752 17.9166 3.56686 17.9166 7.29186V12.7252C17.9166 16.4502 16.425 17.9419 12.7 17.9419H12.5916C9.24163 17.9419 7.69996 16.7335 7.42496 13.7835" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.66663 10H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5416 7.20801L13.3333 9.99967L10.5416 12.7913" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const ThreeDot = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="10" viewBox="0 0 3 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.25006 2.5C1.93756 2.5 2.50006 1.9375 2.50006 1.25C2.50006 0.5625 1.93756 0 1.25006 0C0.562561 0 6.10352e-05 0.5625 6.10352e-05 1.25C6.10352e-05 1.9375 0.562561 2.5 1.25006 2.5ZM1.25006 3.75C0.562561 3.75 6.10352e-05 4.3125 6.10352e-05 5C6.10352e-05 5.6875 0.562561 6.25 1.25006 6.25C1.93756 6.25 2.50006 5.6875 2.50006 5C2.50006 4.3125 1.93756 3.75 1.25006 3.75ZM1.25006 7.5C0.562561 7.5 6.10352e-05 8.0625 6.10352e-05 8.75C6.10352e-05 9.4375 0.562561 10 1.25006 10C1.93756 10 2.50006 9.4375 2.50006 8.75C2.50006 8.0625 1.93756 7.5 1.25006 7.5Z" fill="black" fillOpacity="0.87" />
        </svg>
    )
}

export const InoviceLink= ()=>{
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M11.2426 13.125H12.3751C14.6401 13.125 16.5001 11.2725 16.5001 9C16.5001 6.735 14.6476 4.875 12.3751 4.875H11.2426" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.75 4.875H5.625C3.3525 4.875 1.5 6.7275 1.5 9C1.5 11.265 3.3525 13.125 5.625 13.125H6.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 9H12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}

export const Addicon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 9H12" stroke="#787878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12V6" stroke="#787878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#787878" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const EditCalendar = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 1.5V3.75" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 1.5V3.75" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.625 6.81738H15.375" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4075 11.8272L11.7525 14.4822C11.6475 14.5872 11.55 14.7822 11.5275 14.9247L11.385 15.9372C11.3325 16.3047 11.5875 16.5597 11.955 16.5072L12.9675 16.3647C13.11 16.3422 13.3125 16.2447 13.41 16.1397L16.065 13.4847C16.5225 13.0272 16.74 12.4947 16.065 11.8197C15.3975 11.1522 14.865 11.3697 14.4075 11.8272Z" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.025 12.21C14.25 13.02 14.88 13.65 15.69 13.875" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375V9" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99661 10.2754H9.00335" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.22073 10.2754H6.22747" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.22073 12.5254H6.22747" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}


export const CrossIcon = () => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="ml-2 cursor-pointer"
        >
            <path d="M0 0h12v12H0z" fill="none" />
            <path
                fill="#000000"
                d="M10.146 3.854l-2-2L6 3.293 3.854 1.146l-2 2L3.293 6 1.146 8.146l2 2L6 8.707l2.146 2.146 2-2L8.707 6l2.146-2.146z"
            />
        </svg>
    )
}

export const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.58335 17.4994C13.9556 17.4994 17.5 13.9549 17.5 9.58268C17.5 5.21043 13.9556 1.66602 9.58335 1.66602C5.2111 1.66602 1.66669 5.21043 1.66669 9.58268C1.66669 13.9549 5.2111 17.4994 9.58335 17.4994Z" stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.3334 18.3327L16.6667 16.666" stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const LeftArrowPrev = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.875 7.11875L2.17088 4.25L4.875 1.38125L4.04251 0.5L0.5 4.25L4.04251 8L4.875 7.11875Z" fill="white" />
    </svg>)
}

export const RightArrowPrev = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.125 7.11875L2.82912 4.25L0.125 1.38125L0.95749 0.5L4.5 4.25L0.95749 8L0.125 7.11875Z" fill="white" />
        </svg>
    )
}

export const WhatsappDash = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.9 20.6C8.4 21.5 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2.44044 20.306C2.24572 21.0549 2.93892 21.7317 3.68299 21.5191L6.9 20.6Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 14.8485C16.5 15.0105 16.4639 15.177 16.3873 15.339C16.3107 15.501 16.2116 15.654 16.0809 15.798C15.86 16.041 15.6167 16.2165 15.3418 16.329C15.0714 16.4415 14.7784 16.5 14.4629 16.5C14.0033 16.5 13.512 16.392 12.9937 16.1715C12.4755 15.951 11.9572 15.654 11.4434 15.2805C10.9251 14.9025 10.4339 14.484 9.9652 14.0205C9.501 13.5525 9.08187 13.062 8.70781 12.549C8.33826 12.036 8.04081 11.523 7.82449 11.0145C7.60816 10.5015 7.5 10.011 7.5 9.543C7.5 9.237 7.55408 8.9445 7.66224 8.6745C7.77041 8.4 7.94166 8.148 8.18052 7.923C8.46895 7.6395 8.78443 7.5 9.11793 7.5C9.24412 7.5 9.37031 7.527 9.48297 7.581C9.60015 7.635 9.70381 7.716 9.78493 7.833L10.8305 9.3045C10.9116 9.417 10.9702 9.5205 11.0108 9.6195C11.0513 9.714 11.0739 9.8085 11.0739 9.894C11.0739 10.002 11.0423 10.11 10.9792 10.2135C10.9206 10.317 10.835 10.425 10.7268 10.533L10.3843 10.8885C10.3348 10.938 10.3122 10.9965 10.3122 11.0685C10.3122 11.1045 10.3167 11.136 10.3257 11.172C10.3393 11.208 10.3528 11.235 10.3618 11.262C10.4429 11.4105 10.5826 11.604 10.7809 11.838C10.9837 12.072 11.2 12.3105 11.4344 12.549C11.6778 12.7875 11.9121 13.008 12.151 13.2105C12.3853 13.4085 12.5791 13.5435 12.7323 13.6245C12.7549 13.6335 12.7819 13.647 12.8135 13.6605C12.8495 13.674 12.8856 13.6785 12.9261 13.6785C13.0028 13.6785 13.0613 13.6515 13.1109 13.602L13.4534 13.2645C13.5661 13.152 13.6743 13.0665 13.7779 13.0125C13.8816 12.9495 13.9852 12.918 14.0979 12.918C14.1835 12.918 14.2737 12.936 14.3728 12.9765C14.472 13.017 14.5756 13.0755 14.6883 13.152L16.18 14.2095C16.2972 14.2905 16.3783 14.385 16.4279 14.4975C16.473 14.61 16.5 14.7225 16.5 14.8485Z" stroke="#17191C" strokeMiterlimit="1.5" />
    </svg>)
}

export const Heart = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26" height="24" viewBox="0 0 26 26" version="1.1">
            <g id="icomoon-ignore">
            </g>
            <path d="M18.723 21.788c-1.151-0.48-3.884-1.423-5.565-1.919-0.143-0.045-0.166-0.052-0.166-0.649 0-0.493 0.203-0.989 0.4-1.409 0.214-0.456 0.468-1.224 0.559-1.912 0.255-0.296 0.602-0.88 0.826-1.993 0.196-0.981 0.104-1.338-0.026-1.673-0.013-0.035-0.028-0.070-0.038-0.105-0.049-0.23 0.018-1.425 0.187-2.352 0.116-0.636-0.030-1.989-0.906-3.108-0.553-0.707-1.611-1.576-3.544-1.696l-1.060 0.001c-1.9 0.12-2.96 0.988-3.513 1.695-0.876 1.119-1.021 2.472-0.905 3.108 0.169 0.928 0.236 2.123 0.188 2.348-0.010 0.039-0.025 0.074-0.039 0.11-0.129 0.335-0.221 0.692-0.025 1.673 0.222 1.113 0.57 1.697 0.826 1.993 0.090 0.688 0.344 1.456 0.559 1.912 0.157 0.334 0.231 0.788 0.231 1.431 0 0.597-0.023 0.604-0.157 0.646-1.739 0.513-4.505 1.513-5.537 1.965-0.818 0.351-1.017 0.98-1.017 1.548s0 2.251 0 2.623c0 0.371 0.22 1.006 1.017 1.006 0.613 0 5.518 0 7.746 0 0.668 0 1.098 0 1.098 0h0.192c0 0 0.437 0 1.115 0 2.237 0 7.135 0 7.747 0 0.796 0 1.017-0.634 1.017-1.006s0-2.055 0-2.623-0.392-1.262-1.209-1.613zM18.876 25.98h-17.827v-2.579c0-0.318 0.093-0.46 0.389-0.587 0.993-0.435 3.741-1.426 5.433-1.926 0.889-0.282 0.889-1.070 0.889-1.646 0-0.801-0.104-1.397-0.331-1.878-0.172-0.366-0.392-1.022-0.468-1.601l-0.041-0.312-0.206-0.238c-0.113-0.13-0.395-0.538-0.59-1.513-0.153-0.759-0.085-0.935-0.031-1.076 0.031-0.076 0.059-0.152 0.081-0.237l0.006-0.022 0.004-0.022c0.106-0.495-0.037-1.962-0.181-2.755-0.067-0.365 0.017-1.401 0.701-2.273 0.417-0.534 1.228-1.19 2.721-1.293l0.992-0.001c1.219 0.083 2.145 0.518 2.753 1.294 0.682 0.872 0.765 1.909 0.699 2.275-0.148 0.814-0.287 2.257-0.179 2.758l0.008 0.039 0.011 0.038c0.015 0.054 0.035 0.108 0.055 0.161l0.010 0.026v0.002c0.059 0.153 0.127 0.326-0.025 1.087-0.196 0.974-0.479 1.384-0.592 1.515l-0.204 0.237-0.041 0.31c-0.077 0.578-0.297 1.237-0.469 1.603-0.247 0.525-0.5 1.157-0.5 1.856 0 0.577 0 1.367 0.918 1.655 1.641 0.485 4.345 1.416 5.448 1.877 0.418 0.179 0.574 0.493 0.574 0.649l-0.006 2.579z" fill="#000000">

            </path>
            <path d="M23.296 14.965l2.742-2.742-0.743-0.742-2.741 2.742-2.742-2.742-0.742 0.742 2.742 2.742-2.742 2.742 0.742 0.742 2.742-2.742 2.742 2.742 0.742-0.742z" fill="#000000">

            </path>
        </svg>
    )
}

export const Moneysend = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.5V16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6V2H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7L22 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const DarkRightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path d="M6.8125 2.4707L9.34167 4.99987L6.8125 7.52904" stroke="#121212" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.2583 5H9.2708" stroke="#121212" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}