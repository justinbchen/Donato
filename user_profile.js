//photo
var starting_img = 'https://upload.wikimedia.org/wikipedia/en/c/c5/Bob_the_builder.jpg';
update_img(starting_img);

function update_img(image) {
    profile_pic_modal = document.getElementById("profile_pic_modal");
    profile_pic_modal.setAttribute('src', image);

    profile_pic_profile = document.getElementById("profile_pic");
    profile_pic_profile = profile_pic_profile.setAttribute('src', image);

}

document.getElementsByClassName("img_overlay")[0].addEventListener('click', () => {
    document.getElementById("upload_photo_form").classList.toggle('d-none');
});

//name
var starting_name = 'Bobby BuildMaster';
update_name(starting_name);

function update_name(name) {
    profile_name = document.getElementById("profile_name");
    profile_name.innerHTML = name;
    document.getElementById("name").setAttribute('placeholder', name);
}

//phone
var starting_phone_number = '111-222-333';
update_phone_number(starting_phone_number);

function update_phone_number(phone_number) {
    profile_phone_number = document.getElementById("profile_phone_number");
    profile_phone_number.innerHTML = phone_number;
    document.getElementById("phone").setAttribute('placeholder', phone_number);
}

//On modal close
document.getElementById("update_nn_button").addEventListener('click', () => {
    //update names and phone numbers
    let nn_form = document.getElementById("update_nn_form");
    let obj = {};
    for (let i = 0 ; i < nn_form.length ; i++) {
        let key = nn_form[i].id;
        let value = nn_form[i].value;
        obj[key] = value;
    }

    if (obj["name"] != "") {
        update_name(obj["name"]);
    }
    if (obj["phone"] != "") {
        update_phone_number(obj["phone"]);
    }

    //clear modal
    //clear first column
    document.getElementById("update_nn_form").reset();
    //clear second column
    [...document.getElementById("addresses").getElementsByTagName("li")].forEach(li => {
        let form = li.getElementsByClassName("edit_address_form")[0];
        if (!form.classList.contains("d-none")) {
            form.classList.add("d-none");
        }
        form.reset();
    })

});

//addresses
let li = document.querySelector("#addresses").getElementsByTagName("li")[0];
add_edit_functionality(li);
add_delete_functionality(li);

var starting_addresses = {
    address_field_1: "556 W 114th St",
    address_field_2: "",
    city: "New York",
    state: "NY",
    postal_code: "10027"
}

add_address(starting_addresses);

function add_address(address) {
    let ul = document.querySelector("#addresses");
    let new_elem = ul.lastElementChild.cloneNode(true);
    if (!new_elem.getElementsByClassName("edit_address_form")[0].classList.contains("d-none")) {
        new_elem.getElementsByClassName("edit_address_form")[0].classList.add("d-none");
    }
    string_format = address.address_field_1 + " " + address.address_field_2 + "<br>" + address.city + ", " + address.state + " " + address.postal_code;
    new_elem.getElementsByClassName("address_string")[0].innerHTML = string_format;
    ul.appendChild(new_elem);

    add_edit_functionality(new_elem);
    add_delete_functionality(new_elem);
    update_saved_addresses();
};

function update_saved_addresses() {
    let addresses = document.getElementsByClassName("address_string");
    let saved_addresses = document.getElementById("saved_addresses");
    saved_addresses.innerHTML = "";
    for (let i = 0; i < addresses.length; i++) {
        let node = document.createElement("li");    
        let tmp = JSON.parse(JSON.stringify(addresses[i].innerHTML));;
        tmp = tmp.replace("<br>","");
        node.innerHTML = "• " + tmp;
        saved_addresses.appendChild(node);
    }
}

//add functionality
document.querySelector("#add_new_address_button").addEventListener('click', () => {
    document.getElementById("add_new_address_form").classList.toggle("d-none");
});

document.getElementById("add_new_address_save_button").addEventListener('click', () => {
    form = document.getElementById("add_new_address_form");
    let obj = {};
    for (let i = 0; i < form.length; i++) {
        let key = form[i].id;
        let value = form[i].value;
        obj[key] = value;
    }

    if (obj["address_field_1"] == "") {
        alert('please enter address field 1');
        return;
    }
    else if (obj["city"] == "") {
        alert('please enter city');
        return;
    }
    else if (obj["state"] == "") {
        alert('please enter state');
        return;
    }
    else if (obj["postal_code"] == "") {
        alert('please enter postal code');
        return;
    }
    add_address(obj);

    //clear form
    form.reset();
    form.classList.add("d-none");
});

//edit functionality
function add_edit_functionality(li) {
    edit_button_interactivity(li);
    edit_submit_button_interactivity(li);
}

function edit_button_interactivity(li) {
    let edit_button = li.getElementsByClassName("edit")[0];
    edit_button.addEventListener('click', () => {
        li.getElementsByClassName("edit_address_form")[0].classList.toggle('d-none');
    });
}

function edit_submit_button_interactivity(li) {
    let form = li.getElementsByClassName("edit_address_form")[0]
    let edit_submit_button = form.getElementsByClassName("edit_address_form_button")[0];
    edit_submit_button.addEventListener('click', () => {
        //add new address
        let obj = {};
        for (let i = 0; i < form.length; i++) {
            let key = form[i].id;
            let value = form[i].value;
            obj[key] = value;
        }
        if (obj["address_field_1"] == "") {
            alert('please enter address field 1');
            return;
        }
        else if (obj["city"] == "") {
            alert('please enter city');
            return;
        }
        else if (obj["state"] == "") {
            alert('please enter state');
            return;
        }
        else if (obj["postal_code"] == "") {
            alert('please enter postal code');
            return;
        }
        let string_val = li.getElementsByClassName("address_string")[0];
        string_val.innerHTML = `${obj["address_field_1"]} ${obj["address_field_2"]} <br>
        ${obj["city"]}, ${obj["state"]} ${obj["postal_code"]}`;

        update_saved_addresses();
    });
}

