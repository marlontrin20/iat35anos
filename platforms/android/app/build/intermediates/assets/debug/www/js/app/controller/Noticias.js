Noticia_Controller =
        {
            Elementos: function() {
                Noticia_Controller.el = {
                    idPesquisa: $("#idPesquisa"),
                    boxBuscar: $("#boxBuscar"),
                };
                $.extend(Noticia_Controller.el);
            },
            getTeste: function()
            {
                $("#preload").toggle();
                var url = 'http://www.json-generator.com/api/json/get/cjEWqFyDdu?indent=2';
//                $.post(url, Home_Controller.el.formLoteria.serialize(), function(data) {
                $.post(url, function(data) {
                }, "json").done(function(data) {
                    $.each(data, function(i, e)
                    {
//                        $('.card').first().before(Noticia_View.templat_view(e.status));
                        $('#noticia').before(Noticia_View.templat_view(e.status));

                    });
                }).fail(function() {
                    alert('Falha');
                }).always(function()
                {
                    $("#preload").toggle();
                });
            },
            campoBusca: function()
            {
                Noticia_Controller.el.idPesquisa.click(function()
                {
                    Noticia_Controller.el.boxBuscar.toggle('slow');
                });
            },
            getInit: function()
            {
                /*
                 * //importante - Esse método Elementos tem que ser chamado primeiro para que os outros métodos
                 */
                Noticia_Controller.Elementos();
                Noticia_Controller.getTeste();
                Noticia_Controller.campoBusca();
            }

        }//CadastrarUsuarioController



        