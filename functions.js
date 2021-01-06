//url is the url to send the get request to
function getJSON(endpoint){
    endpoint = "https://admin:admin@localhost:8080" + endpoint;
    let request = new XMLHttpRequest();
    request.open("GET",endpoint,false);
    request.overrideMimeType("application/json");
    request.setRequestHeader("Content-Type","application/json");
    request.send();
    return request.responseText;
}

function getText(endpoint){
    endpoint = "https://admin:admin@localhost:8080" + endpoint;
    let request = new XMLHttpRequest();
    request.open("GET",endpoint,false);
    request.overrideMimeType("text/plain");
    request.setRequestHeader("Content-Type","text/plain");
    request.send();
    return request.responseText;
}

function getList(endpoint){
    endpoint = "https://admin:admin@localhost:8080" + endpoint;
    let request = new XMLHttpRequest();
    request.open("GET",endpoint,false);
    request.setRequestHeader("Content-Type","*/*");
    request.send(null);
    return request.response;
}

//url is the url to send the request to
//json is the content being sent through the request, i.e. the json data being sent to function
function postJSON(endpoint,json){
    endpoint = "https://admin:admin@localhost:8080" + endpoint;
    let request = new XMLHttpRequest();
    request.open("POST",endpoint,false);
    request.setRequestHeader("Content-Type","application/json");
    return request.send(JSON.stringify(json));
}
function putJSON(endpoint,json){
    endpoint = "https://admin:admin@localhost:8080" + endpoint;
    let request = new XMLHttpRequest();
    request.open("PUT",endpoint,false);
    request.setRequestHeader("Content-Type","application/json");
    return request.send(JSON.stringify(json))
}
function deleteItem(endpoint,item){
    endpoint = "https://admin:admin@localhost:8080" + endpoint;
    let request = new XMLHttpRequest();
    request.open("DELETE",endpoint,false);
    request.setRequestHeader("Content-Type","application/json");
    return request.send(JSON.stringify(item));
}