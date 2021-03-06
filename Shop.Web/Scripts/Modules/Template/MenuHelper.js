﻿var MenuHelper = {
    //更新菜单
    UpdateMenu: function () {
        var para = {
            Shop_MenuId: $("#Shop_MenuId").val(),
            Shop_MenuName: $("#Shop_MenuName").val(),
            Shop_MenuUrl: $("#Shop_MenuUrl").val(),
            Shop_RoleId: $("#Shop_RoleId").val(),
            Shop_ParentId: $("#Shop_ParentId").val()
        };
        $.ajax({
            type: "POST",
            url: "/template/template/UpdateMenu",
            data: { menu: JSON.stringify(para) },
            success: function (data) {
                var json = eval("(" + data + ")");
                if (json.Success) {
                    window.location.href = "/template/template/MenuManage";
                }
            }
        });
    },
    AddMenu: function () {
        var para = {
            Shop_MenuName: $("#Shop_MenuName").val(),
            Shop_MenuUrl: $("#Shop_MenuUrl").val(),
            Shop_RoleId: $("#Shop_RoleId").val(),
            Shop_ParentId: $("#Shop_ParentId").val()
        };
        $.ajax({
            type: "POST",
            url: "/template/template/AddMenu",
            data: { menu: JSON.stringify(para) },
            success: function (data) {
                var json = eval("(" + data + ")");
                if (json.Success) {
                    window.location.href = "/template/template/MenuManage";
                }
            }
        });
    },
    DeleteMenu: function(shop_menuid) {
        $.ajax({
            type: "POST",
            url: "/template/template/DeleteMenu/" + shop_menuid,
            success: function (data) {
                var json = eval("(" + data + ")");
                if (json.Success) {
                    window.location.href = "/template/template/MenuManage";
                }
            }
        });
    }
};