
function hide_message(){
	panel_message = document.getElementById("message");
	panel_message.style.display = "none";
}

function ShowMessage(winner){
	panel_message = document.getElementById("message");
	panel_message.style.display = "block";

	if (winner == 1) string_notification = "Game Over";
	else string_notification = "You Win";

	MessageNotification = document.getElementById("notification");
	MessageNotification.innerHTML = string_notification;

	if (winner == 1) string_button = "Continuar jugando?";
	else string_button = "Continuar jugando?";

	MessageButton = document.getElementById("button");
	MessageButton.innerHTML = string_button;

	MessageTweet = document.getElementById("tweet_gameover");
}