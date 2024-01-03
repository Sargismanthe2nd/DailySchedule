$(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));

  //click listener to save buttons
  $('.saveBtn').click(function() {
    var hourId = $(this).parent().attr('id');
    var eventText = $(this).siblings('.description').val();
    localStorage.setItem(hourId, eventText);
  });

  // past-pres-fut time blocks
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

  // Load saved info
  $('.time-block').each(function() {
    var hourId = $(this).attr('id');
    var savedEvent = localStorage.getItem(hourId);
    if (savedEvent) {
      $(this).find('.description').val(savedEvent);
    }
  });
});
