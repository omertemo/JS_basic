function animate_string(id){
    var element = document.getElementById(id);
    console.log(element);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval(() => {
        text = text[text.length -1] + text.substring(0,text.length -1);
        textNode.data = text;
    },100)
}

function deneme(){
    var word = "deneme";
    console.log(word.childNodes[0]);
}
