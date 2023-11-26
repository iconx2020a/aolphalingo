// Adding click event listeners to the bars

document.getElementById('bar1').addEventListener('click', () => showResponse('response1'));
document.getElementById('bar2').addEventListener('click', () => showResponse('response2'));

// Function to show response based on the clicked bar
function showResponse(responseId) {
    const responses = document.querySelectorAll('.response');
    responses.forEach(response => {
        response.style.display = 'none';
    });

    const selectedResponse = document.getElementById(responseId);
    selectedResponse.style.display = 'block';
}

  //sound function
function playSound1(){
    var snd = new Audio('s1.mp3')//wav is also supported
    snd.play()//plays the sound
}
function playSound2(){
    var snd = new Audio('s2.mp3')
    snd.play()
}
function playSound3(){
    var snd = new Audio('s3.mp3')
    snd.play()
}