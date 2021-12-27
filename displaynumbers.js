function setup() {
createCanvas(400,400)

count()
}

function draw(){
background()



}

function count(){
    var numbers = [1,2,3,4,5,6,7,8,9]

    var len = numbers.length

    for(var i = 0; i<=len; i++){
        console.log(numbers[i])
    }
}