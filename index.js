function createList() {
    let ul = document.getElementById("customerList");
    let li = document.createElement("li");
    let name = document.createTextNode(document.getElementById("name").value);
    let city = document.createTextNode(document.getElementById("city").value);
    let paymentMethod = document.createTextNode(document.getElementById("paymentMethod").value);
    li.append(name);
    li.append(" ");
    li.append(city);
    li.append(" ");
    li.append(paymentMethod);
    ul.append(li);

};








