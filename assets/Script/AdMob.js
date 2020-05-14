var AdMob = cc.Class({
    extends: cc.Component,

    properties: {
        Index: 0,
    },

    onLoad: function () {
        //Add this line to onLoad
        this.admobInit();
        
    },

    start () {
        this.test();
    },

    test: function(){
        if(cc.sys.isMobile && (typeof(sdkbox) != 'undefined'))
            cc.director.getScheduler().schedule(function(){this.startAd()},this,300,false);
    },

    startAd : function(){
        console.log("startAd");
        this.hideAds();

        if(this.Index == 0){
            this.showInterstitial();
        }
        else if(this.Index == 1){
            this.showBanner();
        }
        else if(this.Index == 2){
            this.showRewarded();
        }
        else if(this.Index == 3){
            this.showTopBanner();
        }
        else if(this.Index == 4){
            this.showNextLevel();
        }
            

        this.Index++;

        if(this.Index == 5)
            this.Index = 0;
    },

    statics: {
        instance: null
    },

    /**
     * Create game global instance.
     */
    initAdMobInstance: function () {
        AdMob.instance = this;
    },

    admobInit: function() {
        if(cc.sys.isMobile && (typeof(sdkbox) != 'undefined')) {
            var self = this
            sdkbox.PluginAdMob.setListener({
                adViewDidReceiveAd: function(name) {
                    self.showInfo('adViewDidReceiveAd name=' + name);
                },
                adViewDidFailToReceiveAdWithError: function(name, msg) {
                    self.showInfo('adViewDidFailToReceiveAdWithError name=' + name + ' msg=' + msg);
                },
                adViewWillPresentScreen: function(name) {
                    self.showInfo('adViewWillPresentScreen name=' + name);
                },
                adViewDidDismissScreen: function(name) {
                    self.showInfo('adViewDidDismissScreen name=' + name);
                },
                adViewWillDismissScreen: function(name) {
                    self.showInfo('adViewWillDismissScreen=' + name);
                },
                adViewWillLeaveApplication: function(name) {
                    self.showInfo('adViewWillLeaveApplication=' + name);
                }
            });
            sdkbox.PluginAdMob.init();
        }
    },

    hideAds : function(){
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.hide('gameover');
            sdkbox.PluginAdMob.hide('home');
            sdkbox.PluginAdMob.hide('rewarded');
            sdkbox.PluginAdMob.hide('top_banner');
            sdkbox.PluginAdMob.hide('next_level');
        } 
    },

    cacheInterstitial: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.cache('gameover');
        }
    },

    showInterstitial: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.show('gameover');
        }
    },

    cacheBanner: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.cache('home');
        }
    },

    showBanner: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.show('home');
        }
    },

    cacheRewarded: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.cache('rewarded');
        }
    },

    showRewarded: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.show('rewarded');
        }
    },

    cacheTobBanner: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.cache('top_banner');
        }
    },

    showTopBanner: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.show('top_banner');
        }
    },

    cacheNextLevel: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.cache('next_level');
        }
    },

    showNextLevel: function() {
        if(cc.sys.isMobile) {
            sdkbox.PluginAdMob.show('next_level');
        }
    },


});
