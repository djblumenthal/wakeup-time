var grabTime = function(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var pm;
  if (hours>=12){
    pm = true;
    if (hours > 12){
      hours -= 12;
    }
  }else if (hours==0){
    hours+=12;
  }if (!pm){
      pmIndicator.css('background-color', 'red');
  }
  return ''+hours+':'+minutes+'';
}


  var outerShell = $('<div class ="outer-shell"></div>');
  var innerShell = $('<div class ="inner-shell"></div>');
  var clockScreen = $('<div class ="clock-screen"></div>');
  var clockText = $('<h1 class="clock-text"></h1>');
  var indicatorContainer = $('<div class="indicator-container"></div>');
  var pmIndicator = $('<div class="indicator" id="pm-indicator"></div>');
  var labelPM = $('<div class="label" id="pm-label">PM</div>');
  var autoIndicator = $('<div class="indicator" id="auto-indicator"></div>');
  var labelAuto = $('<div class="label" id="auto-label">AUTO</div>');
  var pmContainer = $('<div id="pm-container"></div>');
  var autoContainer = $('<div id="auto-container"></div>');
  var freqContainer = $('<div id="freq-container"></div>');
  
  var amFreq = $('<div class="freq" id="am-freq">AM 53 60 70 90 110 140 170</div>');
  var fmFreq = $('<div class="freq" id="fm-freq">FM 88 92 96 102 106 108</div>');



$(document).on('ready', function() {
  $('.container').append(outerShell);
  
  outerShell.append(innerShell);

  innerShell.append(clockScreen);

  setInterval( function(){
    clockText.text(grabTime());
  }, 0, 1000);

  
  clockScreen.append(indicatorContainer, clockText, freqContainer);

  indicatorContainer.append(pmContainer, autoContainer);
  
  autoContainer.append(labelAuto, autoIndicator);
  
  pmContainer.append(labelPM, pmIndicator);

  freqContainer.append(amFreq, fmFreq);

});