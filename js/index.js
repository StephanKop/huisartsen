/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

$(document).ready(function(e) {
	if (localStorage.avatar){
	$(".employee").addClass(window.localStorage.getItem("avatar"));
	}
    $(".avatars a").click(function(e) {
		$(".employee").removeClass(window.localStorage.getItem("avatar"));
		avatar = $(this).children("img")[0].className;
		window.localStorage.setItem("avatar", avatar);
		$(".employee").addClass(window.localStorage.getItem("avatar"));
    });

    document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

console.log("CORDOVA IS WORKING:::");
}

    document.getElementById("camerabtn").addEventListener("click", TakePicture);

    function TakePicture(){

        navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
            destinationType: Camera.DestinationType.FILE_URI }); 
            }
            
            function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
            }
            
            function onFail(message) {
            alert('Failed because: ' + message);
            }   

            

    }
    );

    $(document).ready(function() {
        $("#driver").click(function(event){
            
           $.getJSON('/result.json', function(jd) {
              $('#stage').html('<p> Naam: ' + jd.name + '</p>');
              $('#stage').append('<p>Leeftijd : ' + jd.age+ '</p>');
              $('#stage').append('<p> Geslacht: ' + jd.sex+ '</p>');
              $('#stage').append('<p> Opmerkingen: ' + jd.opmerkingen+ '</p>');
              $('#stage').append('<p> Recepten: ' + jd.recepten+ '</p>');
           });
                
        });
     });





