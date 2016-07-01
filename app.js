var forum = function () {
    var profileIntegrator = function (identifier) {
        return identifier;
    };

    function setProfileIntegrator(callback) {
        profileIntegrator = callback;
    }
    
    function getExpressRouter(){
        
    }
    
    return {
        setProfileIntegrator: setProfileIntegrator,
        getExpressRouter: getExpressRouter;
    }
}();

module.exports = forum;