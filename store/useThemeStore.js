import { defineStore } from 'pinia'

export const useThemeStore = defineStore('Theme', {
  state: () => {
    return {
        mode : '',
        isgrad : false,
    }
  }, 
  getters : {
    getTheme : (state) => {

      let temp = useColorMode().preference === 'dark' ? 'var(--secondary-dark)' : 'var(--theme-color)' ;

      return temp;

    },
    getSed02 : (state) => {
      let temp = useColorMode().preference === 'dark' ? 'var(--teriary-dark)' : 'var(--theme-sed-02)';

      return temp;
    },
    getPrimary : (state) => {
      let temp = state.mode === 'light' ? {'background' : 'var(--theme-primary-color)'} : {};

      return temp;
    }
  },
  actions : {
    computeSed02 (themeColor, from, to) {
      let temp;
      let fromHex;
      let toHex;


      if (!from.light) {

        if (themeColor.light > 70) {
           temp = this.HSLToHex(themeColor.hus, themeColor.sat - 12, themeColor.light + 7 >= 85 ? themeColor.light - 17: themeColor.light + 7);
        } else {
           temp = this.HSLToHex(themeColor.hus, themeColor.sat - 12, themeColor.light + 7);
        }

      } else {

        from.hus = Number(from.hus);
        from.light = Number(from.light);
        from.sat = Number(from.sat);

        to.hus = Number(to.hus);
        to.light = Number(to.light);
        to.sat = Number(to.sat);

        // console.log('input', themeColor);

        if (from.light > 70) {
          fromHex = this.HSLToHex(from.hus, from.sat - 12, from.light + 7 >= 85 ? from.light - 17: from.light + 7);
        } else {
          fromHex = this.HSLToHex(from.hus, from.sat - 12, from.light + 7);
        }


        if (to.light > 70) {
          toHex = this.HSLToHex(to.hus, to.sat - 12, to.light + 7 >= 85 ? to.light - 17: to.light + 7);
        } else {
          toHex = this.HSLToHex(to.hus, to.sat - 12, to.light + 7);
        }

        temp = `linear-gradient(to right, ${fromHex}, ${toHex})`;

        console.log('gradient: ', temp);
      }

      return temp;
    },
    
    HSLToHex(h, s, l) {
      console.log(h, s, l);
      s /= 100;
      l /= 100;
    
      let c = (1 - Math.abs(2 * l - 1)) * s,
          x = c * (1 - Math.abs((h / 60) % 2 - 1)),
          m = l - c / 2,
          r = 0,
          g = 0,
          b = 0;
    
      if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
      }
    
      // Having obtained RGB, convert channels to hex
      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);
    
      // Prepend 0s, if necessary
      if (r.length == 1) r = "0" + r;
      if (g.length == 1) g = "0" + g;
      if (b.length == 1) b = "0" + b;
    
      return "#" + r + g + b;
    }
  },
  persist: true,
})