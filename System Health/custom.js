

$(document).ready(function(){
    
    var table = $('#example').DataTable({
        
        buttons:[, 'csv', 'excel', 'pdf', 'print']
        
    });
    
    
    table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');

});

