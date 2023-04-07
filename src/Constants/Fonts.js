/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check. ../root.js
 */
const customFonts = {
    'avenir-next-regular': require('../../assets/fonts/avenir-next-regular.ttf'),
    'avenir-next-medium': require('../../assets/fonts/avenir-next-medium.ttf'),
    'avenir-next-demi': require('../../assets/fonts/avenir-next-demi.ttf'),
    'avenir-next-bold': require('../../assets/fonts/avenir-next-bold.ttf'),
    'Ubuntu-Medium': require('../../assets/fonts/Ubuntu-Medium.ttf'),
    'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic.ttf'),
    'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'),
};
const type = {
    primary: 'avenir-next-regular',
    secondary: 'Ubuntu-Medium',
    medium: 'avenir-next-medium',
    bold: 'avenir-next-bold',
    semi: 'avenir-next-demi',
    stylish: 'GreatVibes-Regular',
    italic: 'Montserrat-Italic',
};

const Fonts = { customFonts, type };

export default Fonts;
