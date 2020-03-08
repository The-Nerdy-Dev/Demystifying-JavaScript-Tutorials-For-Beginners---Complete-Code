// The code is just for demonstration. The concept
// of IIFE has been explained in great detail in one of
// my videos on IIFE. Feel free to check that first and
// then try the code demos along with the video.

(function(channelName, subscriberName) {
  console.log(`Thanks for subscribing to ${channelName},${subscriberName}`);
})('The Nerdy Dev','Alex');
