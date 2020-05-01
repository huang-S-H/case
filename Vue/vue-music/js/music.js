let app = new Vue({
    el: "#app",
    data: {
        // 提示
        musicTitle: "右边框框搜索一下",
        // 搜索框
        search: "",
        // 搜索后的歌曲列表
        musicList: [],
        // 播放用的歌曲链接
        musicUrl: "",
        // 评论列表
        comments: [],
        // 将提示改成歌名
        musicName: [],
        // 中间的圆圈转动效果
        whir: false,
        // 歌曲封面链接
        imgUrl: "./img/777.jpg",
        // MV链接
        MVUrl: "",
        // 显示隐藏mask
        mask: false
    },
    methods: {
        /**
         * 搜索歌曲 https://autumnfish.cn/search?keywords=
         *    歌曲链接 https://autumnfish.cn//song/url?id=
         *  歌曲评论https://autumnfish.cn//comment/music?limit=1&id=
         *  歌词 https://autumnfish.cn/lyric?id=
         * MV地址https://autumnfish.cn/mv/url?id=
         * get方法
         **/

        // 搜索歌曲方法
        searchMusic: function() {
            let that = this;
            axios.get("https://autumnfish.cn/search?keywords=" +
                this.search).then(function(response) {
                that.musicList = response.data.result.songs;
                // 将所有歌名保存起来
                for (let i = 0; i < that.musicList.length; i++) {
                    that.musicName.push(response.data.result.songs[i].name + '-' + response.data.result.songs[i].artists[0].name);
                }
            }, function(err) {})
        },
        // 点击播放
        addSong: function(id, index) {
            let that = this;
            // 点击播放后由形参接收的实参歌曲id找到歌曲链接
            axios.get("https://autumnfish.cn//song/url?id=" + id).then(function(response) {
                that.musicUrl = response.data.data[0].url;
                if (that.musicUrl == null) {
                    that.forbid = !that.forbid
                }
                // 将提示变成歌名
                that.musicTitle = that.musicName[index];
            }, function(err) {})

            // 点击播放后由形参接收的实参歌曲id找到歌曲评论
            axios.get("https://autumnfish.cn//comment/music?limit=1&id=" + id).then(function(response) {
                that.comments = response.data.hotComments;
            }, function(err) {})

            // 找歌曲封面
            axios.get("https://autumnfish.cn//song/detail?ids=" + id).then(function(response) {
                that.imgUrl = response.data.songs[0].al.picUrl
            }, function(err) {})
        },
        // 圆圈转不转
        plays: function() {
            this.whir = !this.whir;
        },
        pauses: function() {
            this.whir = !this.whir;
        },
        // 播放MV
        playMV: function(MVId) {
            let that = this
            axios.get("https://autumnfish.cn/mv/url?id=" + MVId).then(function(response) {
                that.mask = !that.mask;
                that.MVUrl = response.data.data.url;
            }, function(err) {})
        },
        // 关闭MV界面 清除mv链接
        off: function() {
            this.mask = !this.mask;
            this.MVUrl = "";
        }
    }
})