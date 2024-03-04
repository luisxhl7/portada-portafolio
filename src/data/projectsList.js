import { images } from "../assets/image";

const projectsList = [
    {
        image: images.vista_my_portafolio,
        title: 'Mi portafolio',
        nameLink: 'mi-portafolio',
        description: 'mi portafolio me permite enseñar un poco sobre mi y mis proyectos personales',
        extendedDescription:<>
            ¡Bienvenido a mi portafolio! Este espacio te invita a adentrarte en mi mundo profesional y personal, donde podrás descubrir quién soy a través de mis proyectos y experiencias.
            <br/> 
            Mis proyectos personales son la esencia misma de este portafolio. Cada uno de ellos es un reflejo de mi dedicación, habilidades y visión única. Desde proyectos de diseño hasta desarrollos tecnológicos, cada iniciativa representa un desafío superado y un logro alcanzado. Disfruto explorando nuevas tecnologías y enfoques, siempre con la meta de crear soluciones impactantes y significativas.
            <br/>
            ¡Espero que disfrutes explorando mi portafolio y que encuentres inspiración en mis proyectos!
        </>, 
        url:'https://main.d1682e8p58bvjn.amplifyapp.com/',
        repoGit: 'https://github.com/luisxhl7/portada-portafolio',
        technologies: [
            {
                image: images.react,
                name: 'react js'
            },
            {
                image: images.javaScript,
                name: 'javaScript'
            },
            {
                image: images.sass,
                name: 'Sass'
            },
            {
                image: images.git,
                name: 'git'
            },
            {
                image: images.github,
                name: 'github'
            },
            {
                image: images.testing_library,
                name: 'testing library'
            }
        ],
        Methodologies:['Atomic Design', 'Bem', 'Mobile first'],
        tools:['React js', 'JavaScript', 'Html', 'Css', 'Sass', 'Testing Library', 'Git']
    },
    {
        image: images.vista_my_music_app,
        title: 'My music app',
        nameLink: 'my-music-app',
        description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música utilizando la api de spotify!',
        extendedDescription: <>
            Bienvenido a mi proyecto de streaming de música inspirado en Spotify. Con este proyecto, he querido explorar y demostrar mi habilidad para crear una plataforma de reproducción de música que captura la esencia y la funcionalidad de una de las aplicaciones de música más populares del mundo.
            <br/>
            Utilizando la API de Spotify, he creado un entorno que permite a los usuarios descubrir y disfrutar de su música favorita de una manera intuitiva y emocionante. Mi objetivo era replicar la experiencia de usuario fluida y atractiva que caracteriza a Spotify, al tiempo que agregaba mi propio toque personal y características únicas.
            <br/>
            En este clon de Spotify, los usuarios pueden acceder a una amplia biblioteca de canciones, álbumes y listas de reproducción, así como también descubrir nueva música a través de recomendaciones personalizadas y listas de éxitos.
        </>,
        url:'https://main.d3mrsqa2j7ln2g.amplifyapp.com/',
        repoGit: 'https://github.com/luisxhl7/portafolio-my-music-app',
        technologies: [
            {
                image: images.react,
                name: 'react js'
            },
            {
                image: images.javaScript,
                name: 'javaScript'
            },
            {
                image: images.sass,
                name: 'Sass'
            },
            {
                image: images.git,
                name: 'git'
            },
            {
                image: images.github,
                name: 'github'
            },
            {
                image: images.testing_library,
                name: 'testing library'
            }
        ],
        Methodologies:['Atomic Design', 'Bem', 'Mobile first'],
        tools:['React js', 'JavaScript', 'Html', 'Css', 'Sass', 'Testing Library', 'Axios', 'Git', 'Redux', 'Api Spotify']
    },
    {
        image: images.vista_my_store,
        title: 'My Store',
        nameLink: 'my-store',
        description: 'My Store es una plataforma en línea diseñada para impulsar y promover el mercado de componentes para PC.',
        extendedDescription: <>
            My Store es una plataforma en línea que he desarrollado con el objetivo de potenciar y promover el mercado de componentes para PC. Este proyecto surge de mi pasión por la tecnología y mi interés en crear soluciones innovadoras en el ámbito del comercio electrónico.
            <br/>
            En My Store, los usuarios pueden explorar una amplia variedad de componentes para PC, desde procesadores y tarjetas gráficas hasta placas base y unidades de almacenamiento. Aunque el proyecto no permite realizar compras reales en el sentido tradicional, ofrece una experiencia de navegación completa y realista, permitiendo a los usuarios visualizar los productos, leer descripciones detalladas y comparar precios.
            <br/>
            Una de las características más destacadas de My Store es su enfoque en la experiencia del usuario. Me he esforzado por crear una interfaz intuitiva y atractiva que facilite la navegación y la búsqueda de productos.
        </>,
        url:'https://main.d2ahtulm8ezp73.amplifyapp.com/home',
        repoGit: 'https://github.com/luisxhl7/my-store',
        technologies: [
            {
                image: images.react,
                name: 'react js'
            },
            {
                image: images.javaScript,
                name: 'javaScript'
            },
            {
                image: images.sass,
                name: 'Sass'
            },
            {
                image: images.git,
                name: 'git'
            },
            {
                image: images.github,
                name: 'github'
            },
            {
                image: images.testing_library,
                name: 'testing library'
            }
        ],
        Methodologies:['Atomic Design', 'Bem', 'Mobile first'],
        tools:['React js', 'JavaScript', 'Html', 'Css', 'Sass', 'Testing Library', 'Git']
    },
    {
        image: images.vista_my_pokedex,
        title: 'My Pokedex',
        nameLink: 'my-pokedex',
        description: 'La Pokédex es una guía esencial que proporciona información detallada sobre cada Pokémon, incluyendo sus características, habilidades, tipos y hábitats, en el mundo de Pokémon.',
        extendedDescription: <>
            La Pokédex es mucho más que una simple guía; es una herramienta esencial para cualquier entrenador Pokémon en su viaje para convertirse en un maestro Pokémon. Este proyecto representa mi pasión por el universo Pokémon y mi habilidad para crear soluciones digitales que satisfacen las necesidades de los fans de esta franquicia icónica.
            <br/>
            La Pokédex obtiene su información detallada sobre cada Pokémon a través de la integración de una API especializada en datos de Pokémon. Esta API proporciona acceso a una amplia gama de información, incluyendo las características únicas de cada especie
            <br/>
            Aunque la base de datos de la Pokédex se alimenta a través de la API, he diseñado el sistema con un enfoque en la accesibilidad y la eficiencia, garantizando tiempos de carga rápidos y una navegación fluida.
        </>,
        url:'https://my-pokedexx-one.vercel.app/',
        repoGit: 'https://github.com/luisxhl7/my-pokedexx',
        technologies: [
            {
                image: images.react,
                name: 'react js'
            },
            {
                image: images.nextJs,
                name: 'NextJs'
            },
            {
                image: images.javaScript,
                name: 'javaScript'
            },
            {
                image: images.sass,
                name: 'Sass'
            },
            {
                image: images.git,
                name: 'git'
            },
            {
                image: images.github,
                name: 'github'
            },
            {
                image: images.testing_library,
                name: 'testing library'
            },
        ],
        Methodologies:['Atomic Design', 'Bem', 'Mobile first'],
        tools:['next js', 'JavaScript', 'Html', 'Css', 'Sass', 'Testing Library', 'Axios', 'Git', 'Api "PokeApi"']
    },
    {
        image: images.vista_my_budget,
        title: 'My budget',
        nameLink: 'my-budget',
        description: 'My budget es una plataforma que te permite guardar de forma local todos tus ingresos y egresos teniendo un control y estadísticas de estas.',
        url:'https://main.d5rx12jyfmutf.amplifyapp.com/',
        repoGit: 'https://github.com/luisxhl7/Presupuestos',
        extendedDescription: <>
            My Budget es una plataforma diseñada para ofrecerte un control completo y estadísticas detalladas sobre tus ingresos y gastos. Este proyecto refleja mi interés en proporcionar soluciones prácticas y eficientes para gestionar las finanzas personales.
            <br/>
            Con My Budget, puedes almacenar de forma local todos tus ingresos y egresos, lo que te brinda una visión clara y organizada de tu situación financiera. La plataforma te permite registrar fácilmente tus transacciones y categorizarlas según tus necesidades, lo que facilita el seguimiento y la gestión de tus finanzas.
        </>,
        technologies: [
            {
                image: images.react,
                name: 'react js'
            },
            {
                image: images.javaScript,
                name: 'javaScript'
            },
            {
                image: images.sass,
                name: 'Sass'
            },
            {
                image: images.git,
                name: 'git'
            },
            {
                image: images.github,
                name: 'github'
            },
            {
                image: images.testing_library,
                name: 'testing library'
            }
        ],
        Methodologies:['Atomic Design', 'Bem', 'Mobile first'],
        tools:['React js', 'JavaScript', 'Html', 'Css', 'Sass', 'Testing Library', 'Git']
    },
    {
        image: images.vista_contact_x,
        title: 'PostSphere',
        nameLink: 'postSphere',
        description: 'PostSphere es un proyecto de publicación en línea que facilita a los usuarios la creación y compartición de publicaciones breves y concisas',
        extendedDescription: <>
            PostSphere es un emocionante proyecto de publicación en línea que se centra en simplificar y facilitar la creación y compartición de publicaciones breves y concisas. Este proyecto representa mi compromiso con la creación de herramientas digitales que fomenten la expresión creativa y la interacción entre usuarios.
            <br/>
            En PostSphere, los usuarios pueden crear fácilmente publicaciones breves sobre una variedad de temas, desde actualizaciones personales hasta reflexiones profundas y noticias de última hora. La plataforma está diseñada para ser intuitiva y fácil de usar, lo que permite a los usuarios compartir sus pensamientos y experiencias de manera rápida y sencilla.
        </>,
        url:'https://main.d3f8bdovm54n3v.amplifyapp.com/home',
        repoGit: 'https://github.com/luisxhl7/postShere',
        technologies: [
            {
                image: images.react,
                name: 'react js'
            },
            {
                image: images.javaScript,
                name: 'javaScript'
            },
            {
                image: images.sass,
                name: 'Sass'
            },
            {
                image: images.git,
                name: 'git'
            },
            {
                image: images.github,
                name: 'github'
            },
            {
                image: images.testing_library,
                name: 'testing library'
            },
            {
                image: images.awsImage,
                name: 'AWS'
            },
            {
                image: images.bootstrap,
                name: 'Bootstrap'
            },
        ],
        Methodologies:['Atomic Design', 'Bem', 'Mobile first'],
        tools:['React js', 'JavaScript', 'Html', 'Css', 'Sass', 'Bootstrap', 'Testing Library', 'Axios', 'Git', 'Redux', 'MongoDb', 'serverless', 'Aws lambda', 'Api Gateway', 'Cognito' ]
    },
]

export default projectsList