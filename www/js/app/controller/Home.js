Home_Controller =
    {
        Elementos: function () {
            Home_Controller.el = {
                idPesquisa: $("#idPesquisa"),
                boxBuscar: $("#boxBuscar"),
            };
            $.extend(Home_Controller.el);
        },

        campoBusca: function () {
            Home_Controller.el.idPesquisa.click(function () {
                Home_Controller.el.boxBuscar.toggle('slow');
            });
        },
        
        getInit: function () {
            /*
             * //importante - Esse método Elementos tem que ser chamado primeiro para que os outros métodos
             */
            Home_Controller.Elementos();
            Home_Controller.campoBusca();
        }

    }//CadastrarUsuarioController



