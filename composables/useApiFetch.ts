import { useCookie, useRequestHeaders, type UseFetchOptions, useFetch } from 'nuxt/app'


export function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {

    let headers : any = {};

    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string;
    }


    headers = {
        
        ...headers,
        ...useRequestHeaders(["referer", "cookie"])   

    }
    
    // return useFetch("https://crypto-demo.sunflowerseedsfoundation.com/" + url, {
    //     credentials : 'include',
    //     watch : false,
    //     ...options,
    //     headers : {
    //         ...headers,
    //         ...options?.headers,
    //         referer : 'https://sunflowerseedsfoundation.com/'
    //     }
    // })

        return useFetch("http://localhost:8000/" + url, {
        credentials : 'include',
        watch : false,
        ...options,
        headers : {
            ...headers,
            ...options?.headers,
            referer : 'http://localhost:3000/'
        },
        onRequest({request, response, options}) {

            console.log('request', request);
            console.log('response', response);
            
            
        },
        onRequestError({request, response, options}) {
            console.log('Onerr request', request);
            console.log('Onerr response', response);
        }
    })
}