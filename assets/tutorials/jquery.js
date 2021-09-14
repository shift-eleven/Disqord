$("#tutorial-tree").find(".list-group").addClass("collapse-group");

$("#tutorial-tree").find(".list-group-item").addClass("collapse-item").not(":has(a[role=button])").css("border", "none").css("margin-left", "20px");

$("#tutorial-tree").find("a").addClass("collapse-link");

$("#tutorial-tree").find(".collapse")
    .on("show.bs.collapse", e => {
        e.stopPropagation();
        $(e.target).parent().find(`a[href$=${e.target.id}]`).children("i").removeClass("bi-arrow-right").addClass("bi-arrow-down");
    })
    .on("hide.bs.collapse", e => {
        e.stopPropagation();
        $(e.target).parent().find(`a[href$=${e.target.id}]`).children("i").removeClass("bi-arrow-down").addClass("bi-arrow-right");
    });
