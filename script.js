let xhr = new XMLHttpRequest()
xhr.open("localhost:5032")
xhr.onload = function(){
    console.log(xhr.response)

}

xhr.send()

