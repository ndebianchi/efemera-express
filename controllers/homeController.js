const homeController = {
    index: (req,res) => {
        let servicos = [
            {nome: 'Desenvolvimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
        ]
        let banner = ['/imagens/banner.jpg','/imagens/banner2.jpg','/imagens/banner3.jpg']

        res.render('index', { title: 'Home', listaServicos: servicos, listaBanner: banner });
    }
};

module.exports = homeController;
