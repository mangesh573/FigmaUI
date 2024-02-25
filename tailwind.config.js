/** @type {import('tailwindcss').Config} */
module.exports = {
 
    content: [
      './public/*.html',
    ],
  
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1rem',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1400px',
        },
      },
        colors: {
         headercolor:'#F8F9FA',
         buttonBgColor:'#6246EA',
         buttonBgHoverColor:'#35174D',
         textblack:'#2B2C34',
         textgray:'#9A9494',
         bg_color:'#EFF0F4',
         warmGray:'#FFFFFE',
         offtextcolor:'#C0C0C0',
        },
        fontFamily: {
          Jakarta:["Plus Jakarta Sans","sans-serif"]
         },
         content: {
          'link': 'url("../images/")',
        },
        
    },
    screens: {
      xs:'544px',
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1400px',
    },
  },
  plugins: [],
}

