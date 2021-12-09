const html_addresses_li = document.querySelector('#addresses');
var phone_number = '111-222-333'
const addresses = [
    {
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

let html = "";

addresses.forEach( address => {
    html += `
        <li class="border mb-5 rounded-3" id="addresses_li">
                <div class="p-2 flex-grow-1 bd-highlight address_string">
                    • ${address.address_field_1} ${address.address_field_2} <br>
                    ${address.city}, ${address.state} ${address.postal_code}
                </div>
                <button type="button" class="btn btn-success btn-sm edit">Edit</button>
                <button type="button" class="btn btn-success btn-sm delete">Delete</button>

            <div class="d-none">
            <form class="edit_address_form">
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
                    </div>
                </div>
            </form>
            </div>
        </li>
    `;
});

html_addresses_li.innerHTML = html;

//add functionality
const add_btn = document.querySelector(".add_new_button")
add_btn.addEventListener('click', () => {
    document.getElementById("add_new_address_form").classList.toggle("d-none");
});

//edit functionality
[...document.getElementsByClassName('edit')].forEach((edit_button) => {
    edit_button.addEventListener('click', () => {
        var address = edit_button.parentNode;
        address.children[3].classList.toggle('d-none');
    })
});

function update_saved_addresses() {
    let addresses = document.getElementsByClassName("address_string");
    let saved_addresses = document.getElementById("saved_addresses");
    let html = `<ul>`;
    for (let i = 0; i < addresses.length; i++) {
        html += `<li>`;
        html += addresses[i].innerHTML;
        html += `</li>`;
    }
    html += `</ul>`;
    console.log(html);
    saved_addresses.innerHTML = html;
}

update_saved_addresses();

//submit edit address functionality
[...document.getElementsByClassName('edit_address_form_button')].forEach((submit_button) => {
    submit_button.addEventListener('click', () => {
        var elementss = submit_button.parentNode;
        var obj ={};
        for (var i = 0 ; i < elementss.length ; i++){
            var key = elementss[i].id;
            var value = elementss[i].value;
            obj[key] = value;
        }
        if (obj["address_field_1"] == "") {
            alert('pease enter address field 1');
            return;
        }
        else if (obj["city"] == "") {
            alert('pease enter city');
            return;
        }
        else if (obj["state"] == "") {
            alert('pease enter state');
            return;
        }
        else if (obj["postal_code"] == "") {
            alert('pease enter postal code');
            return;
        }
        var surrounding_li = submit_button.parentNode.parentNode.parentNode;
        var string_val = surrounding_li.children[0];
        string_val.innerHTML = `${obj["address_field_1"]} ${obj["address_field_2"]} <br>
        ${obj["city"]}, ${obj["state"]} ${obj["postal_code"]}`;

        update_saved_addresses();
    });
});


//delete functionality
[...document.getElementsByClassName('delete')].forEach((delete_button) => {
    delete_button.addEventListener('click', () => {
        var address = delete_button.parentNode;
        address.remove();
        update_saved_addresses();
    });
});

