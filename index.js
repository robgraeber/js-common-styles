var styles = {
    bold: {
        fontWeight: 700
    },
    medium: {
        fontWeight: 500
    },
    light: {
        fontWeight: 300
    },
    center: {
        textAlign: 'center'
    },
    top: {
        verticalAlign: 'top'
    },
    middle: {
        verticalAlign: 'middle'
    },
    bottom: {
        verticalAlign: 'bottom'
    }
};

for (var i = 1; i <= 72; i++) {
    styles['p' + i] = {
        fontSize: i + 'px',
        lineHeight: '1.3em'
    };
}

module.exports = styles;
