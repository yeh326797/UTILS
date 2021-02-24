//定義需要用到的資料
var morseCode = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"

var morseList = morseCode.split("|")
for(var i=0; i<morseList.length; i++){
    morseList[i]=morseList[i].split(";")
    //顯示在畫面上
    $("ul.translist").append("<li>"+morseList[i][0]+" "+morseList[i][1]+"</li>")
}

//單字翻譯
function findCode(letter){
    for(var i=0; i<morseList.length; i++){
        if (morseList[i][0] == letter){
            return morseList[i][1]
        }
    }
    return letter;
}

function findLetter(code){
    for(var i=0; i<morseList.length; i++){
        if (morseList[i][1] == code){
            return morseList[i][0]
        }
    }
    return code;
}

//整段翻譯
function translateToMorse(text){
    text = text.toUpperCase()
    var result= ""
    for(var i=0; i<text.length; i++){
        result+=findCode(text[i])+" "
    }
    return result
}

function translateToEng(text){
    text = text.split(" ")
    var result= ""
    for(var i=0; i<text.length; i++){
        result+=findLetter(text[i])
    }
    return result
}

//翻譯動作
$("#btnMorse").click(function(){
    var input = $("#input").val()
    var result = translateToMorse(input)
    $("#output").val(result)
    $("#output").css({
        backgroundColor: "#292B73"
    }).animate({
        backgroundColor: "transparent"
    },500)
    $(".symbol").velocity({
        rotateZ: ["360deg","0deg"]
    })
})

$("#btnEng").click(function(){
    var input = $("#output").val()
    var result = translateToEng(input)
    $("#input").val(result)
    $("#input").css({
        backgroundColor: "#292B73"
    }).animate({
        backgroundColor: "transparent"
    },500)
    $(".symbol").velocity({
        rotateZ: ["0deg","360deg"]
    })
})

//校正輸入(小寫變大寫、移除空白)
$("#input").keyup(function(){
    var original = $(input).val()
    var newtext = original.toUpperCase().split(" ").join("")
    $("#input").val(newtext)
})