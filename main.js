[...document.getElementsByClassName('btn-next')].forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementsByClassName('nav-link active')[0].nextElementSibling.click();
    });
});

document.getElementById('btn-pickup').addEventListener('click', () => {
    document.getElementById('pickup').classList.remove('d-none');
    document.getElementById('dropoff').classList.add('d-none');

    document.getElementById('btn-pickup').classList.add('active');
    document.getElementById('btn-dropoff').classList.remove('active');
});

document.getElementById('btn-dropoff').addEventListener('click', () => {
    document.getElementById('dropoff').classList.remove('d-none');
    document.getElementById('pickup').classList.add('d-none');

    document.getElementById('btn-dropoff').classList.add('active');
    document.getElementById('btn-pickup').classList.remove('active');
});

document.getElementById('select-address').addEventListener('change', () => {
    if (document.getElementById('select-address').value == 'new-address') {
        document.getElementById('enter-address').classList.remove('d-none');
    } else {
        document.getElementById('enter-address').classList.add('d-none');
    }
});


// datepicker logic adapted from https://stackoverflow.com/questions/56188595/enable-specific-dates-in-bootstrap-datepicker
const disableDays = ['12/21/21', '12/16/21', '12/18/21', '12/23/21', '12/25/21', '12/31/21', '01/01/22', '01/02/22', '01/04/22'].map(Date.parse);

$("#choose-date").datepicker({ 
    maxViewMode: 2,
    startDate: '+1d',
    beforeShowDay: (date) => {
        if (disableDays.includes(Date.parse(date))) {
            return { enabled: false };
        }
        else {
            return { enabled: true };
        }
    },
    todayHighlight: true,
    format: "mm/dd/yy",
    autoclose: true
}).on('changeDate', () => {
    document.getElementById('choose-time').classList.remove('d-none');

    document.getElementById('date-wrapper').classList.remove('col-sm-5', 'col-lg-4');
    document.getElementById('date-wrapper').classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});

$("#choose-date-2").datepicker({ 
    maxViewMode: 2,
    startDate: '+1d',
    beforeShowDay: (date) => {
        if (disableDays.includes(Date.parse(date))) {
            return { enabled: false };
        }
        else {
            return { enabled: true };
        }
    },
    todayHighlight: true,
    format: "mm/dd/yy",
    autoclose: true
}).on('changeDate', () => {
    document.getElementById('choose-time-2').classList.remove('d-none');

    document.getElementById('date-wrapper-2').classList.remove('col-sm-5', 'col-lg-4');
    document.getElementById('date-wrapper-2').classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});

[...document.getElementsByClassName('times-1')].forEach((button) => {
    button.addEventListener('click', () => {
        [...document.getElementsByClassName('times-1')].forEach((button) => {
            button.classList.remove('btn-primary');
            button.classList.add('btn-light');
        });
        button.classList.remove('btn-light');
        button.classList.add('btn-primary');
    });
});

[...document.getElementsByClassName('times-2')].forEach((button) => {
    button.addEventListener('click', () => {
        [...document.getElementsByClassName('times-2')].forEach((button) => {
            button.classList.remove('btn-primary');
            button.classList.add('btn-light');
        });
        button.classList.remove('btn-light');
        button.classList.add('btn-primary');
    });
});


$(".common-line").click(function () {
    var index = $(this).index();
    $("#four-left .common-line").removeClass("active");
    $(this).addClass("active");
    $("#four-left .left-icon").removeClass("active-icon").addClass("common-icon");
    $(this).children(".left-icon").removeClass("common-icon").addClass("active-icon");
    $("#four-right .detail-card").removeClass("card-display");
    $("#four-right .detail-card").eq(index).addClass("card-display");

});

$(".common-line-2").click(function () {
    var index = $(this).index();
    $("#four-left-2 .common-line-2").removeClass("active");
    $(this).addClass("active");
    $("#four-left-2 .left-icon").removeClass("active-icon").addClass("common-icon");
    $(this).children(".left-icon").removeClass("common-icon").addClass("active-icon");
    $("#four-right-2 .detail-card").removeClass("card-display");
    $("#four-right-2 .detail-card").eq(index).addClass("card-display");

});

// adds item card
$("#add-item-btn").click(function() {
    //var index = document.getElementsByClassName("item-card").length + 1;
    var newel = $('.item-card:last').clone(true);
    
    // Selecting last id 
    var card_id = $(newel).attr("id");
    var split_id = card_id.split('-');
    // New index
    var index = Number(split_id[1]) + 1;
   
    // Set id of new element
    $(newel).attr("id", "item-" + index);
    $(newel).find("h2").html("Item " + index);

    // type
    $(newel).find("label:eq(0)").attr("for", "type-" + index);
    $(newel).find(".form-select").attr("id", "type-" + index)

    // quantity
    $(newel).find("label:eq(1)").attr("for", "quant-" + index);
    $(newel).find("input[type=number]").attr("id", "quant-" + index);
    $(newel).find("input[type=number]").val("1");
    /* 
    $(newel).find("form-control:eq(0)")
    $(newel).find("form-control:eq(0)").attr("value", "1"); */

    // file
    $(newel).find("input[type=file]").attr("id", "file-" + index);
    $(newel).find("input[type=file]").val("");

    // description
    $(newel).find("label:eq(2)").attr("for", "desc-" + index);
    $(newel).find("textarea").attr("id", "desc-" + index);
    $(newel).find("textarea").val("");

    // Insert element
    $(newel).insertAfter(".item-card:last");
});

$(".item-card").on("click", ".btn-danger", function(e) {
    var n_cards = document.getElementsByClassName("item-card").length;

    if (n_cards < 2) {
        alert("You can't remove more cards!");
    } else {
        var card_id = $(this).parent().parent().parent().parent().attr("id");
        var split_id = card_id.split('-');
        var index = Number(split_id[1]);

        $(this).parent().parent().parent().parent().remove();
        for(let i = index + 1; i <= n_cards; i++) {
            var j = i - 1;
            // Set id of element
            $("#item-" + i).find("h2").html("Item " + j);
            $("#item-" + i).attr("id", "item-" + j);
            $("label[for='type-" + i + "']").attr("for", "type-" + j);
            $("#type-" + i).attr("id", "type-" + j);
            $("label[for='quant-" + i + "']").attr("for", "quant-" + j);
            $("#quant-" + i).attr("id", "quant-" + j);
            $("#file-" + i).attr("id", "file-" + j);
            $("label[for='desc-" + i + "']").attr("for", "desc-" + j);
            $("#desc-" + i).attr("id", "desc-" + j);
            
            

            // set carousel elements
            $("#carousel_" + i).attr("id", "#carousel_" + j);
            $("#carousel_" + j).find(".carousel-control-prev").attr("data-bs-target", "#carousel_" + j);
            $("#carousel_" + j).find(".carousel-control-next").attr("data-bs-target", "#carousel_" + j);

        }
    }
});