let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let weight = document.getElementById('Weight').value;
    let height = document.getElementById('Height').value;
    let finalbmi = (weight / (height * height) * 10000);
    document.getElementById('bmi-output').value = finalbmi;
})
