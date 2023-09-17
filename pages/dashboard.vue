<template>
  <mainLayout>
    <div class="pb-8">
        <div class="flex justify-between flex-wrap gap-y-4 tablet:mx-[30px] px-[15px] py-[20px]">
          <div class="flex items-center gap-x-2">
            <div class="w-[23px] h-[20px]">
                <svg class="w-full h-full" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M9.30163 0.11109C7.58586 0.109124 5.90536 0.598211 4.4586 1.52059C3.01185 2.44296 1.85927 3.7601 1.13699 5.31644C0.414708 6.87278 0.152899 8.60331 0.382481 10.3037C0.612063 12.004 1.32345 13.6031 2.43261 14.9122L2.59616 15.103H16.0071L16.1707 14.9122C17.2798 13.6031 17.9912 12.004 18.2208 10.3037C18.4504 8.60331 18.1886 6.87278 17.4663 5.31644C16.744 3.7601 15.5914 2.44296 14.1447 1.52059C12.6979 0.598211 11.0174 0.109124 9.30163 0.11109ZM13.99 5.27921L10.7627 8.44659C10.9276 8.79532 10.964 9.19114 10.8654 9.56409C10.7667 9.93704 10.5394 10.2631 10.2236 10.4847C9.90783 10.7063 9.52388 10.8091 9.13962 10.775C8.75535 10.7409 8.39552 10.572 8.1237 10.2983C7.85188 10.0245 7.68558 9.66351 7.65418 9.27902C7.62279 8.89452 7.72831 8.5113 7.95212 8.19709C8.17593 7.88287 8.50361 7.65788 8.87725 7.56188C9.25089 7.46588 9.64643 7.50505 9.99399 7.67246L13.2159 4.50508L13.99 5.27921ZM1.45133 8.64285H3.30487V9.73317H1.42952C1.42952 9.52056 1.40226 9.3134 1.40226 9.09533C1.40226 8.87727 1.41316 8.79549 1.42407 8.64285H1.45133ZM4.11171 3.19125L5.4528 4.53234L4.65142 5.28466L3.30487 3.94902C3.54655 3.67329 3.80703 3.41463 4.08445 3.17489L4.11171 3.19125ZM9.84679 3.13128H8.75647V1.22322H9.30163C9.50334 1.22322 9.68325 1.22322 9.84679 1.25048V3.13128ZM17.201 9.10078C17.201 9.3134 17.201 9.53146 17.1737 9.73862H15.2548V8.6483H17.1792C17.1901 8.79549 17.201 8.94814 17.201 9.10078Z"/>
                </svg>
            </div>
            <span class="text-[var(--secondary-dark)] dark:text-[var(--text-dark)] font-[500] text-[20px]">
                Dashboard
            </span>
          </div>

          <div class="w-[150px] relative">
            <div @click="dropCoinlist = !dropCoinlist" class="bg-white dark:bg-[var(--teriary-dark)] flex justify-between items-center px-[15px] py-[10px] rounded-[8px]">
              
              <span class="text-[15px] font-[400] dark:text-[var(--text-dark)]">BTC</span>
              
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-[var(--text-dark-02)] dark:fill-[--text-dark]" d="M12.4007 0.741579L7.12544 5.88385L1.85018 0.741579C1.75592 0.649518 1.6294 0.597979 1.49765 0.597979C1.3659 0.597979 1.23937 0.649518 1.14512 0.741579C1.09948 0.786294 1.06323 0.839664 1.03848 0.898567C1.01373 0.957468 1.00098 1.02072 1.00098 1.08461C1.00098 1.1485 1.01373 1.21175 1.03848 1.27065C1.06323 1.32955 1.09948 1.38292 1.14512 1.42764L6.75707 6.89921C6.85563 6.99528 6.98781 7.04904 7.12544 7.04904C7.26306 7.04904 7.39524 6.99528 7.4938 6.89921L13.1057 1.42869C13.1517 1.38395 13.1882 1.33045 13.2132 1.27134C13.2382 1.21225 13.251 1.14875 13.251 1.08461C13.251 1.02046 13.2382 0.956968 13.2132 0.89787C13.1882 0.838773 13.1517 0.785272 13.1057 0.740523C13.0115 0.648463 12.885 0.596924 12.7532 0.596924C12.6215 0.596924 12.495 0.649518 12.4007 0.741579Z" />
                </svg>
           

            </div>
            <ul :class="dropCoinlist ? 'max-h-[1000px]' : 'max-h-0'" class="mt-1 absolute w-full overflow-hidden bg-white rounded-[8px] right-0 dark:bg-[var(--teriary-dark)] dark:text-[var(--text-dark)] dark:boder dark:border-[#eeeeee]/60 transition-all">
              <li class="px-[15px] py-[10px] font-[300] text-[15px] border-b dark:border-[#eeeeee]/20 border-[#eeeeee] laptop:hover:bg-[#eeeeee] transition dark:hover:bg-[#eeeeee]/10 laptop:cursor-pointer">BTC</li>
              <li class="px-[15px] py-[10px] font-[300] text-[15px] border-b dark:border-[#eeeeee]/20 border-[#eeeeee] laptop:hover:bg-[#eeeeee] transition dark:hover:bg-[#eeeeee]/10 laptop:cursor-pointer">ETH</li>
              <li class="px-[15px] py-[10px] font-[300] text-[15px] border-b dark:border-[#eeeeee]/20 border-[#eeeeee] laptop:hover:bg-[#eeeeee] transition dark:hover:bg-[#eeeeee]/10 laptop:cursor-pointer">BCH</li>
              <li class="px-[15px] py-[10px] font-[300] text-[15px] border-b dark:border-[#eeeeee]/20 border-[#eeeeee] laptop:hover:bg-[#eeeeee] transition dark:hover:bg-[#eeeeee]/10 laptop:cursor-pointer">LTC</li>
              <li class="px-[15px] py-[10px] font-[300] text-[15px] border-b dark:border-[#eeeeee]/20 border-[#eeeeee] laptop:hover:bg-[#eeeeee] transition dark:hover:bg-[#eeeeee]/10 laptop:cursor-pointer">DASH</li>
              <li class="px-[15px] py-[10px] font-[300] text-[15px] laptop:hover:bg-[#eeeeee] transition dark:hover:bg-[#eeeeee]/10 laptop:cursor-pointer">XMR</li>

            </ul>
          </div>

        </div>


        <div class="mx-4 lg-phone:mx-[30px] h-[465px] bg-white dark:bg-[var(--secondary-dark)] rounded-[15px] mb-[30px]">

        </div>

        <div class="mx-4 lg-phone:mx-[30px] flex flex-col lg-tablet:items-start gap-[30px] lg-tablet:flex-row">

          <div id="coin-balance" class="bg-white dark:bg-[var(--secondary-dark)] laptop:w-[50%] px-[30px] pt-[30px] rounded-[15px]">
            
            <div class="flex justify-between mb-[25px]">
              <h1 class="text-[20px] font-[600] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">Coin Balance</h1>

              <div class="flex items-center gap-x-2">
                <div class="overflow-x-visible flex items-center">

                  <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer">
                  <div  @click="setColortheme($colorMode.preference === 'dark' ? 'light' : 'dark')" id="modeSwitch" class="w-[32px] h-[20px] bg-[var(--text-dark)] peer-focus:outline-none rounded-full peer after:bg-white dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--text-dark)]"></div>

                  </label>

                </div>
                <span class="text-[#444444] dark:text-[var(--text-dark-02)]">Hide</span>
              </div>
            </div>

            <ul class="flex flex-col gap-y-[18px]">

              <li class="pb-[19px] flex gap-x-4 border-b dark:border-[#eeeeee]/20 border-[#eeeeee]">
                <div class="w-[40px] h-[40px]">
                    <img src="/btc.png" class="w-full h-full" alt="">
                </div>

                <div class="flex flex-col flex-1 lg-phone:flex-row lg-phone:justify-between">
                  <div class="flex flex-col">
                    <span class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Bitcoin</span>
                    <span class="text-[14px] font-[400] text-[#666666]">BTC</span>
                  </div>

                  <div>
                    <span class="text-[16px] font-[600] text-[var(--theme-sed-02)]">******* BTC</span>
                  </div>

                </div>
              </li>

              <li class="pb-[19px] flex  gap-x-4 border-b dark:border-[#eeeeee]/20 border-[#eeeeee]">
                <div class="w-[40px] h-[40px]">
                    <img src="/ltc.png" class="w-full h-full" alt="">
                </div>

                <div class="flex flex-col flex-1 lg-phone:flex-row lg-phone:justify-between">
                  <div class="flex flex-col">
                    <span class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Litecoin</span>
                    <span class="text-[14px] font-[400] text-[#666666]">LTC</span>
                  </div>

                  <span class="text-[16px] font-[600] text-[var(--theme-sed-02)]">******* BTC</span>
                </div>
              </li>


              <li class="pb-[19px] flex gap-x-4 border-b dark:border-[#eeeeee]/20 border-[#eeeeee]">
                <div class="w-[40px] h-[40px]">
                    <img src="/eth.png" class="w-full h-full" alt="">
                </div>

                <div class="flex flex-col lg-phone:flex-row lg-phone:justify-between flex-1">

                  <div class="flex flex-col">
                    <span class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Ethereum</span>
                    <span class="text-[14px] font-[400] text-[#666666]">ETH</span>
                  </div>

                  <span class="text-[16px] font-[600] text-[var(--theme-sed-02)]">******* ETH</span>
                </div>
              </li>


              <li class="pb-[19px] flex gap-x-4 border-b dark:border-[#eeeeee]/20 border-[#eeeeee]">
                <div class="w-[40px] h-[40px]">
                    <img src="/xrp.png" class="w-full h-full" alt="">
                </div>

                <div class="flex flex-col lg-phone:flex-row lg-phone:justify-between flex-1">

                  <div class="flex flex-col">
                    <span class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Ripple</span>
                    <span class="text-[14px] font-[400] text-[#666666]">XRP</span>
                  </div>

                  <span class="text-[16px] font-[600] text-[var(--theme-sed-02)]">******* XRP</span>
                </div>
              </li>


              <li class="pb-[19px] flex gap-x-4 ">
                <div class="w-[40px] h-[40px]">
                    <img src="/bch.png" class="w-full h-full" alt="">
                </div>

                <div class="flex flex-col lg-phone:flex-row lg-phone:justify-between flex-1">
                  <div class="flex flex-col">
                    <span class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Bitcoin Cash</span>
                    <span class="text-[14px] font-[400] text-[#666666]">BCH</span>
                  </div>

                  <span class="text-[16px] font-[600] text-[var(--theme-sed-02)]">0.15384 BCH</span>
                </div>
              </li>

            </ul>
          </div>

          <div class="bg-white dark:bg-[var(--secondary-dark)] px-[30px] pt-[30px] laptop:w-[50%] rounded-[15px]">
            <h1 class="text-[20px] font-[600] text-[var(--secondary-dark)] dark:text-[var(--text-dark)] mb-[25px]">Last Transaction</h1>

            <div class="flex gap-x-4 pb-[20px] mb-[20px] border-b border-1 dark:border-[#eeeeee]/20">

              <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#1377BE"/>
                  <path d="M19.9072 13.5268C20.1231 13.3112 20.4157 13.1901 20.7208 13.1901C21.0259 13.1901 21.3185 13.3112 21.5343 13.5268L28.058 20.0505C28.2736 20.2663 28.3947 20.5589 28.3947 20.864C28.3947 21.1691 28.2736 21.4617 28.058 21.6775L21.5343 28.2012C21.3159 28.4044 21.0273 28.5151 20.729 28.51C20.4307 28.5048 20.1461 28.3842 19.9349 28.1736C19.7242 27.9623 19.6036 27.6777 19.5985 27.3794C19.5933 27.0811 19.704 26.7925 19.9072 26.5741L24.4661 22.0152H13.0459C12.7406 22.0152 12.4477 21.8939 12.2318 21.678C12.0159 21.4621 11.8947 21.1693 11.8947 20.864C11.8947 20.5587 12.0159 20.2659 12.2318 20.05C12.4477 19.8341 12.7406 19.7128 13.0459 19.7128H24.4661L19.9072 15.1539C19.6916 14.938 19.5706 14.6454 19.5706 14.3403C19.5706 14.0353 19.6916 13.7427 19.9072 13.5268Z" fill="white"/>
                </svg>
              </div>

              <div class="flex flex-col gap-y-4 overflow-hidden">
                <div class="lg-phone:flex-row lg-phone:flex lg-phone:justify-between">
                  <div>
                    <!-- upper div -->
                    <h4 class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Deposite</h4>
                    <span class="text-[13px] font-[300] text-[var(--text-dark)]">
                      Litecoin Wallet
                    </span>
                  </div>

                  <div>
                    <!-- 405 LTC -->
                    <h4 class="text-[16px] font-[600] text-[var(--theme-sed-02)]">405.34 LTC</h4>
                    <span class="text-[13px] font-[300] text-[var(--text-dark)]">3 Hour before</span>
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
                  <span class="text-[var(--secondary-dark)] text-[12px] font-[600]">
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


            <div class="flex gap-x-4 pb-[20px] mb-[20px] border-b border-1 dark:border-[#eeeeee]/20">
              
              <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#7DCB78"/>
                  <path d="M20.3821 28.1734C20.1662 28.389 19.8736 28.5101 19.5685 28.5101C19.2635 28.5101 18.9708 28.389 18.755 28.1734L12.2313 21.6497C12.0157 21.4339 11.8947 21.1413 11.8947 20.8362C11.8947 20.5311 12.0157 20.2385 12.2313 20.0227L18.755 13.499C18.9734 13.2958 19.262 13.1851 19.5603 13.1902C19.8586 13.1954 20.1432 13.316 20.3544 13.5266C20.5651 13.7379 20.6857 14.0225 20.6908 14.3208C20.696 14.6191 20.5853 14.9077 20.3821 15.1261L15.8232 19.685H27.2434C27.5487 19.685 27.8416 19.8063 28.0575 20.0222C28.2734 20.2381 28.3947 20.5309 28.3947 20.8362C28.3947 21.1415 28.2734 21.4343 28.0575 21.6502C27.8416 21.8661 27.5487 21.9874 27.2434 21.9874H15.8232L20.3821 26.5463C20.5977 26.7622 20.7188 27.0548 20.7188 27.3599C20.7188 27.6649 20.5977 27.9575 20.3821 28.1734Z" fill="white"/>
                </svg>
              </div>

              <div class="flex flex-col gap-y-4 overflow-hidden">

                <div class="lg-phone:flex-row lg-phone:flex lg-phone:justify-between">
                  <div>
                    <!-- upper div -->
                    <h4 class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Withdrawal</h4>
                    <span class="text-[13px] font-[300] text-[var(--text-dark)]">
                      Litecoin Wallet
                    </span>
                  </div>

                  <div>
                    <!-- 405 LTC -->
                    <h4 class="text-[16px] font-[600] text-[var(--theme-sed-02)]">405.34 LTC</h4>
                    <span class="text-[13px] font-[300] text-[var(--text-dark)]">3 Hour before</span>
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
                  <span class="text-[var(--secondary-dark)] text-[12px] font-[600]">
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

            <div class="flex gap-x-4 pb-[20px] mb-[20px] border-b border-1 dark:border-[#eeeeee]/20">
              <div class="w-[40px] h-[40px]">
                <!-- img -->
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#1377BE"/>
                  <path d="M19.9072 13.5268C20.1231 13.3112 20.4157 13.1901 20.7208 13.1901C21.0259 13.1901 21.3185 13.3112 21.5343 13.5268L28.058 20.0505C28.2736 20.2663 28.3947 20.5589 28.3947 20.864C28.3947 21.1691 28.2736 21.4617 28.058 21.6775L21.5343 28.2012C21.3159 28.4044 21.0273 28.5151 20.729 28.51C20.4307 28.5048 20.1461 28.3842 19.9349 28.1736C19.7242 27.9623 19.6036 27.6777 19.5985 27.3794C19.5933 27.0811 19.704 26.7925 19.9072 26.5741L24.4661 22.0152H13.0459C12.7406 22.0152 12.4477 21.8939 12.2318 21.678C12.0159 21.4621 11.8947 21.1693 11.8947 20.864C11.8947 20.5587 12.0159 20.2659 12.2318 20.05C12.4477 19.8341 12.7406 19.7128 13.0459 19.7128H24.4661L19.9072 15.1539C19.6916 14.938 19.5706 14.6454 19.5706 14.3403C19.5706 14.0353 19.6916 13.7427 19.9072 13.5268Z" fill="white"/>
                </svg>
              </div>

              <div class="flex flex-col gap-y-4 overflow-hidden">

                <div class="lg-phone:flex-row lg-phone:flex lg-phone:justify-between">
                  <div>
                    <!-- upper div -->
                    <h4 class="text-[16px] font-[400] text-[#444444] dark:text-[var(--text-dark-02)]">Deposite</h4>
                    <span class="text-[13px] font-[300] text-[var(--text-dark)]">
                      Bitcoin Wallet

                    </span>
                  </div>

                  <div>
                    <!-- 405 LTC -->
                    <h4 class="text-[16px] font-[600] text-[var(--theme-sed-02)]">405.34 LTC</h4>
                    <span class="text-[13px] font-[300] text-[var(--text-dark)]">3 Hour before</span>
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
                  <span class="text-[var(--text-dark-02)] text-[12px] font-[600]">
                    Note
                  </span>

                  <p class="text-[12px] font-400 relative text-[#444444] dark:text-[var(--text-dark-)] dark:text-[var(--text-dark-02)] line-clamp-2 border-b-2 border-dotted border-[#eeeeee]/20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat quam id, nihil similique maxime architecto nisi distinctio. Ea possimus quia provident perspiciatis quod labore placeat, rem necessitatibus magnam culpa.

                    <svg class="absolute bottom-0 right-0" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-[#0A0A0A] dark:fill-[#FFFFFF]" d="M14.5 3.55556V14.2222C14.5 14.7111 14.3421 15.1298 14.0263 15.4782C13.7106 15.8267 13.3314 16.0006 12.8889 16H1.61111C1.16806 16 0.78864 15.8258 0.472862 15.4773C0.157085 15.1289 -0.000535669 14.7105 1.36767e-06 14.2222V1.77778C1.36767e-06 1.28889 0.15789 0.870223 0.473668 0.521779C0.789446 0.173335 1.16859 -0.000591083 1.61111 1.50915e-06H11.2778L14.5 3.55556ZM7.25 13.3333C7.9213 13.3333 8.4919 13.0741 8.96181 12.5556C9.43171 12.037 9.66667 11.4074 9.66667 10.6667C9.66667 9.92593 9.43171 9.2963 8.96181 8.77778C8.4919 8.25926 7.9213 8 7.25 8C6.5787 8 6.0081 8.25926 5.5382 8.77778C5.06829 9.2963 4.83333 9.92593 4.83333 10.6667C4.83333 11.4074 5.06829 12.037 5.5382 12.5556C6.0081 13.0741 6.5787 13.3333 7.25 13.3333ZM2.41667 6.22222H9.66667V2.66667H2.41667V6.22222Z"/>
                    </svg>
                  </p>
                </div>
              </div>


            </div>


          </div>

        </div>


    </div>
  </mainLayout>

  </template>
  
  
<script setup>
import  mainLayout  from '../layouts/mainLayout';
 
definePageMeta({
  
  middleware : ['auth']

});

const dropCoinlist = ref(false);

</script>