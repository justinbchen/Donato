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
}

//phone
var starting_phone_number = '111-222-333';
update_phone_number(starting_phone_number);

function update_phone_number(phone_number) {
    profile_phone_number = document.getElementById("profile_phone_number");
    profile_phone_number.innerHTML = phone_number;
}

//left column modal
document.getElementById("update_nn_button").addEventListener('click', () => {
    let form = document.getElementById("update_nn_form");
    let obj = {};
    for (let i = 0; i < form.length; i++) {
        let key = form[i].id;
        let value = form[i].value;
        obj[key] = value;
    }

    if (obj["name"] != "") {
        update_name(obj["name"]);
        document.getElementById("name").setAttribute('placeholder', obj["name"]);
    }
    if (obj["phone"] != "") {
        update_phone_number(obj["phone"]);
        document.getElementById("phone").setAttribute('placeholder', obj["phone"]);
    }
});


//addresses
var starting_addresses = [{
        address_field_1: "70 Morningside Drive",
        address_field_2: "",
        city: "New York",
        state: "NY",
        postal_code: "10027"
    },
    {
        address_field_1: "556 W 114th St",
        address_field_2: "",
        city: "New York",
        state: "NY",
        postal_code: "10027"
    }
]
starting_addresses.forEach(address => {
    add_address(address);
});

function add_address(address) {
    const html_addresses_ul = document.querySelector('#addresses');
    let html = "";
    html += `
            <div class="p-2 flex-grow-1 bd-highlight address_string">
                ${address.address_field_1} ${address.address_field_2} <br>
                ${address.city}, ${address.state} ${address.postal_code}
            </div>
            <div class="d-flex bd-highlight">
                <div class="me-auto p-2 bd-highlight"><button type="button" class="btn btn-success btn-sm edit">Edit</button></div>
                <div class="p-2 bd-highlight"><button type="button" class="btn btn-success btn-sm delete">Delete</button></div>
            </div>

            <form class="edit_address_form d-none">
                <div class="mb-3">
                    <input type="text" id="address_field_1" class="form-control" placeholder="Address Field 1">
                </div>
                <div class="mb-3">
                    <input type="text" id="address_field_2" class="form-control" placeholder="Address Field 2">
                </div>
                <div class="row mb-3">
                    <div class="col-sm-4">
                        <input type="text" id="city" class="form-control" placeholder="City">
                    </div>
                    <div class="col-sm-4">
                        <!-- adapted from https://gist.github.com/bzerangue/3083954 -->
                        <select id="state" class="form-select" name="state">
                            <option value="">State/Province</option>
                            <optgroup label="U.S. States/Territories">
                                <option value="AK">Alaska</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="AZ">Arizona</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DC">District of Columbia</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IA">Iowa</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MD">Maryland</option>
                                <option value="ME">Maine</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MO">Missouri</option>
                                <option value="MS">Mississippi</option>
                                <option value="MT">Montana</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NV">Nevada</option>
                                <option value="NY">New York</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VA">Virginia</option>
                                <option value="VT">Vermont</option>
                                <option value="WA">Washington</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </optgroup>
                            <optgroup label="Canadian Provinces">
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NF">Newfoundland</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="NU">Nunavut</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="YT">Yukon Territory</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <input type="text" id="postal_code" class="form-control" placeholder="Postal Code">
                    </div>
                </div>
                <button type="button" class="btn btn-primary edit_address_form_button">Submit</button>
            </form>
    `;
    let li = document.createElement("li");
    li.classList.add("border");
    li.classList.add("mb-5");
    li.classList.add("rounded-3");

    li.innerHTML = html;
    html_addresses_ul.appendChild(li);

    update_saved_addresses();

    li = html_addresses_ul.lastElementChild;
    add_edit_functionality(li.getElementsByClassName("edit")[0], li.getElementsByClassName("edit_address_form_button")[0]);
    add_delete_functionality(li.getElementsByClassName("delete")[0]);
};

function update_saved_addresses() {
    let addresses = document.getElementsByClassName("address_string");
    let saved_addresses = document.getElementById("saved_addresses");
    let html = `<ul class="a">`;
    for (let i = 0; i < addresses.length; i++) {
        html += `<li>`;
        html += "• ";
        let tmp = JSON.parse(JSON.stringify(addresses[i].innerHTML));;
        tmp = tmp.replace("<br>", " ");
        html += tmp;
        html += `</li>`;
    }
    html += `</ul>`;
    saved_addresses.innerHTML = html;
}

//add functionality
document.querySelector("#add_new_button").addEventListener('click', () => {
    document.getElementById("add_new_address_form").classList.toggle("d-none");
});

document.getElementById("add_address_form_button").addEventListener('click', () => {
    form = document.getElementById("add_new_address_form");
    let obj = {};
    for (let i = 0; i < form.length; i++) {
        let key = form[i].id;
        let value = form[i].value;
        obj[key] = value;
    }

    if (obj["address_field_1"] == "") {
        alert('pease enter address field 1');
        return;
    } else if (obj["city"] == "") {
        alert('pease enter city');
        return;
    } else if (obj["state"] == "") {
        alert('pease enter state');
        return;
    } else if (obj["postal_code"] == "") {
        alert('pease enter postal code');
        return;
    }
    add_address(obj);
});


function add_edit_functionality(edit_button, edit_submit_button) {
    edit_button_interactivity(edit_button);
    edit_submit_button_interactivity(edit_submit_button);
}

function edit_button_interactivity(edit_button) {
    edit_button.addEventListener('click', () => {
        edit_button.parentNode.parentNode.parentNode.children[2].classList.toggle('d-none');
    });
}

function edit_submit_button_interactivity(edit_submit_button) {
    edit_submit_button.addEventListener('click', () => {
        let form = edit_submit_button.parentNode;
        let obj = {};
        for (let i = 0; i < form.length; i++) {
            let key = form[i].id;
            let value = form[i].value;
            obj[key] = value;
        }
        if (obj["address_field_1"] == "") {
            alert('pease enter address field 1');
            return;
        } else if (obj["city"] == "") {
            alert('pease enter city');
            return;
        } else if (obj["state"] == "") {
            alert('pease enter state');
            return;
        } else if (obj["postal_code"] == "") {
            alert('pease enter postal code');
            return;
        }
        let surrounding_li = form.parentNode;
        let string_val = surrounding_li.children[0];
        string_val.innerHTML = `${obj["address_field_1"]} ${obj["address_field_2"]} <br>
        ${obj["city"]}, ${obj["state"]} ${obj["postal_code"]}`;

        update_saved_addresses();
    });
}

//delete functionality
function add_delete_functionality(delete_button) {
    delete_button.addEventListener('click', () => {
        let address = delete_button.parentNode.parentNode.parentNode;
        address.remove();
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