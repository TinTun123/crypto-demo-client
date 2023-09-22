<template>
        <div class="rounded-[8px] bg-white dark:bg-[var(--secondary-dark)] p-4 lg-phone:p-[32px] w-full lg-tablet:w-[60%] laptop:w-[60%] transition-colors">

            <h1 :class="[themestore.isgrad ? 'border-[var(--theme-from)]' : 'border-[var(--theme-color)]']" class="text-[18px] border-l-2 transition-colors pl-4 font-[600] border-partial text-[#121D33] dark:text-[var(--text-dark)] text-left mb-[25px]">Register!</h1>

            <div class="lg-phone:grid lg-phone:grid-cols-2 lg-phone:gap-4">
                <div class="flex flex-col gap-y-3 mb-[15px]">
                    <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">First Name</label>
                    <input v-model="form.firstName" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="your first name" type="text"/>
                    <span v-if="error.type === 'firstName'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
                </div>

                <div class="flex flex-col gap-y-3 mb-[15px]">
                    <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Last Name</label>
                    <input v-model="form.lastName" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="your last name" type="text"/>
                    <span v-if="error.type === 'lastName'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
                </div>

                <div class="flex flex-col gap-y-3 mb-[15px]">
                    <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Email</label>
                    <input v-model="form.email" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="Your email" type="mail"/>
                    <span v-if="error.type === 'email'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
            
                </div>

                <div class="flex flex-col gap-y-3 mb-[15px]">
                    <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Country</label>
                    <select v-model="form.selectedCountry" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" id="country">
                        <option value="" disabled>Select your country</option>
                        <option v-for="country in countries" :value="country.code" :key="country.code">{{ country.name }}</option>
                    </select>
                    <span v-if="error.type === 'country'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
            
                </div>

                <div class="flex flex-col gap-y-3 mb-[15px]">
                    <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Password</label>
                    <input v-model="form.password" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="" type="password"/>
                    <span v-if="error.type === 'password'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
                </div>

                <div class="flex flex-col gap-y-3 mb-[15px]">
                    <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Confirm password</label>
                    <input v-model="form.password_confirmation" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="" type="password"/>
                    <span v-if="error.type === 'password_confirmation'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
            
                </div>
            </div>





            <button @click.stop="register" class="py-[12px] px-[40px] flex justify-center items-center gap-x-3 mb-[15px] rounded-[6px] w-full text-[14px] font-[800] text-white bg-[var(--theme-color)]">
                    <span>
                        <span v-if="isLoading" class="spinner-container">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9854 8.98286C16.9661 7.90692 16.7346 6.84536 16.304 5.85914C15.8734 4.87291 15.2523 3.98146 14.4762 3.23594C13.3334 2.1315 11.8883 1.39125 10.3242 1.10901C8.76017 0.826778 7.14752 1.01526 5.6907 1.65058C4.73804 2.0686 3.87621 2.67446 3.16301 3.4176C2.4498 4.16073 1.88626 5.04218 1.51469 5.99484C0.769867 7.90847 0.812538 10.0391 1.63338 11.9214C2.03798 12.842 2.62526 13.676 3.34466 14.3654C4.06406 15.0549 4.9166 15.5988 5.8383 15.958C6.75854 16.3156 7.7402 16.4885 8.72724 16.4669C10.1883 16.4386 11.6081 15.9776 12.8071 15.1422C14.0061 14.3068 14.9303 13.1345 15.463 11.7738C15.6724 11.2349 15.8162 10.6728 15.8913 10.0996L15.9522 10.1017C16.0949 10.1016 16.236 10.0719 16.3667 10.0145C16.4974 9.95715 16.6147 9.87329 16.7113 9.76824C16.8079 9.6632 16.8817 9.53926 16.928 9.40425C16.9743 9.26925 16.992 9.12612 16.9802 8.9839H16.9843L16.9854 8.98286ZM15.3453 11.7232C14.9665 12.5809 14.4184 13.3581 13.7455 14.0001C13.0725 14.6421 12.2778 15.1478 11.4191 15.4802C10.5614 15.8122 9.64663 15.9715 8.72724 15.9487C7.82064 15.9291 6.92682 15.7308 6.09703 15.365C5.26724 14.9993 4.5178 14.4734 3.89169 13.8174C3.27424 13.1706 2.79025 12.4084 2.46735 11.5746C1.82584 9.91423 1.8689 8.06728 2.58708 6.43865C2.94007 5.64391 3.44994 4.92348 4.07438 4.32897C4.69882 3.73446 5.43783 3.2669 6.23361 2.96036C7.02938 2.65278 7.88089 2.50829 8.72724 2.53099C9.57359 2.5537 10.4086 2.73948 11.1713 3.08009C11.9351 3.41966 12.6266 3.91096 13.1974 4.51166C13.7682 5.11236 14.2172 5.82247 14.5103 6.58728C14.8031 7.35073 14.9424 8.16446 14.9201 8.98183H14.9242C14.9019 9.25004 14.9852 9.51636 15.1564 9.72401C15.3276 9.93166 15.5732 10.0642 15.8407 10.0934C15.7412 10.6543 15.5745 11.2012 15.3443 11.7221L15.3453 11.7232Z" fill="#ffffff"/>
                            </svg>
                        </span>
                    </span>

                    <span>
                        Register
                    </span>
                </button>
            <div class="flex gap-x-1 justify-center">
                <span class="text-[14px] font-[400] text-[#6D7C90]">
                    Already have an account?
                </span>
                <span @click="changeTabTo0" class="text-[14px] font-[500] laptop:cursor-pointer laptop:hover:text-white/90 transition-colors" :class="themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]'">
                    Login
                </span>
            </div>

        </div>
