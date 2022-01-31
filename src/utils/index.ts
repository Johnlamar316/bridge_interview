export const formatNumber = (num: number | string) => {
    const splitDecimal = num.toString().split('.');
    const hasDot = num.toString().includes('.');
    return splitDecimal[0]
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        .concat(hasDot ? `.${splitDecimal[1] ?? ''}` : '');
};
