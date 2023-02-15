const updateFrequency = 2000;
const dimension = 0;
const countryColors = {
    Australia: '#00008b',
    Canada: '#f00',
    China: '#ffde00',
    Cuba: '#002a8f',
    Finland: '#003580',
    France: '#ed2939',
    Germany: '#000',
    Iceland: '#003897',
    India: '#f93',
    Japan: '#bc002d',
    'North Korea': '#024fa2',
    'South Korea': '#000',
    'New Zealand': '#00247d',
    Norway: '#ef2b2d',
    Poland: '#dc143c',
    Russia: '#d52b1e',
    Turkey: '#e30a17',
    'United Kingdom': '#00247d',
    'United States': '#b22234'
};

const flags = res0[0];
const data = res1[0];
const years = [];
for (let i = 0; i < data.length; ++i) {
    if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
        years.push(data[i][4]);
    }
}
function getFlag(countryName) {
    if (!countryName) {
        return '';
    }
    return (
        flags.find(function (item) {
            return item.name === countryName;
        }) || {}
    ).emoji;
}
let startIndex = 10;
let startYear = years[startIndex];