$('#currentDay').text(dayjs().format('dddd, MMMM D'));

//saves the content inputed per each box.
$('.saveBtn').click(function() {
  var hourId = $(this).parent().attr('id');
  var eventText = $(this).siblings('.description').val();
  localStorage.setItem(hourId, eventText);
});

//changes the colour of the blocks with the current hour. 
$('.time-block').each(function() {
  var currentHour = dayjs().hour();
  var blockHour = parseInt($(this).attr('id').split('-')[1]);

  if (blockHour < currentHour) {
    $(this).addClass('past').removeClass('present future');
  } else if (blockHour === currentHour) {
    $(this).addClass('present').removeClass('past future');
  } else {
    $(this).addClass('future').removeClass('past present');
  }
});

//loads in saved content
$('.time-block').each(function() {
  var hourId = $(this).attr('id');
  var savedEvent = localStorage.getItem(hourId);
  if (savedEvent) {
    $(this).find('.description').val(savedEvent);
  }
});