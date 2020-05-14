var AdMob = require('AdMob');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: '',

        AdMobManager : null,
    },

    // use this for initialization
    onLoad: function () {
        this.AdMobManager = new AdMob();
        this.AdMobManager.initAdMobInstance();
        this.label.string = "Hello World";
        
    },

    // called every frame
    update: function (dt) {

    },



    logoClicked : function(){
        AdMob.instance.Index++;
        this.label.string =AdMob.instance.Index;
        // this.AdMobManager.showInterstitial();
    },

});
