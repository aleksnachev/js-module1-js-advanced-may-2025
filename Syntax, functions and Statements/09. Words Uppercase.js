function words (text){

    console.log(text.split(/[\W]/).filter(x => x!== "").join(", ").toUpperCase());
    

}
words ('Hi, how are you?')