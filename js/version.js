let vm = (version) => {
    const v = version && version.length ? version.split('.') : '0.0.1'.split('.');
    return {
        release: function() {
            return v.join('.');
        },
        major: function() {
            v[0]++;
            return v.join('.');
        },
        minor: function() {
            v[1]++;
            return v.join('.');
        },
        patch: function() {
            v[2]++;
            return v.join('.');
        }
    }
}
// vm();
console.log(vm().release().major().minor().major().patch());
console.log(vm('').release());
// vm('0.2.3');