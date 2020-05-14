cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        this.initShare();
    },

    start () {

    },

    initShare : function(){
        if(cc.sys.isMobile && (typeof(sdkbox) != 'undefined'))
            sdkbox.PluginShare.init();
    },

    nativeShare : function(){

        if(cc.sys.isMobile && (typeof(sdkbox) != 'undefined')){
            var shareInfo = {};
            shareInfo.text = "#sdkbox(www.sdkbox.com) - the cure for sdk fatigue ";
            shareInfo.title = "sdkbox";
            //shareInfo.image = "path/to/image"
            shareInfo.link = "http://www.sdkbox.com";
            sdkbox.PluginShare.nativeShare(shareInfo);
        }
    },

    // update (dt) {},
});
