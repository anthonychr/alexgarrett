var app = (function() {
    return {
        lol: function() {
            var targets = document.querySelectorAll('strong');
            for(target in targets) {
                targets[target].innerText = 'lol';
            }
        }
    };
}());