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

document.getElementById('addresses').addEventListener('change', () => {
    if (document.getElementById('addresses').value == 'new-address') {
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


$(".common-line").click(function () {
    var index = $(this).index();
    $("#four-left .common-line").removeClass("active");
    $(this).addClass("active");
    $("#four-left .left-icon").removeClass("active-icon").addClass("common-icon");
    $(this).children(".left-icon").removeClass("common-icon").addClass("active-icon");
    $("#four-right .detail-card").removeClass("card-display");
    $("#four-right .detail-card").eq(index).addClass("card-display");

})
