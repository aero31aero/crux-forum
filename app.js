var forum = function () {
    var profileIntegrator = function (identifier) {
        return identifier;
    };

    function setProfileIntegrator(callback) {
        profileIntegrator = callback;
    }
    
    function getExpressRouter(){
        console.log("Hello World");
    }
    
    return {
        setProfileIntegrator: setProfileIntegrator,
        getExpressRouter: getExpressRouter,
    }
}();

module.exports = forum;