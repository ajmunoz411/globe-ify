const countries = [
  { name: 'Australia', code: 'au', pos: [-26, 134] },
  { name: 'Argentina', code: 'ar', pos: [-34, -65] },
  { name: 'Austria', code: 'at', pos: [47, 14] },
  { name: 'Belgium', code: 'be', pos: [50, 5] },
  { name: 'Bolivia', code: 'bo', pos: [-16, -64] },
  { name: 'Brazil', code: 'br', pos: [-9, -57] },
  { name: 'Bulgaria', code: 'bg', pos: [43, 25] },
  { name: 'Canada', code: 'ca', pos: [59, -112] },
  { name: 'Chile', code: 'cl', pos: [-26, -70] },
  { name: 'Colombia', code: 'co', pos: [3, -73] },
  { name: 'Costa Rica', code: 'cr', pos: [10, -84] },
  { name: 'Czech Republic', code: 'cz', pos: [50, 15] },
  { name: 'Denmark', code: 'dk', pos: [56, 9] },
  { name: 'Dominican Republic', code: 'do', pos: [19, -70] },
  { name: 'Ecuador', code: 'ec', pos: [-1, -78] },
  { name: 'Egypt', code: 'eg', pos: [26, 30] },
  { name: 'El Salvador', code: 'sv', pos: [14, -89] },
  { name: 'Estonia', code: 'ee', pos: [59, 26] },
  { name: 'Finland', code: 'fi', pos: [64, 27] },
  { name: 'France', code: 'fr', pos: [47, 3] },
  { name: 'Germany', code: 'de', pos: [51, 10] },
  { name: 'Global', code: 'global', pos: [0, 0] },
  { name: 'Greece', code: 'gr', pos: [39, 22] },
  { name: 'Guatemala', code: 'gt', pos: [15.5, -90] },
  { name: 'Honduras', code: 'hn', pos: [14.7, 87] },
  { name: 'Hong Kong', code: 'hk', pos: [22.5, 114.1] },
  { name: 'Hungary', code: 'hu', pos: [47, 20] },
  { name: 'Iceland', code: 'is', pos: [65, -18] },
  { name: 'India', code: 'in', pos: [21, 79] },
  { name: 'Indonesia', code: 'id', pos: [-3.5, 122] },
  { name: 'Ireland', code: 'ie', pos: [53, -7.5] },
  { name: 'Israel', code: 'il', pos: [31, 35] },
  { name: 'Italy', code: 'it', pos: [43, 12] },
  { name: 'Japan', code: 'jp', pos: [36, 138.5] },
  { name: 'Korea', code: 'kr', pos: [34, 128] },
  { name: 'Latvia', code: 'lv', pos: [57, 26] },
  { name: 'Lithuania', code: 'lt', pos: [55.5, 24] },
  { name: 'Luxembourg', code: 'lu', pos: [49.6, 6.1] },
  { name: 'Malaysia', code: 'my', pos: [4, 102] },
  { name: 'Mexico', code: 'mx', pos: [22.7, -102] },
  { name: 'Morocco', code: 'ma', pos: [32, -5.5] },
  { name: 'Netherlands', code: 'nl', pos: [52, 5.7] },
  { name: 'New Zealand', code: 'nz', pos: [-42, 173] },
  { name: 'Nicaragua', code: 'ni', pos: [12.8, -85] },
  { name: 'Norway', code: 'no', pos: [61, 9] },
  { name: 'Panama', code: 'pa', pos: [8.5, -80.5] },
  { name: 'Paraguay', code: 'py', pos: [-23.5, -58] },
  { name: 'Peru', code: 'pe', pos: [-11, -75] },
  { name: 'Philippines', code: 'ph', pos: [11.4, 123] },
  { name: 'Poland', code: 'pl', pos: [52, 19] },
  { name: 'Portugal', code: 'pt', pos: [39.5, -8.5] },
  { name: 'Romania', code: 'ro', pos: [46, 25] },
  { name: 'Russia', code: 'ru', pos: [61, 94] },
  { name: 'Saudi Arabia', code: 'sa', pos: [25, 45] },
  { name: 'Singapore', code: 'sg', pos: [1.37, 103.8] },
  { name: 'Slovakia', code: 'sk', pos: [48.5, 19] },
  { name: 'South Africa', code: 'za', pos: [-31.4, 24] },
  { name: 'Spain', code: 'es', pos: [40, -4] },
  { name: 'Sweden', code: 'se', pos: [64, 18] },
  { name: 'Switzerland', code: 'ch', pos: [47, 7.9] },
  { name: 'Taiwan', code: 'tw', pos: [24, 121] },
  { name: 'Thailand', code: 'th', pos: [16, 101] },
  { name: 'Turkey', code: 'tr', pos: [38, 36] },
  { name: 'Ukraine', code: 'ua', pos: [49, 31] },
  { name: 'United Arab Emirates', code: 'ae', pos: [23.5, 54] },
  { name: 'United Kingdom', code: 'gb', pos: [54, -2] },
  { name: 'United States', code: 'us', pos: [39, -104] },
  { name: 'Uruguay', code: 'uy', pos: [-33, 56] },
  { name: 'Vietnam', code: 'vn', pos: [13.6, 108.7] },
];

const codes = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cz', 'de', 'dk', 'do', 'ec', 'ee', 'eg', 'es', 'fi', 'fr', 'gb', 'global', 'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'in', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'ma', 'mx', 'my', 'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 'py', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'ua', 'us', 'uy', 'vn', 'za'];

module.exports = {
  countries,
  codes,
};
