$(function () {
  $("#accordion")
    .accordion({
      header: "> div > h3",
      icons: {
        "header": "ui-icon-plus",
        "activeHeader": "ui-icon-minus"
      },
      collapsible: true,
      heightStyle: "fill"
    })
    .sortable({
      axis: "y",
      handle: "h3",
      stop: function (event, ui) {
        ui.item.children("h3").triggerHandler("focusout");
        $(this).accordion("refresh");
      }
    });
  $("#menu").menu();
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  $("#opener").on("click", function () {
    $("#dialog").dialog("open");
  });
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    showAnim: "slide"
  });
  $(document).tooltip({
    track: true
  });
  $( "#tabs" ).tabs();
});