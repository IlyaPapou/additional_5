module.exports = function check(str, bracketsConfig) {
    // your solution
    let opened = [];
    let closed = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        let patternO = new RegExp('\\' + bracketsConfig[i][0], 'g');
        opened += str.match(patternO);
        let patternC = new RegExp('\\' + bracketsConfig[i][1], 'g');
        closed += str.match(patternC);
    }
    
    return opened.length === closed.length
};
