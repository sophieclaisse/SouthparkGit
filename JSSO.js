/**
 * Created by sstienface on 07/10/2018.
 */

document.getElementById('up').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.top);
    if (t>=5){
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('down').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.top);
    if (t<=465){
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('right').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.left);
    if (t<=465) {
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});

document.getElementById('left').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.left);
    if (t>=5){
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});


