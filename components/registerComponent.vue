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





            <button @click.stop="register" class="py-[12px] px-[40px] mb-[15px] rounded-[6px] lg-phone:w-[50%] lg-phone:block lg-phone:mx-auto w-full text-[14px] font-[800] text-white bg-[var(--theme-color)]">Register</button>

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


    if (!form.value.firstName) {
        error.value.type = 'firstName';
        error.value.msg = 'Please enter your First Name';
        return;
    }

    if (!form.value.lastName) {
        error.value.type = 'lastName';
        error.value.msg = 'Please enter Last Name';

        return;
    }

    if (!form.value.email) {
        error.value.type = 'email';
        error.value.msg = 'Please enter your email';
        return;
    }

    if (!form.value.selectedCountry) {
        error.value.type = 'country';
        error.value.msg = 'Please enter your country of residance';
        return;
    }

    

    if (!form.value.password) {
        error.value.type = 'password';
        error.value.msg = 'Please enter password';

        return;
    }

    if (!form.value.password_confirmation) {
        error.value.type = 'password_confirmation';
        error.value.msg = 'Please enter confirmation password';

        return;
    }

    if(form.value.password_confirmation !== form.value.password) {
        error.value.type = 'password_confirmation';
        error.value.msg = 'Password does not match!';
        return;
    }

    const { data : registerRes, error : registerErr, status } = await auth.register(form.value);

    if (status.value !== 'success') {
        regErr.value = registerErr.value.data.message;
        console.log(regErr.value);

        error.value.type = 'password';
        error.value.msg = regErr.value;
    } else {
        navigateTo('/dashboard', {replace : true});
    }

}

</script>

<style>
</style>