//delete functionality
function add_delete_functionality(li) {
    let delete_button = li.getElementsByClassName("delete")[0];
    delete_button.addEventListener('click', () => {
        number_addresses = document.getElementById("addresses").getElementsByTagName("li").length;
        if (number_addresses == 1) {
            alert('cannot have zero addresses');
            return;
        }

        li.remove();
        update_saved_addresses();
    });
}

// Donation History
$("#donation-table tbody tr").click(function () {
    var str = "Donation on " + $(this).children("td").eq(0).html() + " to " + $(this).children("td").eq(1).html();
    $("#donation-detail-title").html(str);
    $("#donation-table tbody tr").removeClass("active");
    $(this).addClass("active");
    $("#table-details tbody tr").removeClass("active");
    $("#table-details tbody tr").eq(0).addClass("active");
    var index = $(this).index();
    if (index == 0) {
        $("#table-details tbody tr").eq(0).children("td").eq(1).html("1");
        $("#table-details tbody tr").eq(1).children("td").eq(1).html("2");
        var str ="1 book in the Dune series by Frank Herbert:";
        $(".description-content").children(".line-common").eq(0).html(str);
        var str1="";
        for(i=0;i<1;i++){
            str1+='<div>Dune' + ' ' + (i+1) + '</div>'
        }
        console.log(str1)
        $(".description-content").children(".line-common").eq(1).html(str1);
        // var html1 = '<div class="line-common">1 novels in the Dune series by Frank Herbert:</div><div class="line-common">Dune</div>'
        // $(".description-content").html(html1);
    } else if (index == 1) {
        $("#table-details tbody tr").eq(0).children("td").eq(1).html("2");
        $("#table-details tbody tr").eq(1).children("td").eq(1).html("4");
        var str ="2 books in the Dune series by Frank Herbert:";
        $(".description-content").children(".line-common").eq(0).html(str);
        var str1="";
        for(i=0;i<2;i++){
            str1+='<div>Dune' + ' ' (i+1) + '</div>'
        }
        $(".description-content").children(".line-common").eq(1).html(str1);
        // var html1 = '<div class="line-common">2 novels in the Dune series by Frank Herbert:</div><div class="line-common">Dune</div><div class="line-common">Dune Messiah</div>'
        // $(".description-content").html(html1);

    } else if (index == 2) {
        $("#table-details tbody tr").eq(0).children("td").eq(1).html("3");
        $("#table-details tbody tr").eq(1).children("td").eq(1).html("6");
        // var html1 = '<div class="line-common">3 novels in the Dune series by Frank Herbert:</div><div class="line-common">Dune</div><div class="line-common">Dune Messiah</div><div class="line-common">Children of Dune</div>'
        // $(".description-content").html(html1);
        var str ="3 books in the Dune series by Frank Herbert:";
        $(".description-content").children(".line-common").eq(0).html(str);
        var str1="";
        for(i=0;i<3;i++){
            str1+='<div>Dune' + ' '+ (i+1) + '</div>'
        }
        $(".description-content").children(".line-common").eq(1).html(str1);

    } else if (index == 3) {
        $("#table-details tbody tr").eq(0).children("td").eq(1).html("4");
        $("#table-details tbody tr").eq(1).children("td").eq(1).html("8");
        // var html1 = '<div class="line-common">4 novels in the Dune series by Frank Herbert:</div><div class="line-common">Dune</div><div class="line-common">Dune Messiah</div><div class="line-common">Children of Dune</div><div class="line-common">Children of Dune1</div>'
        // $(".description-content").html(html1);
        var str ="4 books in the Dune series by Frank Herbert:";
        $(".description-content").children(".line-common").eq(0).html(str);
        var str1="";
        for(i=0;i<4;i++){
            str1+='<div>Dune' + ' ' + (i+1) + '</div>'
        }
        $(".description-content").children(".line-common").eq(1).html(str1);
    }
})
$("#table-details tbody tr").click(function () {
    var index = $(this).index();
    $("#table-details tbody tr").removeClass("active");
    $(this).addClass("active");
    if (index == 0) {
        console.log($(this).children("td").eq(1).html())
        var str = $(this).children("td").eq(1).html() + " books in the Dune series by Frank Herbert:";
        $(".description-content").children(".line-common").eq(0).html(str);
        var str1="";
        for(i=0;i<$(this).children("td").eq(1).html();i++){
            str1+='<div>Dune' + ' ' + (i+1) + '</div>'
        }
        $(".description-content").children(".line-common").eq(1).html(str1);
    } else if (index == 1) {
        console.log($(this).children("td").eq(1).html())
        var str = $(this).children("td").eq(1).html() + " desks in the Ikea Voxnan series:";
        $(".description-content").children(".line-common").eq(0).html(str);
        var str1="";
        for(i=0;i<$(this).children("td").eq(1).html();i++){
            str1+='<div>Desk' + ' ' + (i+1) + '</div>'
        }
        $(".description-content").children(".line-common").eq(1).html(str1);

    }

})
