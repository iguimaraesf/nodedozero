# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Feito
## Capitulo 1
## Capitulo 2
## Capitulo 3
## Capitulo 4
* Usando BrowserRouter ao invés de Router porque senão os nomes ficam muito parecidos: Router, Route, Routes
* React Router DOM v6 - Ao invés da tag Switch, usar a tag Router
* React Router DOM v6 - A sitaxe mudou para: Route path='/' element={<Home/>}
* na tag Field, o nome da propriedade autocomplete foi mudado para autoComplete
## Capitulo 5
* A rota era GET /byID/:id, mas simplifiquei para GET /:id
* Implementar useNavigate ao invés de useHistory
    import { useNavigate } from 'react-router-dom'
    ...
    let navigate = useNavigate();
    ...
    navigate('/')
## Capitulo 6
## Capitulo 7
* Estava em looping fazendo as consultas no back-end depois que a página carregou.
    FALTOU O SEGUNDO PARÂMETRO DO useEffect.
    estava:

        useEffect(() => {
            axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
            });

            axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
            });
        });

    ficou:
        useEffect(() => {
            axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
            });

            axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
            });
        }
        
        ,
        
        []);

# TODO

## Capítulo 1
- definir os tamanhos dos campos do tipo string
- definir as migrações
- definir os dados iniciais em cada ambiente
## Capítulo 2
- separar um bean para a camada web (???)
## Capítulo 3
- Na Home, com a lista de posts, ocorre este erro:
    react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
    Check the render method of `Home`. See https://reactjs.org/link/warning-keys for more information.
        at div
        at Home (http://localhost:3000/static/js/bundle.js:436:86)
        at RenderedRoute (http://localhost:3000/static/js/bundle.js:46047:5)
        at Routes (http://localhost:3000/static/js/bundle.js:46469:5)
        at Router (http://localhost:3000/static/js/bundle.js:46407:15)
        at BrowserRouter (http://localhost:3000/static/js/bundle.js:44765:5)
        at div
        at App
## Capítulo 4
- Quando se coloca acentos, dá erro.
- A validação (novo post) não ocorre na primeira chamada. Ao digitar o usuário, ocorre este erro:
Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
    at input
    at Field (http://localhost:3000/static/js/bundle.js:7125:23)
    at form
    at http://localhost:3000/static/js/bundle.js:7201:22
    at Formik (http://localhost:3000/static/js/bundle.js:6915:19)
    at div
    at CreatePost (http://localhost:3000/static/js/bundle.js:253:79)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:46047:5)
    at Routes (http://localhost:3000/static/js/bundle.js:46469:5)
    at Router (http://localhost:3000/static/js/bundle.js:46407:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:44765:5)
    at div
    at App
## Capítulo 5
## Capítulo 6
- Definir o nome dos campos de associação no estilo camel case.
## Capítulo 7
- Definir constraints na base de dados para a chave estrangeira.
- Gravou data e hora com fuso horário GMT+0.

# Aprofundar
- Modos de usar o *import*
- Qual é a diferença entre *const* e *let*?
- Atribuir valores para 2 variáveis
- Funções e classes na cláusula *export*
- Quais são as outras opções de uso do *useState*? _useState({})_ vs _useState([])_ vs _useState("")_