</template>


<script setup>
import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';

const themestore = useThemeStore();
const auth = useAuthStore();
const selectedCountry = ref('');
const isLoading = ref(false);

const emit = defineEmits(['changeTab'])

const regErr = ref('');

const form = ref({
    firstName : '',
    lastName : '',
    password : '',
    password_confirmation : '',
    email : '',
    selectedCountry : '',   
})

const error = ref({
    type : '',
    msg : ''
});

const countries = ref([
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' },
  { code: 'AI', name: 'Anguilla' },
  { code: 'AG', name: 'Antigua and Barbuda' },
  { code: 'AR', name: 'Argentina' },
  { code: 'AM', name: 'Armenia' },
  { code: 'AW', name: 'Aruba' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BS', name: 'Bahamas' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbados' },
  { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Benin' },
  { code: 'BM', name: 'Bermuda' },
  { code: 'BT', name: 'Bhutan' },
  { code: 'BO', name: 'Bolivia' },
  { code: 'BA', name: 'Bosnia and Herzegovina' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BR', name: 'Brazil' },
  { code: 'VG', name: 'British Virgin Islands' },
  { code: 'BN', name: 'Brunei' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' },
  { code: 'CA', name: 'Canada' },
  { code: 'CV', name: 'Cape Verde' },
  { code: 'KY', name: 'Cayman Islands' },
  { code: 'CF', name: 'Central African Republic' },
  { code: 'TD', name: 'Chad' },
  { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' },
  { code: 'CO', name: 'Colombia' },
  { code: 'KM', name: 'Comoros' },
  { code: 'CG', name: 'Congo-Brazzaville' },
  { code: 'CD', name: 'Congo-Kinshasa' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'CI', name: 'Cote Ivoire' },
  { code: 'HR', name: 'Croatia' },
  { code: 'CU', name: 'Cuba' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'DK', name: 'Denmark' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GQ', name: 'Equatorial Guinea' },
  { code: 'ER', name: 'Eritrea' },
  { code: 'EE', name: 'Estonia' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'FK', name: 'Falkland Islands' },
  { code: 'FO', name: 'Faroe Islands' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GF', name: 'French Guiana' },
  { code: 'PF', name: 'French Polynesia' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambia' },
  { code: 'GE', name: 'Georgia' },
  { code: 'DE', name: 'Germany' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GI', name: 'Gibraltar' },
  { code: 'GR', name: 'Greece' },
  { code: 'GL', name: 'Greenland' },
  { code: 'GD', name: 'Grenada' },
  { code: 'GP', name: 'Guadeloupe' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'GG', name: 'Guernsey' },
  { code: 'GN', name: 'Guinea' },
  { code: 'GW', name: 'Guinea-Bissau' },
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IR', name: 'Iran' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IM', name: 'Isle of Man' },
  { code: 'IL', name: 'Israel' },
  { code: 'IT', name: 'Italy' },
  { code: 'JM', name: 'Jamaica' },
  { code: 'JP', name: 'Japan' },
  { code: 'JE', name: 'Jersey' },
  { code: 'JO', name: 'Jordan' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'XK', name: 'Kosovo' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'LA', name: 'Laos' },
  { code: 'LV', name: 'Latvia' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Liberia' },
  { code: 'LY', name: 'Libya' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MO', name: 'Macau' },
  { code: 'MK', name: 'North Macedonia' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MV', name: 'Maldives' },
  { code: 'ML', name: 'Mali' },
  { code: 'MT', name: 'Malta' },
  { code: 'MH', name: 'Marshall Islands' },
  { code: 'MQ', name: 'Martinique' },
  { code: 'MR', name: 'Mauritania' },
  { code: 'MU', name: 'Mauritius' },
  { code: 'YT', name: 'Mayotte' },
  { code: 'MX', name: 'Mexico' },
  { code: 'FM', name: 'Micronesia' },
  { code: 'MD', name: 'Moldova' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' },
  { code: 'ME', name: 'Montenegro' },
  { code: 'MS', name: 'Montserrat' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'MM', name: 'Myanmar (Burma)' },
  { code: 'NA', name: 'Namibia' },
  { code: 'NR', name: 'Nauru' },
  { code: 'NP', name: 'Nepal' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'AN', name: 'Netherlands Antilles' },
  { code: 'NC', name: 'New Caledonia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NE', name: 'Niger' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NU', name: 'Niue' },
  { code: 'NF', name: 'Norfolk Island' },
  { code: 'KP', name: 'North Korea' },
  { code: 'NO', name: 'Norway' },
  { code: 'OM', name: 'Oman' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PS', name: 'Palestine' },
  { code: 'PA', name: 'Panama' },
  { code: 'PG', name: 'Papua New Guinea' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'PH', name: 'Philippines' },
  { code: 'PN', name: 'Pitcairn Islands' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RE', name: 'Reunion' },
  { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russia' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'SH', name: 'Saint Helena' },
  { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' },
  { code: 'PM', name: 'Saint Pierre and Miquelon' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'WS', name: 'Samoa' },
  { code: 'SM', name: 'San Marino' },
  { code: 'ST', name: 'Sao Tome and Principe' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SN', name: 'Senegal' },
  { code: 'RS', name: 'Serbia' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SG', name: 'Singapore' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SB', name: 'Solomon Islands' },
  { code: 'SO', name: 'Somalia' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
  { code: 'SS', name: 'South Sudan' },
  { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SD', name: 'Sudan' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SJ', name: 'Svalbard and Jan Mayen' },
  { code: 'SZ', name: 'Swaziland' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syria' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'TZ', name: 'Tanzania' },
  { code: 'TH', name: 'Thailand' },
  { code: 'BS', name: 'The Bahamas' },
  { code: 'GM', name: 'The Gambia' },
  { code: 'TL', name: 'Timor-Leste' },
  { code: 'TG', name: 'Togo' },
  { code: 'TK', name: 'Tokelau' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad and Tobago' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' },
  { code: 'TC', name: 'Turks and Caicos Islands' },
  { code: 'TV', name: 'Tuvalu' },
  { code: 'UG', name: 'Uganda' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'UZ', name: 'Uzbekistan' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VA', name: 'Vatican City' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'WF', name: 'Wallis and Futuna' },
  { code: 'EH', name: 'Western Sahara' },
  { code: 'YE', name: 'Yemen' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' },
])

function changeTabTo0() {
    emit('changeTab', 0);
}


async function register() {

    isLoading.value = true;
    if (!form.value.firstName) {
        error.value.type = 'firstName';
        error.value.msg = 'Please enter your First Name';
        isLoading.value = false;
        return;
    }

    if (!form.value.lastName) {
        error.value.type = 'lastName';
        error.value.msg = 'Please enter Last Name';
        isLoading.value = false;
        return;
    }

    if (!form.value.email) {
        error.value.type = 'email';
        error.value.msg = 'Please enter your email';
        isLoading.value = false;
        return;
    }

    if (!form.value.selectedCountry) {
        error.value.type = 'country';
        error.value.msg = 'Please enter your country of residance';
        isLoading.value = false;
        return;
    }

    

    if (!form.value.password) {
        error.value.type = 'password';
        error.value.msg = 'Please enter password';
        isLoading.value = false;
        return;
    }

    if (!form.value.password_confirmation) {
        error.value.type = 'password_confirmation';
        error.value.msg = 'Please enter confirmation password';
        isLoading.value = false;
        return;
    }

    if(form.value.password_confirmation !== form.value.password) {
        error.value.type = 'password_confirmation';
        error.value.msg = 'Password does not match!';
        isLoading.value = false;
        return;
    }

    const { data : registerRes, error : registerErr, status } = await auth.register(form.value);
    isLoading.value = false;
    if (status.value !== 'success') {
        regErr.value = registerErr.value.data.message;
        console.log(regErr.value);

        error.value.type = 'password';
        error.value.msg = regErr.value;
    } else {
        auth.userEmail = registerRes.value.email;
        emit('changeTab', 2);
    }

}

</script>

<style>
</style>