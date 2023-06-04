module.exports = {
  content: ["./src/**/*.{jsx, js, ts, tsx, scss}"],
  theme: {
    extend: {
      colors: {
        colorBg: '#040c18',
        colorFooter: '#031b31',
        colorBlog: '#042c54',
        colorText: '#81AFDD',
        colorSubtext: '#ff8A71'
      },
      fontSize: {
        px18: '18px'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1280px'
      }
    },
  },
  plugins: [],
}