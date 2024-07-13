function GetPrint(){
    window.print();
}
function BtnAdd(){
    var v = $("#TRow").clone().appendTo("#TBody");
    $(v).find("input").val('');
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}
function BtnDel(v){
    $(v).parent().parent().remove();
    GetTotal();
    $("#TBody").find("tr").each(
    function(index){
        $(this).find("th").first().html(index);
    }
    );
}
function Calc(v){
    var index = $(v).parent().parent().index();
    var qty = document.getElementsByName("qty")[index].value;
   var rate = document.getElementsByName("rate")[index].value; 
  /*  var rate = document.getElementsByName("product")[index].value;*/
    var amt = qty * rate;
    document.getElementsByName("amt")[index].value = amt;
    document.getElementsByName("rate")[index].value = rate;
    GetTotal();
}

function GetTotal()
{
    /*Footer Calculation*/   

    var sum=0;
    var amts =  document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++)
    {
        var amt = amts[index].value;
        sum = +(sum) +  +(amt) ; 
    }

    document.getElementById("FTotal").value = sum;

    var gst =  document.getElementById("FGST").value;
    var net = +(sum) + +(gst);
    document.getElementById("FNet").value = net;

}





/*
var total = document.getElementById("amt");
var netPrice = document.getElementsByClassName("Ftotal");

function quatityF (q){
    var priceValue = q.parenteElement.parenteElement.children[1].children[0].value;
    q.parenteElement.parenteElement.children[2].innerHTML = q.value * priceValue;
    finaltotal();
}
function priceF (p){
    var quatityValue = p.parenteElement.parenteElement.children[0].children[0].value;
    p.parenteElement.parenteElement.children[2].innerHTML = p.value * quatityValue
    finaltotal();
}
function finaltotal(){
    var cal=0;
    for (let i =0; i < netPrice.length; i++){
        cal += parseInt(netPrice[i].innerHTML);
    }
    total.innerHTML = cal;
}
*/