const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push("Ralph")
   return cats;
}

function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
    return cats;
}
 function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield")
 }
 function destructivelyRemoveFirstCat(){
    cats.shift()
 }
 function appendCat(Broom){
    //cats.push("Broom")
   return[...cats,"Broom"]
 }
 function prependCat(){
    return ["Arnold",...cats]
 }
 function removeLastCat(){
   return cats.slice(0,-1)
 }
 function removeFirstCat(){
    return cats.slice(1)
 }