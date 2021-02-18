// going to work on with tutor on 2/19/21
$(function(){
    $('#btn').on('click', function(event){
        event.preventDefault()
        let newBurger = {
            burger_name: $('#inpt').val(),
            devoured: false,
    
    }

        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger,
        }).then(function () {            
            location.reload();
            
            console.log('Posted')
        
        })
    }); 
    
   
   
    $('.devour').on('click', function(event) {
        event.preventDefault()
        // console.log($(this).attributes.id)
        let id = event.target.id
        let newBurger = {
            burger_name: event.target.burger_name,
            devoured: true
        }
        console.log(event.target.id)
        $.ajax('api/burger/' + id, {
            type: 'PUT',
            data: newBurger

        }).then( function() {
            console.log('Devoured burger' + id)
            location.reload()

        })
    })












})