var getStyles = function (styles, element, step, index) {
    var getElementStyle = styles[element];
    if (getElementStyle) {
        return getElementStyle(step, index);
    }
    return {};
};
export default getStyles;
//# sourceMappingURL=getStyles.js.map