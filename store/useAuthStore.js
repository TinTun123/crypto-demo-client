import { defineStore } from "pinia";
import { useApiFetch } from "#imports";
import { useFetchUser } from "#imports";

export const useAuthStore = defineStore('auth', {
    state : () => ({

        user : {},
        openSend : null,
        openReceive : null,
        isLoading : null,
        userEmail : '',
        userObj : {},
        userList : []
    }), 

    getters : {
        isLoggedIn : (state) => {
           
            return state.user.id ? true : false;
            
        },
        isAdmin : (state) => {
            return state.user.user_level === 1 ? true : false;
        }
    },
    actions : {

        async verify2fa(code) {
            const verify2fa = await useApiFetch('verify2fa', {
                method : 'POST',
                body : code
            });

            await this.fetchUser();

            return verify2fa;

        },
        async login (credentials) {

            await useApiFetch('sanctum/csrf-cookie');

            const token = useCookie('XSRF-TOKEN');

            const loginResp = await useApiFetch("login", {
                method : 'POST',
                body : credentials
            });

            return loginResp;

        },
        async fetchUser () {

            const {data, error, status} = await useFetchUser();
            
            if (data.value) {
                this.user = data.value;
            } else {

                this.user = {};

            }

            
            return error;
        },
        async logout () {
            await useApiFetch("logout", {
                method : 'POST'
            });

            this.user = {};
            
            navigateTo('/loginRegister', {replace : true});

        },
        async register(info) {
            await useApiFetch('sanctum/csrf-cookie');

            const register = await useApiFetch('register', {
                method : 'POST',
                body : info
            })

            // await fetchUser();

            return register;
        },
        async updateProfile(profile_data, id) {
           
        
            const updateProRes = await useApiFetch(`updateProfile/${id}`, {
                method : 'POST',
                body : profile_data,
                headers : {
                    'Accept': 'application/json'
                }
            })

            return updateProRes;
        },
        async getUser(id) {
            const {data : user, error : userErr, status} = await useApiFetch(`getUser/${id}`);

            if (status.value === 'success') {
                this.userObj = user.value.user;
            }

            return user;
        },
        async updatePwd(payload, id) {
            const updatePwd = await useApiFetch(`updatePwd/${id}`, {
                method : 'PATCH',
                body : payload,
                headers : {
                    'Accept' : 'application/json'
                }
            })

            return updatePwd;
        },
        async fetchUsers(page) {
            
            const usersRes = await useApiFetch(`fetchUsers?page=${page}`, {
                
                method : 'GET',
                headers : {
                    'Accept' : 'application/json'
                }

            });

            this.userList = usersRes.data.value.users;

            return usersRes;

        },
        async getPageLink (page) {
            
            await this.fetchUsers(page);
        },
        getVisiblePages() {

            const totalPage = this.userList.last_page;
            const currentPage = this.userList.current_page;
            const visiblePage = [];

            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPage, currentPage + 2);

            if (end - start < 4) {

                if (start === 1) {
                    end = Math.min(totalPage, start + 4);
                } else if (end === totalPage) {

                    start = Math.max(1, end - 4);

                }

            }

            for(let i = start; i <= end; i++) {
                visiblePage.push(i);
            }
            return visiblePage;

        },
        async download(path) {
            const downRes = await useApiFetch(`download?file=${path}`, {
                method : 'GET',
                
            })

            if (downRes.status.value === 'success') {
                const url = window.URL.createObjectURL(new Blob([downRes.data.value]));
                const link = document.createElement('a');
                
                const partParts = path.split('/');
                const filename = partParts[partParts.length - 1];

                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
            }
        },
        async assignPrivateKey(key, userId) {
            const assignKeyRes = await useApiFetch(`assignKey/${userId}`, {
                method : 'POST',
                body : key,
                headers : {
                    'Accept' : 'application/json'
                }
            })

            return assignKeyRes;
        },
        async getKey(id) {

            const keyRes = await useApiFetch(`getKey/${id}`, {
                method : 'GET',

            });

            return keyRes;
        },
        
        async uploadKey(key, userId) {
            const uploadRes = await useApiFetch(`uploadKey/${userId}`, {
                method : 'POST',
                body : key
            })

            return uploadRes;
        },

        async toogleKeyLock(id, state) {
            const toogleLock = await useApiFetch(`changeLock/${id}`, {
                method : 'POST',
                body : state,
                headers : {
                    'Accept' : 'application/json'
                }
            })

            return toogleLock;
        },
        async fetchLogs(userId) {
            const activitiesLog = await useApiFetch(`fetchLogs/${userId}`, {
                method : 'GET',
                headers : {
                    'Accpet' : 'application/json'
                }
            });

            return activitiesLog;
        }
    },

    persist : true
})