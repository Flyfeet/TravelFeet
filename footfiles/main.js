function coming() {
    showInfo('欢迎使用“++足迹”，请阅读以下说明：'+"<br>"+'1.使用前请先前往 "https://github.com/ChengOrangeJu/WebExtensionWalle" 下载并安装浏览器钱包插件.'+"<br>"+'2.本应用主要包含旅游足迹查询、添加、生成和保存等功能，目前只加载了国内数据，团队在后期将继续充实地图数据.'+"<br>"+'3.添加足迹后请不要忘记点击保存足迹以保存数据到区块，否则将查询不到此次添加的信息.'+"<br>"+'4.如果无法显示足迹地图，可能是相关脚本被浏览器拦截，手动加载即可.');
}

function toast(msg, type) {
    toastr[type](msg);
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "500000",
        "extendedTimeOut": "500000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

function showError(msg) {
    toast(msg, 'error');
}

function showInfo(msg) {
    toast(msg, 'info');
}

function showSuccess(msg) {
    toast(msg, 'success');
}

$(document).ready(function () {
    //Show / Hide Search bar
    $('html').click(function (e) {
        $('.spin-search-box').removeClass('active open');
    });

    $('.spin-search-box').on('click', function (e) {
        e.stopPropagation();
    });

    $('.spin-search-box > a').on('click', function () {
        $(this).closest('.spin-search-box').toggleClass('active open');
        return false;
    });
});
