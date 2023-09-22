import { defineStore } from "pinia";
import { useApiFetch } from "#imports";
import { useFetchUser } from "#imports";

export const useNotiStore = defineStore('NotiStore', {
    state : () => ({
        message : '',
        type : ''
    }),
    actions : {
        showNoti (msg, type) {

            this.message = msg;
            this.type = type;

            setTimeout(() => {
                this.message = '';
                this.type = '';
            }, 2000);
        }
    }
})