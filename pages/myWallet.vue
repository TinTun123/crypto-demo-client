<template>
    <mainLayout>
        <div class="tablet:mx-[30px]">
            <div class="flex items-center mt-[15px] mx-4 gap-x-4 group laptop:cursor-pointer group py-[15px]">
                <div>
                    <!-- fill-[var(--theme-sed-02)] -->
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]" d="M16.7 4.75871H2.63745V4.1868L15.0125 3.18024V4.1868H16.7V2.47108C16.7 1.21288 15.6976 0.329856 14.4736 0.507148L3.17745 2.14738C1.95233 2.32581 0.949951 3.50051 0.949951 4.75871V16.1969C0.949951 16.8036 1.187 17.3855 1.60896 17.8145C2.03092 18.2435 2.60321 18.4845 3.19995 18.4845H16.7C17.2967 18.4845 17.869 18.2435 18.2909 17.8145C18.7129 17.3855 18.95 16.8036 18.95 16.1969V7.04634C18.95 6.43962 18.7129 5.85776 18.2909 5.42874C17.869 4.99973 17.2967 4.75871 16.7 4.75871ZM15.0125 12.7723C14.7908 12.7722 14.5713 12.7277 14.3665 12.6414C14.1617 12.5551 13.9757 12.4286 13.819 12.2692C13.6623 12.1098 13.538 11.9205 13.4532 11.7123C13.3685 11.504 13.3249 11.2808 13.325 11.0554C13.325 10.83 13.3688 10.6069 13.4537 10.3987C13.5386 10.1905 13.663 10.0013 13.8198 9.84198C13.9766 9.68266 14.1627 9.5563 14.3675 9.47012C14.5724 9.38393 14.7919 9.33962 15.0136 9.33969C15.4613 9.33984 15.8906 9.52081 16.2071 9.84279C16.5235 10.1648 16.7012 10.6014 16.7011 11.0566C16.7009 11.5117 16.5229 11.9482 16.2063 12.27C15.8896 12.5918 15.4602 12.7724 15.0125 12.7723Z" fill="#ED9A36"/>
                    </svg>
                </div>
                <!-- text-[var(--theme-sed-02)] -->
                <span class=" text-[20px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">
                    My Wallet
                </span>
            </div>


            <div class="flex flex-col mx-4 lg-phone:grid lg-phone:grid-cols-2 tablet:flex tablet:flex-col laptop:grid laptop:grid-cols-3 gap-[30px] mb-[30px]">

                <div class="p-[20px] rounded-[15px] bg-[#F6E0C9] dark:bg-[var(--secondary-dark)] flex flex-col items-center gap-y-4">
                    <div class="w-[60px] h-[60px] rounded-full">
                        <img src="/btc.png" class="w-full h-full" alt="">
                    </div>

                    <div class="flex flex-col items-center">
                        <span class="text-[18px] font-[400] text-[var(--secondary-dark)] dark:text-[var(--text-dark-02)]">
                            Bitcoin Wallet
                        </span>
                        
                        <span class="text-[15px] font-[400] text-[#666666]">
                            0.312373 BTC
                        </span>
                    </div>

                    <div class="flex w-full gap-x-[10px]">
                        <button @click.stop="triggerSend({walletType : 'BTC Wallet', bal : '0.232564 BTC', logo : '/btc.png'})" class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] bg-white/80 dark:bg-[#555555]/80 rounded-[4px]">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                                </svg>
                            </div>
                            
                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                SENT
                            </span>
                        </button>

                        <button @click.stop="triggerReceive({walletType : 'Bitcoin (BTC)', logo : '/btc.png'})" class="py-[12px] px-[8px] w-full h-[45px] flex justify-center items-center gap-x-2 bg-white/80 dark:bg-[#555555]/80 rounded-[4px] overflow-visible">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 11.75L3.5 7.92375H6.21425V3.25H8.7855V7.92375H11.5L7.5 11.75Z"/>
                                </svg>
                            </div>

                            <span  class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                RECEIVE
                            </span>
                        </button>
                    </div>
                </div>


                <div class="p-[20px] rounded-[15px] bg-[#DCDEF3] dark:bg-[var(--secondary-dark)] flex flex-col items-center gap-y-4">
                    <div class="w-[60px] h-[60px] rounded-full">
                        <img src="/eth.png" class="w-full h-full" alt="">
                    </div>

                    <div class="flex flex-col items-center">
                        <span class="text-[18px] font-[400] text-[var(--secondary-dark)] dark:text-[var(--text-dark-02)]">
                            Ethereum Wallet
                        </span>
                        
                        <span class="text-[15px] font-[400] text-[#666666]">
                            1.007346 ETH
                        </span>
                    </div>

                    <div class="flex w-full gap-x-[10px]">
                        <button @click.stop="triggerSend({walletType : 'Ethereum Wallet', bal : '1.007346 ETH', logo : '/eth.png'})" class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] bg-white/80 dark:bg-[#555555]/80 rounded-[4px]">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                                </svg>
                            </div>
                            
                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                SENT
                            </span>
                        </button>

                        <button @click.stop="triggerReceive({walletType : 'Ethereum Coin', logo : '/eth.png'})" class="py-[12px] px-[8px] w-full h-[45px] flex justify-center items-center gap-x-2 bg-white/80 dark:bg-[#555555]/80 rounded-[4px] overflow-visible">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 11.75L3.5 7.92375H6.21425V3.25H8.7855V7.92375H11.5L7.5 11.75Z"/>
                                </svg>
                            </div>

                            <span  class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                RECEIVE
                            </span>
                        </button>
                    </div>
                </div>


                <div class="p-[20px] rounded-[15px] bg-[#E1E1E1] dark:bg-[var(--secondary-dark)] flex flex-col items-center gap-y-4">
                    <div class="w-[60px] h-[60px] rounded-full">
                        <img src="/ltc.png" class="w-full h-full" alt="">
                    </div>

                    <div class="flex flex-col items-center">
                        <span class="text-[18px] font-[400] text-[var(--secondary-dark)] dark:text-[var(--text-dark-02)]">
                            Litecoin Wallet
                        </span>
                        
                        <span class="text-[15px] font-[400] text-[#666666]">
                            12.021421 LTC
                        </span>
                    </div>

                    <div class="flex w-full gap-x-[10px]">
                        <button @click.stop="triggerSend({walletType : 'Litecoin Wallet', bal : '12.021421 LTC', logo : '/ltc.png'})" class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] bg-white/80 dark:bg-[#555555]/80 rounded-[4px]">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                                </svg>
                            </div>
                            
                            <span  class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                SENT
                            </span>
                        </button>

                        <button @click.stop="triggerReceive({walletType : 'Litecoin (LTC)', logo : '/ltc.png'})" class="py-[12px] px-[8px] w-full h-[45px] flex justify-center items-center gap-x-2 bg-white/80 dark:bg-[#555555]/80 rounded-[4px] overflow-visible">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 11.75L3.5 7.92375H6.21425V3.25H8.7855V7.92375H11.5L7.5 11.75Z"/>
                                </svg>
                            </div>

                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                RECEIVE
                            </span>
                        </button>
                    </div>
                </div>

                <div class="p-[20px] rounded-[15px] bg-[#E2EBD7] dark:bg-[var(--secondary-dark)] flex flex-col items-center gap-y-4">
                    <div class="w-[60px] h-[60px] rounded-full">
                        <img src="/bch.png" class="w-full h-full" alt="">
                    </div>

                    <div class="flex flex-col items-center">
                        <span class="text-[18px] font-[400] text-[var(--secondary-dark)] dark:text-[var(--text-dark-02)]">
                            Bitcoin Cash Wallet
                        </span>
                        
                        <span class="text-[15px] font-[400] text-[#666666]">
                            877393,12 BCH
                        </span>
                    </div>

                    <div class="flex w-full gap-x-[10px]">
                        <button @click.stop="triggerSend({walletType : 'Bitcoin Cash Wallet', bal : '877393,12 BCH', logo : '/bch.png'})" class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] bg-white/80 dark:bg-[#555555]/80 rounded-[4px]">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                                </svg>
                            </div>
                            
                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                SENT
                            </span>
                        </button>

                        <button @click.stop="triggerReceive({walletType : 'Bitcoin Cash (BCH)', logo : '/bch.png'})" class="py-[12px] px-[8px] w-full h-[45px] flex justify-center items-center gap-x-2 bg-white/80 dark:bg-[#555555]/80 rounded-[4px] overflow-visible">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 11.75L3.5 7.92375H6.21425V3.25H8.7855V7.92375H11.5L7.5 11.75Z"/>
                                </svg>
                            </div>

                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                RECEIVE
                            </span>
                        </button>
                    </div>
                </div>

                <div class="p-[20px] rounded-[15px] bg-[#CDE1EC] dark:bg-[var(--secondary-dark)] flex flex-col items-center gap-y-4">
                    <div class="w-[60px] h-[60px] rounded-full">
                        <img src="/xrp.png" class="w-full h-full" alt="">
                    </div>

                    <div class="flex flex-col items-center">
                        <span class="text-[18px] font-[400] text-[var(--secondary-dark)] dark:text-[var(--text-dark-02)]">
                            Ripple Wallet
                        </span>
                        
                        <span class="text-[15px] font-[400] text-[#666666]">
                            323.0421 XRP
                        </span>
                    </div>

                    <div class="flex w-full gap-x-[10px]">
                        <button @click.stop="triggerSend({walletType : 'Ripple Wallet', bal : '323.0421 XRP', logo : '/xrp.png'})" class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] bg-white/80 dark:bg-[#555555]/80 rounded-[4px]">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                                </svg>
                            </div>
                            
                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                SENT
                            </span>
                        </button>

                        <button @click.stop="triggerReceive({walletType : 'Ripple (XRP)', logo : '/xrp.png'})" class="py-[12px] px-[8px] w-full h-[45px] flex justify-center items-center gap-x-2 bg-white/80 dark:bg-[#555555]/80 rounded-[4px] overflow-visible">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 11.75L3.5 7.92375H6.21425V3.25H8.7855V7.92375H11.5L7.5 11.75Z"/>
                                </svg>
                            </div>

                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                RECEIVE
                            </span>
                        </button>
                    </div>
                </div>

                <div class="p-[20px] rounded-[15px] bg-[#CDE1EC] dark:bg-[var(--secondary-dark)] flex flex-col items-center gap-y-4">
                    <div class="w-[60px] h-[60px] rounded-full">
                        <img src="/dash.png" class="w-full h-full" alt="">
                    </div>

                    <div class="flex flex-col items-center">
                        <span class="text-[18px] font-[400] text-[var(--secondary-dark)] dark:text-[var(--text-dark-02)]">
                            Dashcoin Wallet
                        </span>
                        
                        <span class="text-[15px] font-[400] text-[#666666]">
                            3.042189 DASH
                        </span>
                    </div>

                    <div class="flex w-full gap-x-[10px]">
                        <button @click.stop="triggerSend({walletType : 'Dashcoin Wallet', bal : '3.042189 DASH', logo : '/dash.png'})" class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] bg-white/80 dark:bg-[#555555]/80 rounded-[4px]">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                                </svg>
                            </div>
                            
                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                SENT
                            </span>
                        </button>

                        <button @click.stop="triggerReceive({walletType : 'Dashcoin (DAH)', logo : '/dash.png'})" class="py-[12px] px-[8px] w-full h-[45px] flex justify-center items-center gap-x-2 bg-white/80 dark:bg-[#555555]/80 rounded-[4px] overflow-visible">
                            <div class="w-[15px] h-[15px]  rounded-full flex justify-center items-center overflow-visible">
                                <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 11.75L3.5 7.92375H6.21425V3.25H8.7855V7.92375H11.5L7.5 11.75Z"/>
                                </svg>
                            </div>

                            <span class="text-[14px] font-[500] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                                RECEIVE
                            </span>
                        </button>
                    </div>
                </div>

            </div>

            <div class="flex justify-between mb-[30px] mx-4">
                
                <div class="flex items-center gap-x-2">
                    <div class="w-[20.5px] h-[21px]">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"/>
                        </svg>
                    </div>

                    <span class="text-[20px] font-[600] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">
                        Last Transcation
                    </span>
                </div>

                <div class="relative">
                    <div id="coin-list" @click="drop" class="flex bg-white items-center justify-between gap-x-6 rounded-[4px] shadow-input-sha border border-[#eeeeee] dark:shadow-none dark:border-none dark:bg-[var(--teriary-dark)] px-[10px] py-[10px]">

                        <div class="flex items-center gap-x-2">

                            <div class="w-[20px] h-[20px]">
                                <img src="/btc.png" class="w-full h-full" alt="">
                            </div>

                            <span class="text-[15px] text-[#444444] dark:text-[var(--text-dark)]">
                                Bitcoin
                            </span>

                        </div>

                        <div class="">
                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[var(--text-dark-02)] dark:fill-[--text-dark]" d="M12.4007 0.741579L7.12544 5.88385L1.85018 0.741579C1.75592 0.649518 1.6294 0.597979 1.49765 0.597979C1.3659 0.597979 1.23937 0.649518 1.14512 0.741579C1.09948 0.786294 1.06323 0.839664 1.03848 0.898567C1.01373 0.957468 1.00098 1.02072 1.00098 1.08461C1.00098 1.1485 1.01373 1.21175 1.03848 1.27065C1.06323 1.32955 1.09948 1.38292 1.14512 1.42764L6.75707 6.89921C6.85563 6.99528 6.98781 7.04904 7.12544 7.04904C7.26306 7.04904 7.39524 6.99528 7.4938 6.89921L13.1057 1.42869C13.1517 1.38395 13.1882 1.33045 13.2132 1.27134C13.2382 1.21225 13.251 1.14875 13.251 1.08461C13.251 1.02046 13.2382 0.956968 13.2132 0.89787C13.1882 0.838773 13.1517 0.785272 13.1057 0.740523C13.0115 0.648463 12.885 0.596924 12.7532 0.596924C12.6215 0.596924 12.495 0.649518 12.4007 0.741579Z" />
                            </svg>
                        </div>

                    </div>

                    <transition appear name="drop">

                        <div v-if="dropCoinslist" class="bg-white dark:bg-[var(--teriary-dark)] border absolute top-12 border-[#eeeeee]  p-1 dark:border-none rounded-[4px] shadow-input-sha dark:shadow-none z-50">

                            <ul>

                                <li class="flex justify-start gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/btc.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        Bitcoin
                                    </span>
                                </li>

                                <li class="flex justify-start gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/bch.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        Bitcoin Cash
                                    </span>
                                </li>

                                <li class="flex justify-start gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/eth.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        Ethereum
                                    </span>
                                </li>

                                <li class="flex justify-start gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/doge.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        DogeCoin
                                    </span>
                                </li>


                                <li class="flex justify-start gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/usdterc20.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        Tether USDT
                                    </span>
                                </li>


                                <li class="flex justify-start gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/dash.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        Dash
                                    </span>
                                </li>

                                <li class="flex justify-start gap-x-2 items-center p-1">

                                    <div class="w-[20px] h-[20px]">
                                        <img src="/usdt.png" class="w-full h-full" alt="">
                                    </div>

                                    <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                        Tether USD ERC20
                                    </span>
                                </li>

                            </ul>
                            
                        </div>

                    </transition>

                </div>


            </div>

            <div class="bg-white dark:bg-[var(--secondary-dark)] flex flex-col rounded-[15px]">
                
                <div class="p-[30px] flex gap-x-4 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">
                    
                    <div class="w-[40px] h-[40px]">
                        <!-- img -->
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#1377BE"/>
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
                                    BTC
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
                                    BTC
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
                        <rect x="40.1447" y="40.8501" width="40" height="40" rx="20" transform="rotate(180 40.1447 40.8501)" fill="#1377BE"/>
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

                

            </div>
        </div>


        <Teleport to="body">
            <transition name="modal">
            
                <div v-if="openSend" class="modal-mask">
                    <div class="modal-container tablet:w-[60%] laptop:w-[40%] rounded-[15px] overflow-hidden relative">
                        <sendComponent :coinType="sendCoinType" @close="closeSend"/>
                    </div>
                </div>                
            </transition>

        </Teleport>	

        <Teleport to="body">
            <transition name="modal">
            
                <div v-if="openReceive" class="modal-mask">
                    <div class="modal-container tablet:w-[60%] laptop:w-[40%] rounded-[15px] overflow-hidden relative">
                        <receiveComponent :coinType="receiveCoinType" @close="closeReceive"/>
                    </div>
                </div>       

            </transition>
        </Teleport>	
    </mainLayout>
</template>

<script setup>

import { useThemeStore } from '../store/useThemeStore';
import  mainLayout  from '../layouts/mainLayout';

definePageMeta({
  
  middleware : ['auth']

});

const themeStore = useThemeStore();
const dropCoinslist = ref(false);

const openSend = ref(false);
const openReceive = ref(false);

const sendCoinType = ref({});
const receiveCoinType = ref({});

function drop() {
    dropCoinslist.value = !dropCoinslist.value;
 
}

function triggerSend(cointype) {
    sendCoinType.value = cointype;
    openSend.value = !openSend.value;
}

function triggerReceive(coinType) {
    receiveCoinType.value = coinType;
    openReceive.value = !openReceive.value;
}

function closeSend() {
    console.log('close');
    openSend.value = !openSend.value;
}

function closeReceive() {
    openReceive.value = !openReceive.value;
}

</script>

<style>
</style>