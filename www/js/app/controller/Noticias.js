Noticia_Controller =
    {
        Elementos: function () {
            Noticia_Controller.el = {
                idPesquisa: $("#idPesquisa"),
                boxBuscar: $("#boxBuscar"),
            };
            $.extend(Noticia_Controller.el);
        },
        getNoticiaJson: function () {
            $("#preload").toggle();
            var url = 'http://www.json-generator.com/api/json/get/cjEWqFyDdu?indent=2';
            $.post(url, function (data) {
            }, "json").done(function (data) {
                $.each(data, function (i, e) {
                    $('#noticiaJSON').append(Noticia_View.templat_view(e.status));
                });
            }).fail(function () {
                alert('Falha');
            }).always(function () {
                $("#preload").toggle();
            });
            
        },
        getNoticiaXml: function () {
            var FeedUrl = "http://cinema.uol.com.br/ultnot/index.xml";
            var YQLstr = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + FeedUrl + '" LIMIT ' + 5;
            link = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?";
            $("#preload").toggle();

            $.post(link, function (data) {
            }, "json").done(function (data) {
                if (!(data.query.results.rss instanceof Array)) {
                    data.query.results.rss = [data.query.results.rss];
                }
                $.each(data.query.results.rss, function (e, itm) {
                    $('#noticiaXML').append(Noticia_View.templat_view(itm.channel.item.title));
                });
            }).fail(function () {
                alert('Falha');
            }).always(function () {
                $("#preload").toggle();
            });

            return false;

            $.ajax({
                url: link,
                dataType: "json",
                success: function (data) {
                    // console.log(data.query.results.rss);

                    if (!(data.query.results.rss instanceof Array)) {
                        data.query.results.rss = [data.query.results.rss];
                    }
                    $.each(data.query.results.rss, function (e, itm) {
                        // console.log(itm.channel.item);
                        console.log(itm.channel.item.title);
                        $('#noticiaXML').append(Noticia_View.templat_view(itm.channel.item.title));
                    });
                }
            });
        },

        campoBusca: function () {
            Noticia_Controller.el.idPesquisa.click(function () {
                Noticia_Controller.el.boxBuscar.toggle('slow');
            });
        },
        getInit: function () {
            /*
             * //importante - Esse método Elementos tem que ser chamado primeiro para que os outros métodos
             */
            Noticia_Controller.Elementos();
            Noticia_Controller.getNoticiaJson();
            Noticia_Controller.campoBusca();
            Noticia_Controller.getNoticiaXml();
        }

    }//CadastrarUsuarioController



