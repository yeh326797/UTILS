//定義需要用到的資料
var morseCode = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"

var morseList = morseCode.split("|")
for(var i=0; i<morseList.length; i++){
    morseList[i]=morseList[i].split(";")

    $("ul.translist").append("<li>"+morseList[i][0]+" "+morseList[i][1]+"</li>")
}