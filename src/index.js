/* main part of the application 

part 1: asynchronous
part 2: javascript
part 3: XML
part 4: XHR


// end-user action (function)


*/

// this function will be called when we click the button
function upLoad() {
    // create a new XHR object
    let xhr = new XMLHttpRequest();

    // configure: get-req for the URL
    xhr.open('GET', 'https://my-json-server.typicode.com/typicode/demo/comments/1', true); // first is the method, second is the URL and third is whether the request is asynchronous or not

    // setup a function thats called when the request is complete
xhr.onload = function() {
    // check if the request is successful
    // if the status if more than or equal to 200 and (but) less than 300 then the request is successful 
    

    if(this.status >= 200 && this.status < 300) {
        try {
            let response = JSON.parse(this.responseText); // parse the response text into a JSON object

            let html = ""
            html += '<h1>' + response.title + '</h1>'
            html += '<p>' + response.body + '</p>'

            document.getElementById('post').innerHTML = html; // set the innerHTML of the upload div to the html variable
            console.log('response has been posted!')
        } catch (e) {
            console.error('Error parsing JSON');
        }
    }
}

// send the request
xhr.send(); // this will send the request to the server
}

// onclick event listener on clicking button
document.getElementById('uploadButton').addEventListener('click', upLoad); // when the button is clicked, the upLoad function will be called

