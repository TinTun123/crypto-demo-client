<template>
    <div class="bg-white dark:bg-[var(--secondary-dark)] flex flex-col overflow-scroll h-[410px] rounded-[15px] mb-8">
                
        <div class="p-[30px] flex gap-x-4 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">
            
            <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect :class="[themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]']" class="" x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" />
                    <path d="M19.9072 13.5268C20.1231 13.3112 20.4157 13.1901 20.7208 13.1901C21.0259 13.1901 21.3185 13.3112 21.5343 13.5268L28.058 20.0505C28.2736 20.2663 28.3947 20.5589 28.3947 20.864C28.3947 21.1691 28.2736 21.4617 28.058 21.6775L21.5343 28.2012C21.3159 28.4044 21.0273 28.5151 20.729 28.51C20.4307 28.5048 20.1461 28.3842 19.9349 28.1736C19.7242 27.9623 19.6036 27.6777 19.5985 27.3794C19.5933 27.0811 19.704 26.7925 19.9072 26.5741L24.4661 22.0152H13.0459C12.7406 22.0152 12.4477 21.8939 12.2318 21.678C12.0159 21.4621 11.8947 21.1693 11.8947 20.864C11.8947 20.5587 12.0159 20.2659 12.2318 20.05C12.4477 19.8341 12.7406 19.7128 13.0459 19.7128H24.4661L19.9072 15.1539C19.6916 14.938 19.5706 14.6454 19.5706 14.3403C19.5706 14.0353 19.6916 13.7427 19.9072 13.5268Z" fill="white"/>
                </svg>
            </div>

            <div class="flex flex-col lg-phone:flex-1 gap-y-2 overflow-hidden">

                <div class="flex flex-col lg-phone:grid lg-phone:grid-cols-2 laptop:flex laptop:flex-row laptop:justify-between gap-y-2">

                    <div class="flex flex-col">
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Deposite
                        </span>
                        
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Bitcoin
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Wallet Name
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Bitcoin Wallet
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Date
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            3 Hour Before
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Amount
                        </span>

                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            405.34 BTC
                        </span>
                    </div>

                </div>

                <div class="flex py-[10px] px-[15px] w-full justify-between gap-x-2 bg-[var(--light-bg)] text-[var(--text-dark)] rounded-[6px] dark:bg-[var(--teriary-dark)] ">
                    <!-- TRX id -->
                    <span class="text-[var(--theme-sed-02)]">
                        TRX:
                    </span>
                    
                    <span class="whitespace-nowrap w-full overflow-hidden" style="text-overflow: ellipsis;">
                        7604a0c2f6337604a0c2f633
                    </span>
                    
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7.6C20.5 7.91826 20.3704 8.22348 20.1397 8.44853C19.9091 8.67357 19.5962 8.8 19.27 8.8C18.9438 8.8 18.6309 8.67357 18.4003 8.44853C18.1696 8.22348 18.04 7.91826 18.04 7.6V4.1L11.9402 10.051C11.7092 10.2764 11.3958 10.4031 11.069 10.4031C10.7422 10.4031 10.4288 10.2764 10.1977 10.051C9.96665 9.82557 9.83684 9.51981 9.83684 9.201C9.83684 8.88219 9.96665 8.57643 10.1977 8.351L16.2975 2.4H12.71C12.3838 2.4 12.0709 2.27357 11.8403 2.04853C11.6096 1.82348 11.48 1.51826 11.48 1.2C11.48 0.88174 11.6096 0.576516 11.8403 0.351472C12.0709 0.126428 12.3838 0 12.71 0H19.27C19.5962 0 19.9091 0.126428 20.1397 0.351472C20.3704 0.576516 20.5 0.88174 20.5 1.2V7.6ZM15.99 10C15.6638 10 15.3509 10.1264 15.1203 10.3515C14.8896 10.5765 14.76 10.8817 14.76 11.2V17.6H2.46V5.6H9.02C9.34622 5.6 9.65907 5.47357 9.88974 5.24853C10.1204 5.02348 10.25 4.71826 10.25 4.4C10.25 4.08174 10.1204 3.77652 9.88974 3.55147C9.65907 3.32643 9.34622 3.2 9.02 3.2H2.05C1.50631 3.2 0.984881 3.41071 0.600431 3.78579C0.215982 4.16086 0 4.66957 0 5.2V18C0 18.5304 0.215982 19.0391 0.600431 19.4142C0.984881 19.7893 1.50631 20 2.05 20H15.17C15.7137 20 16.2351 19.7893 16.6196 19.4142C17.004 19.0391 17.22 18.5304 17.22 18V11.2C17.22 10.8817 17.0904 10.5765 16.8597 10.3515C16.6291 10.1264 16.3162 10 15.99 10Z" fill="#666666"/>
                        </svg>
                    </span>

                </div>

                <div>
                    <span class="text-[var(--secondary-dark)] dark:text-[var(--text-dark)] text-[12px] font-[600]">
                        Note
                    </span>

                    <p class="text-[12px] font-400 relative text-[#444444] dark:text-[var(--text-dark-02)] line-clamp-2 border-b-2 border-dotted border-[#eeeeee]/20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat quam id, nihil similique maxime architecto nisi distinctio. Ea possimus quia provident perspiciatis quod labore placeat, rem necessitatibus magnam culpa.

                        <svg class="absolute bottom-0 right-0" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-[#0A0A0A] dark:fill-[#FFFFFF]" d="M14.5 3.55556V14.2222C14.5 14.7111 14.3421 15.1298 14.0263 15.4782C13.7106 15.8267 13.3314 16.0006 12.8889 16H1.61111C1.16806 16 0.78864 15.8258 0.472862 15.4773C0.157085 15.1289 -0.000535669 14.7105 1.36767e-06 14.2222V1.77778C1.36767e-06 1.28889 0.15789 0.870223 0.473668 0.521779C0.789446 0.173335 1.16859 -0.000591083 1.61111 1.50915e-06H11.2778L14.5 3.55556ZM7.25 13.3333C7.9213 13.3333 8.4919 13.0741 8.96181 12.5556C9.43171 12.037 9.66667 11.4074 9.66667 10.6667C9.66667 9.92593 9.43171 9.2963 8.96181 8.77778C8.4919 8.25926 7.9213 8 7.25 8C6.5787 8 6.0081 8.25926 5.5382 8.77778C5.06829 9.2963 4.83333 9.92593 4.83333 10.6667C4.83333 11.4074 5.06829 12.037 5.5382 12.5556C6.0081 13.0741 6.5787 13.3333 7.25 13.3333ZM2.41667 6.22222H9.66667V2.66667H2.41667V6.22222Z"/>
                        </svg>
                    </p>
                </div>

            </div>

        </div>

        <div class="p-[30px] flex gap-x-4 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">
            
            <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#7DCB78"/>
                <path d="M20.3821 28.1734C20.1662 28.389 19.8736 28.5101 19.5685 28.5101C19.2635 28.5101 18.9708 28.389 18.755 28.1734L12.2313 21.6497C12.0157 21.4339 11.8947 21.1413 11.8947 20.8362C11.8947 20.5311 12.0157 20.2385 12.2313 20.0227L18.755 13.499C18.9734 13.2958 19.262 13.1851 19.5603 13.1902C19.8586 13.1954 20.1432 13.316 20.3544 13.5266C20.5651 13.7379 20.6857 14.0225 20.6908 14.3208C20.696 14.6191 20.5853 14.9077 20.3821 15.1261L15.8232 19.685H27.2434C27.5487 19.685 27.8416 19.8063 28.0575 20.0222C28.2734 20.2381 28.3947 20.5309 28.3947 20.8362C28.3947 21.1415 28.2734 21.4343 28.0575 21.6502C27.8416 21.8661 27.5487 21.9874 27.2434 21.9874H15.8232L20.3821 26.5463C20.5977 26.7622 20.7188 27.0548 20.7188 27.3599C20.7188 27.6649 20.5977 27.9575 20.3821 28.1734Z" fill="white"/>
                </svg>
            </div>

            <div class="flex flex-col lg-phone:flex-1 gap-y-2 overflow-hidden">

                <div class="flex flex-col lg-phone:grid lg-phone:grid-cols-2 laptop:flex laptop:flex-row laptop:justify-between gap-y-2">

                    <div class="flex flex-col">
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Withdrawal
                        </span>
                        
                        <span class="text-[13px] font-[300] text-[#666666]">
                            LTC
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Wallet Name
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Litecoin Wallet
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Date
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            3 Hour Before
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Amount
                        </span>

                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            405.34 LTC
                        </span>
                    </div>

                </div>

                <div class="flex py-[10px] px-[15px] w-full justify-between gap-x-2 bg-[var(--light-bg)] text-[var(--text-dark)] rounded-[6px] dark:bg-[var(--teriary-dark)] ">
                    <!-- TRX id -->
                    <span class="text-[var(--theme-sed-02)]">
                        TRX:
                    </span>
                    
                    <span class="whitespace-nowrap w-full overflow-hidden" style="text-overflow: ellipsis;">
                        7604a0c2f6337604a0c2f633
                    </span>
                    
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7.6C20.5 7.91826 20.3704 8.22348 20.1397 8.44853C19.9091 8.67357 19.5962 8.8 19.27 8.8C18.9438 8.8 18.6309 8.67357 18.4003 8.44853C18.1696 8.22348 18.04 7.91826 18.04 7.6V4.1L11.9402 10.051C11.7092 10.2764 11.3958 10.4031 11.069 10.4031C10.7422 10.4031 10.4288 10.2764 10.1977 10.051C9.96665 9.82557 9.83684 9.51981 9.83684 9.201C9.83684 8.88219 9.96665 8.57643 10.1977 8.351L16.2975 2.4H12.71C12.3838 2.4 12.0709 2.27357 11.8403 2.04853C11.6096 1.82348 11.48 1.51826 11.48 1.2C11.48 0.88174 11.6096 0.576516 11.8403 0.351472C12.0709 0.126428 12.3838 0 12.71 0H19.27C19.5962 0 19.9091 0.126428 20.1397 0.351472C20.3704 0.576516 20.5 0.88174 20.5 1.2V7.6ZM15.99 10C15.6638 10 15.3509 10.1264 15.1203 10.3515C14.8896 10.5765 14.76 10.8817 14.76 11.2V17.6H2.46V5.6H9.02C9.34622 5.6 9.65907 5.47357 9.88974 5.24853C10.1204 5.02348 10.25 4.71826 10.25 4.4C10.25 4.08174 10.1204 3.77652 9.88974 3.55147C9.65907 3.32643 9.34622 3.2 9.02 3.2H2.05C1.50631 3.2 0.984881 3.41071 0.600431 3.78579C0.215982 4.16086 0 4.66957 0 5.2V18C0 18.5304 0.215982 19.0391 0.600431 19.4142C0.984881 19.7893 1.50631 20 2.05 20H15.17C15.7137 20 16.2351 19.7893 16.6196 19.4142C17.004 19.0391 17.22 18.5304 17.22 18V11.2C17.22 10.8817 17.0904 10.5765 16.8597 10.3515C16.6291 10.1264 16.3162 10 15.99 10Z" fill="#666666"/>
                        </svg>
                    </span>

                </div>

                <div>
                    <span class="text-[var(--secondary-dark)] dark:text-[var(--text-dark)] text-[12px] font-[600]">
                        Note
                    </span>

                    <p class="text-[12px] font-400 relative text-[#444444] dark:text-[var(--text-dark-02)] line-clamp-2 border-b-2 border-dotted border-[#eeeeee]/20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat quam id, nihil similique maxime architecto nisi distinctio. Ea possimus quia provident perspiciatis quod labore placeat, rem necessitatibus magnam culpa.

                        <svg class="absolute bottom-0 right-0" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-[#0A0A0A] dark:fill-[#FFFFFF]" d="M14.5 3.55556V14.2222C14.5 14.7111 14.3421 15.1298 14.0263 15.4782C13.7106 15.8267 13.3314 16.0006 12.8889 16H1.61111C1.16806 16 0.78864 15.8258 0.472862 15.4773C0.157085 15.1289 -0.000535669 14.7105 1.36767e-06 14.2222V1.77778C1.36767e-06 1.28889 0.15789 0.870223 0.473668 0.521779C0.789446 0.173335 1.16859 -0.000591083 1.61111 1.50915e-06H11.2778L14.5 3.55556ZM7.25 13.3333C7.9213 13.3333 8.4919 13.0741 8.96181 12.5556C9.43171 12.037 9.66667 11.4074 9.66667 10.6667C9.66667 9.92593 9.43171 9.2963 8.96181 8.77778C8.4919 8.25926 7.9213 8 7.25 8C6.5787 8 6.0081 8.25926 5.5382 8.77778C5.06829 9.2963 4.83333 9.92593 4.83333 10.6667C4.83333 11.4074 5.06829 12.037 5.5382 12.5556C6.0081 13.0741 6.5787 13.3333 7.25 13.3333ZM2.41667 6.22222H9.66667V2.66667H2.41667V6.22222Z"/>
                        </svg>
                    </p>
                </div>

            </div>

        </div>

        <div class="p-[30px] flex gap-x-4 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">
            
            <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#7DCB78"/>
                <path d="M20.3821 28.1734C20.1662 28.389 19.8736 28.5101 19.5685 28.5101C19.2635 28.5101 18.9708 28.389 18.755 28.1734L12.2313 21.6497C12.0157 21.4339 11.8947 21.1413 11.8947 20.8362C11.8947 20.5311 12.0157 20.2385 12.2313 20.0227L18.755 13.499C18.9734 13.2958 19.262 13.1851 19.5603 13.1902C19.8586 13.1954 20.1432 13.316 20.3544 13.5266C20.5651 13.7379 20.6857 14.0225 20.6908 14.3208C20.696 14.6191 20.5853 14.9077 20.3821 15.1261L15.8232 19.685H27.2434C27.5487 19.685 27.8416 19.8063 28.0575 20.0222C28.2734 20.2381 28.3947 20.5309 28.3947 20.8362C28.3947 21.1415 28.2734 21.4343 28.0575 21.6502C27.8416 21.8661 27.5487 21.9874 27.2434 21.9874H15.8232L20.3821 26.5463C20.5977 26.7622 20.7188 27.0548 20.7188 27.3599C20.7188 27.6649 20.5977 27.9575 20.3821 28.1734Z" fill="white"/>
                </svg>
            </div>

            <div class="flex flex-col lg-phone:flex-1 gap-y-2 overflow-hidden">

                <div class="flex flex-col lg-phone:grid lg-phone:grid-cols-2 laptop:flex laptop:flex-row laptop:justify-between gap-y-2">

                    <div class="flex flex-col">
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Deposite
                        </span>
                        
                        <span class="text-[13px] font-[300] text-[#666666]">
                            ETH
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Wallet Name
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Ethereum Wallet
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Date
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            3 Hour Before
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Amount
                        </span>

                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            405.34 ETH
                        </span>
                    </div>

                </div>

                <div class="flex py-[10px] px-[15px] w-full justify-between gap-x-2 bg-[var(--light-bg)] text-[var(--text-dark)] rounded-[6px] dark:bg-[var(--teriary-dark)] ">
                    <!-- TRX id -->
                    <span class="text-[var(--theme-sed-02)]">
                        TRX:
                    </span>
                    
                    <span class="whitespace-nowrap w-full overflow-hidden" style="text-overflow: ellipsis;">
                        7604a0c2f6337604a0c2f633
                    </span>
                    
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7.6C20.5 7.91826 20.3704 8.22348 20.1397 8.44853C19.9091 8.67357 19.5962 8.8 19.27 8.8C18.9438 8.8 18.6309 8.67357 18.4003 8.44853C18.1696 8.22348 18.04 7.91826 18.04 7.6V4.1L11.9402 10.051C11.7092 10.2764 11.3958 10.4031 11.069 10.4031C10.7422 10.4031 10.4288 10.2764 10.1977 10.051C9.96665 9.82557 9.83684 9.51981 9.83684 9.201C9.83684 8.88219 9.96665 8.57643 10.1977 8.351L16.2975 2.4H12.71C12.3838 2.4 12.0709 2.27357 11.8403 2.04853C11.6096 1.82348 11.48 1.51826 11.48 1.2C11.48 0.88174 11.6096 0.576516 11.8403 0.351472C12.0709 0.126428 12.3838 0 12.71 0H19.27C19.5962 0 19.9091 0.126428 20.1397 0.351472C20.3704 0.576516 20.5 0.88174 20.5 1.2V7.6ZM15.99 10C15.6638 10 15.3509 10.1264 15.1203 10.3515C14.8896 10.5765 14.76 10.8817 14.76 11.2V17.6H2.46V5.6H9.02C9.34622 5.6 9.65907 5.47357 9.88974 5.24853C10.1204 5.02348 10.25 4.71826 10.25 4.4C10.25 4.08174 10.1204 3.77652 9.88974 3.55147C9.65907 3.32643 9.34622 3.2 9.02 3.2H2.05C1.50631 3.2 0.984881 3.41071 0.600431 3.78579C0.215982 4.16086 0 4.66957 0 5.2V18C0 18.5304 0.215982 19.0391 0.600431 19.4142C0.984881 19.7893 1.50631 20 2.05 20H15.17C15.7137 20 16.2351 19.7893 16.6196 19.4142C17.004 19.0391 17.22 18.5304 17.22 18V11.2C17.22 10.8817 17.0904 10.5765 16.8597 10.3515C16.6291 10.1264 16.3162 10 15.99 10Z" fill="#666666"/>
                        </svg>
                    </span>

                </div>

                <div>
                    <span class="text-[var(--secondary-dark)] dark:text-[var(--text-dark)] text-[12px] font-[600]">
                        Note
                    </span>

                    <p class="text-[12px] font-400 relative text-[#444444] dark:text-[var(--text-dark-02)] line-clamp-2 border-b-2 border-dotted border-[#eeeeee]/20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat quam id, nihil similique maxime architecto nisi distinctio. Ea possimus quia provident perspiciatis quod labore placeat, rem necessitatibus magnam culpa.

                        <svg class="absolute bottom-0 right-0" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-[#0A0A0A] dark:fill-[#FFFFFF]" d="M14.5 3.55556V14.2222C14.5 14.7111 14.3421 15.1298 14.0263 15.4782C13.7106 15.8267 13.3314 16.0006 12.8889 16H1.61111C1.16806 16 0.78864 15.8258 0.472862 15.4773C0.157085 15.1289 -0.000535669 14.7105 1.36767e-06 14.2222V1.77778C1.36767e-06 1.28889 0.15789 0.870223 0.473668 0.521779C0.789446 0.173335 1.16859 -0.000591083 1.61111 1.50915e-06H11.2778L14.5 3.55556ZM7.25 13.3333C7.9213 13.3333 8.4919 13.0741 8.96181 12.5556C9.43171 12.037 9.66667 11.4074 9.66667 10.6667C9.66667 9.92593 9.43171 9.2963 8.96181 8.77778C8.4919 8.25926 7.9213 8 7.25 8C6.5787 8 6.0081 8.25926 5.5382 8.77778C5.06829 9.2963 4.83333 9.92593 4.83333 10.6667C4.83333 11.4074 5.06829 12.037 5.5382 12.5556C6.0081 13.0741 6.5787 13.3333 7.25 13.3333ZM2.41667 6.22222H9.66667V2.66667H2.41667V6.22222Z"/>
                        </svg>
                    </p>
                </div>

            </div>

        </div>

        <div class="p-[30px] flex gap-x-4">
            
            <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect :class="[themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]']" class="" x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)"/>
                <path d="M19.9072 13.5268C20.1231 13.3112 20.4157 13.1901 20.7208 13.1901C21.0259 13.1901 21.3185 13.3112 21.5343 13.5268L28.058 20.0505C28.2736 20.2663 28.3947 20.5589 28.3947 20.864C28.3947 21.1691 28.2736 21.4617 28.058 21.6775L21.5343 28.2012C21.3159 28.4044 21.0273 28.5151 20.729 28.51C20.4307 28.5048 20.1461 28.3842 19.9349 28.1736C19.7242 27.9623 19.6036 27.6777 19.5985 27.3794C19.5933 27.0811 19.704 26.7925 19.9072 26.5741L24.4661 22.0152H13.0459C12.7406 22.0152 12.4477 21.8939 12.2318 21.678C12.0159 21.4621 11.8947 21.1693 11.8947 20.864C11.8947 20.5587 12.0159 20.2659 12.2318 20.05C12.4477 19.8341 12.7406 19.7128 13.0459 19.7128H24.4661L19.9072 15.1539C19.6916 14.938 19.5706 14.6454 19.5706 14.3403C19.5706 14.0353 19.6916 13.7427 19.9072 13.5268Z" fill="white"/>
                </svg>
            </div>

            <div class="flex flex-col lg-phone:flex-1 gap-y-2 overflow-hidden">

                <div class="flex flex-col lg-phone:grid lg-phone:grid-cols-2 laptop:flex laptop:flex-row laptop:justify-between gap-y-2">

                    <div class="flex flex-col">
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Withdrawal
                        </span>
                        
                        <span class="text-[13px] font-[300] text-[#666666]">
                            BCH
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Wallet Name
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            Bitcoin Cash Wallet
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Date
                        </span>
                        
                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            3 Hour Before
                        </span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[13px] font-[300] text-[#666666]">
                            Amount
                        </span>

                        <span class="text-[16p] font-[400] text-[#444444] dark:text-[var(--text-dark)]">
                            405.34 BCH
                        </span>
                    </div>

                </div>

                <div class="flex py-[10px] px-[15px] w-full justify-between gap-x-2 bg-[var(--light-bg)] text-[var(--text-dark)] rounded-[6px] dark:bg-[var(--teriary-dark)] ">
                    <!-- TRX id -->
                    <span class="text-[var(--theme-sed-02)]">
                        TRX:
                    </span>
                    
                    <span class="whitespace-nowrap w-full overflow-hidden" style="text-overflow: ellipsis;">
                        7604a0c2f6337604a0c2f633
                    </span>
                    
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7.6C20.5 7.91826 20.3704 8.22348 20.1397 8.44853C19.9091 8.67357 19.5962 8.8 19.27 8.8C18.9438 8.8 18.6309 8.67357 18.4003 8.44853C18.1696 8.22348 18.04 7.91826 18.04 7.6V4.1L11.9402 10.051C11.7092 10.2764 11.3958 10.4031 11.069 10.4031C10.7422 10.4031 10.4288 10.2764 10.1977 10.051C9.96665 9.82557 9.83684 9.51981 9.83684 9.201C9.83684 8.88219 9.96665 8.57643 10.1977 8.351L16.2975 2.4H12.71C12.3838 2.4 12.0709 2.27357 11.8403 2.04853C11.6096 1.82348 11.48 1.51826 11.48 1.2C11.48 0.88174 11.6096 0.576516 11.8403 0.351472C12.0709 0.126428 12.3838 0 12.71 0H19.27C19.5962 0 19.9091 0.126428 20.1397 0.351472C20.3704 0.576516 20.5 0.88174 20.5 1.2V7.6ZM15.99 10C15.6638 10 15.3509 10.1264 15.1203 10.3515C14.8896 10.5765 14.76 10.8817 14.76 11.2V17.6H2.46V5.6H9.02C9.34622 5.6 9.65907 5.47357 9.88974 5.24853C10.1204 5.02348 10.25 4.71826 10.25 4.4C10.25 4.08174 10.1204 3.77652 9.88974 3.55147C9.65907 3.32643 9.34622 3.2 9.02 3.2H2.05C1.50631 3.2 0.984881 3.41071 0.600431 3.78579C0.215982 4.16086 0 4.66957 0 5.2V18C0 18.5304 0.215982 19.0391 0.600431 19.4142C0.984881 19.7893 1.50631 20 2.05 20H15.17C15.7137 20 16.2351 19.7893 16.6196 19.4142C17.004 19.0391 17.22 18.5304 17.22 18V11.2C17.22 10.8817 17.0904 10.5765 16.8597 10.3515C16.6291 10.1264 16.3162 10 15.99 10Z" fill="#666666"/>
                        </svg>
                    </span>

                </div>

                <div>
                    <span class="text-[var(--secondary-dark)] dark:text-[var(--text-dark)] text-[12px] font-[600]">
                        Note
                    </span>

                    <p class="text-[12px] font-400 relative text-[#444444] dark:text-[var(--text-dark-02)] line-clamp-2 border-b-2 border-dotted border-[#eeeeee]/20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat quam id, nihil similique maxime architecto nisi distinctio. Ea possimus quia provident perspiciatis quod labore placeat, rem necessitatibus magnam culpa.

                        <svg class="absolute bottom-0 right-0" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-[#0A0A0A] dark:fill-[#FFFFFF]" d="M14.5 3.55556V14.2222C14.5 14.7111 14.3421 15.1298 14.0263 15.4782C13.7106 15.8267 13.3314 16.0006 12.8889 16H1.61111C1.16806 16 0.78864 15.8258 0.472862 15.4773C0.157085 15.1289 -0.000535669 14.7105 1.36767e-06 14.2222V1.77778C1.36767e-06 1.28889 0.15789 0.870223 0.473668 0.521779C0.789446 0.173335 1.16859 -0.000591083 1.61111 1.50915e-06H11.2778L14.5 3.55556ZM7.25 13.3333C7.9213 13.3333 8.4919 13.0741 8.96181 12.5556C9.43171 12.037 9.66667 11.4074 9.66667 10.6667C9.66667 9.92593 9.43171 9.2963 8.96181 8.77778C8.4919 8.25926 7.9213 8 7.25 8C6.5787 8 6.0081 8.25926 5.5382 8.77778C5.06829 9.2963 4.83333 9.92593 4.83333 10.6667C4.83333 11.4074 5.06829 12.037 5.5382 12.5556C6.0081 13.0741 6.5787 13.3333 7.25 13.3333ZM2.41667 6.22222H9.66667V2.66667H2.41667V6.22222Z"/>
                        </svg>
                    </p>
                </div>

            </div>

        </div>
        
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';

const themeStore = useThemeStore();
</script>

<style>

</style>