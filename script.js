
$( ()=>{
    $('#prepend').click( ()=>{
        let text=$('#item').val()
        $('#list').prepend($(`<li> ${text} </li>`))
    })


    $('#append').click( ()=>{
        let teext=$('#item').val()
        $('#list').append($(`<li> ${teext} </li>`))
    })
})