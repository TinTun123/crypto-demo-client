import { useCookie, useRequestHeaders, type UseFetchOptions, useFetch } from 'nuxt/app'


export function useFetchUser() {

    let headers : any = {};

    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string;
    }


    headers = {
        ...headers,
        ...useRequestHeaders(["referer", "cookie"])   
    }

    //     return useFetch("https://crypto-demo.sunflowerseedsfoundation.com/user", {
    //     credentials : 'include',
    //     method : 'GET',
    //     watch : false,
    //     headers : {
    //         ...headers,
    //         referer : 'https://sunflowerseedsfoundation.com/'
    //     }
    // })

    return useFetch("http://localhost:8000/user", {
        credentials : 'include',
        watch : false,
        headers : {
            ...headers,
            referer : 'http://localhost:3000'
        }
    })
}