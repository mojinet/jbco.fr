class Realisation extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div className="realisation_item">
                    <a href={this.props.url} target="_blank">
                        <img class="realisation_item__monitor" src={this.props.img} alt=""/>
                    </a>
                    <div className="realisation_item__description">
                        <a href={this.props.url} target="_blank"> 
                            <h4>{this.props.title}</h4>
                        </a>
                        <p> {this.props.description} </p>
                        <h5>Technologies utilisées :</h5>
                        <div className="realisation_item__technologie">
                            {this.props.tech.map(value => <img className="realisation_item__logo" src={"/public/rss/logo/" + value + ".png"} alt=""/> )}
                        </div>
                    </div> 
                </div>
    }
}

ReactDOM.render(render(),document.querySelector('#realisation_components'))
function render(){
    return  <div>
                <Realisation 
                    title="Jbco.fr" 
                    url="http://jbco.fr" 
                    tech={["html","css","sass","xd","ps"]} 
                    img="/public/rss/img/mockup_jbco.png" 
                    description="Jbco.fr est le site que vous visitez actuellement, 
                                 il permet de vous faire connaître mes compétences 
                                 en développement informatique. Le contenu des réalisations 
                                 sera mis à jour régulièrement."
                />
                <Realisation 
                    title="Hazpiq.com" 
                    url="http://hazpiq.com" 
                    tech={["html","css","sass"]} 
                    img="/public/rss/img/mockup_hazpiq.png" 
                    description="Hazpiq.com est le site d'un groupe de métal progressif 
                                de la région parisienne. Leur premier album est sorti 
                                en janvier 2019 et le site permet de le promouvoir avec 
                                les différentes sections telles que music et live qui regroupent 
                                leurs clips musicaux."
                />
                <Realisation 
                    title="cseterritoiremoulins.fr" 
                    url="https://cseterritoiremoulins.fr/" 
                    tech={["html","css","sass","mysql","php","xd"]} 
                    img="/public/rss/img/mockup_cse.png" 
                    description=" cseterritoiremoulins.fr est le site du comité social et 
                    économique de l'UNAPEI d'Yzeure. Il permet aux membres du comité de 
                    visualiser les actualités, de poser des questions anonymes et aux 
                    administrateurs du site de gérer le contenu du site."
                />
            </div>
}