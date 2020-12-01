var list_of_para1 = [];
var list_of_para2 = [];

function getPara1() {
    var array_Para1 = [];

    for (var i = 1; i <= 4; i++) {
        var linePara1 = document.getElementById("line1" + i).value;
        list_of_para1.push(linePara1);
    }

    var length = list_of_para1.length;
    for (var j = 0; j < length; j++) {
        array_Para1.push(list_of_para1[j]);
        console.log(array_Para1);
    }

    var finalPara1 = array_Para1.join(".");
    document.getElementById('parag1').innerHTML = finalPara1;
}

function getPara2() {
    var array_Para2 = [];

    for (var k = 1; k <= 4; k++) {
        var linePara2 = document.getElementById("line2" + k).value;
        list_of_para2.push(linePara2);
    }

    var length2 = list_of_para2.length;
    for (var l = 0; l < length2; l++) {
        array_Para2.push(list_of_para2[l]);
        console.log(array_Para2);
    }

    var finalPara2 = array_Para2.join(".");
    document.getElementById('parag2').innerHTML = finalPara2;
}