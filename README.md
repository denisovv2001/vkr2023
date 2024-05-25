# vkr2023
Выпускные квалификационные работы ФИПМ ПСТГУ набора 2023
## Разработка интерфейса поиска по базе данных "За Христа пострадавшие" через приложение социальной сети "Вконтакте"
Проект позволит подключать в группы Вконтакте виджет, который будет отображать данные о новомученниках, день памяти которых отмечается сегодня.
Проект находится в разработки. 

### Содержание
- [Технологии](#технологии)
- [Использование](#использование)
- [Требования](#требования)
- [Тестирование](#тестирование)
- [FAQ](#faq)
- [To do](#to-do)

### Технологии
- [JavaScript](https://nodejs.org/en)
- [HTML](https://htmlbook.ru/samhtml)
- [CSS](https://htmlbook.ru/samcss)

### Использование
Установите пакет [create-vk-mini-app](https://dev.vk.com/ru/mini-apps/getting-started/create-vk-mini-app)
```cmd
npm init  @vkontakte/vk-mini-app@latest
```
Установите npm-пакет VK Bridge для взаимодействия с приложением Вконтакте с помощью команды (открываем cmd в папке, где будет Ваш проект):
```cmd
npm install @vkontakte/vk-bridge 
```
Установите npm-пакет tunnel
```cmd
npm install @vkontakte/vk-tunnel --include=dev
```
Установите библиотеку vk-miniapps-deploy для автономной работы приложения на хостинге Вконтакте
```cmd
npm install @vkontakte/vk-miniapps-deploy --include=dev
```

### Разработка

#### Требования
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v16.x.x

#### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

#### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm start
```

#### Создание билда
Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build
```

### Тестирование
Какие инструменты тестирования использованы в проекте и как их запускать. Например:

Наш проект покрыт юнит-тестами Jest. Для их запуска выполните команду:
```sh
npm run test
```

### Deploy и CI/CD
Расскажите, как развернуть приложение. Как запустить пайплайны и т.д.

### Contributing
Как помочь в разработке проекта? Как отправить предложение или баг-репорт. Как отправить доработку (оформить pull request, какие стайлгайды используются). Можно вынести в отдельный файл — [Contributing.md](./CONTRIBUTING.md).

### FAQ 
Если потребители вашего кода часто задают одни и те же вопросы, добавьте ответы на них в этом разделе.

#### Ошибка в дереве зависимостей при выполнении команды npm run deploy
Может возникнуть ошибка при сборке.
```sh
npm run deploy
```
Для решения проблемы сдедует выполнить рекомендации, которые будут выведены здесь же в cmd
```cmd
Microsoft Windows [Version 10.0.19045.4046]
(c) Корпорация Майкрософт (Microsoft Corporation). Все права защищены.

C:\Users\girln\Documents\devel\db_za_hrista>npm run deploy

> mini-app@0.0.0 predeploy
> npm run build


> mini-app@0.0.0 build
> react-scripts build


There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "babel-eslint": "10.0.1"

Don't try to install it manually: your package manager does it automatically.
However, a different version of babel-eslint was detected higher up in the tree:

  C:\Users\girln\Documents\devel\db_za_hrista\node_modules\babel-eslint (version: 10.1.0)

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "babel-eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if C:\Users\girln\Documents\devel\db_za_hrista\node_modules\babel-eslint is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls babel-eslint in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed babel-eslint.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!


C:\Users\girln\Documents\devel\db_za_hrista>npm install
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

added 258 packages, and audited 259 packages in 4m

14 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.

C:\Users\girln\Documents\devel\db_za_hrista>npm run deploy

> mini-app@0.0.0 predeploy
> npm run build


> mini-app@0.0.0 build
> react-scripts build

"react-scripts" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.

C:\Users\girln\Documents\devel\db_za_hrista>npm install react-scripts --save
npm WARN deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
npm WARN deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
npm WARN deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-methods instead.
npm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm WARN deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
npm WARN deprecated domexception@2.0.1: Use your platform's native DOMException instead
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
npm WARN deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

added 1435 packages, and audited 1694 packages in 28m

259 packages are looking for funding
  run `npm fund` for details

11 vulnerabilities (5 moderate, 6 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.

C:\Users\girln\Documents\devel\db_za_hrista>npm run deploy

> mini-app@0.0.0 predeploy
> npm run build


> mini-app@0.0.0 build
> react-scripts build

Creating an optimized production build...
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

Compiled successfully.

File sizes after gzip:

  76.41 kB  build\static\js\main.087f4950.js
  35.44 kB  build\static\css\main.d9e0529b.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment


> mini-app@0.0.0 deploy
> vk-miniapps-deploy

√ Would you like to deploy to VK Mini Apps hosting using these commands? ... yes
Try to retrieve access token...
√ Please open this url in browser https://oauth.vk.com/code_auth?stage=check&code=90ab692 ... yes
Token is saved in config store!

For your CI, you can use
 > $ env MINI_APPS_ACCESS_TOKEN=vk1.a.-hinIeOc5QWv6x7PCP7JeigadxAYoynAf076Lc5rhsZGlhZ263mTx38IXQ-TlQ_PrTXAaErHqwN5zeUZ5ctCMFd7Q7UbRnGaiq4qUzvj_aF4E44oTTuEgafoLPAvkjiSkaEXKFdLxFqHlRbvdMN4hWLtF2jQlef5Ej_D5UMtcA405fUjVavi7y8DCCStiw9dm3Z2GfxsYYGJyZn7WKgGEw yarn deploy
Uploaded version 1708378109!
Deploy success...
URLs changed for dev:
vk.com: https://stage-app51842130-f16ffffc92ec.pages.vk-apps.com/index.html
iOS & Android:  https://stage-app51842130-f16ffffc92ec.pages.vk-apps.com/index.html
m.vk.com:       https://stage-app51842130-f16ffffc92ec.pages.vk-apps.com/index.html
Please, confirm deploy on your phone.
√ Please, enter code from Administration:  ... 7021492
Deploy confirmed successfully.
URLs changed for production:
vk.com: https://prod-app51842130-f16ffffc92ec.pages-ac.vk-apps.com/index.html
iOS & Android:  https://prod-app51842130-f16ffffc92ec.pages-ac.vk-apps.com/index.html
m.vk.com:       https://prod-app51842130-f16ffffc92ec.pages-ac.vk-apps.com/index.html

C:\Users\girln\Documents\devel\db_za_hrista>
```
#### Как создать мини-приложение самому?
1. Регистрация приложения
Для начала нужно зарегистрировать приложение и узнать его идентификатор. Побробнее можно ознакомиться [Регистрация мини-приложения Вконтакте](https://dev.vk.com/ru/mini-apps/getting-started#%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BC%D0%B8%D0%BD%D0%B8-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5).
2. Выбор папки
Выбираем папку на диске, где будет создаваться проект мини-приложения.
3. Создание мини-приложения
За основу можно взять проект create-vk-mini-app. Для запуска нужно открыть cmd в нужной папке и создать проект командой
```cmd
npm init @vkontakte/vk-mini-app [имя-папки] -- [параметры]
```
в качестве имени папки можно указать своё, если этого не сделать, по умолчанию будет создана папка проекта mini-app.
Запустим приложение локально на компьютере. Для этого нужно перейти в созданную папку проекта приложения и ввести команду npm run start в cmd. При нормальной работе в cmd отобразится ссылка,
```cmd
https://localhost:10888
```
которую можно будет открыть в браузере. 
Для запуска приложения внутри Вконтакте нужно
Перейти в папку проекта в cmd, и установить VK Tunnel командой 
```cmd
npm install @vkontakte/vk-tunnel --include=dev
```
Затем добавить в файл package.json строчку 
```json
"tunnel": "vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=0.0.0.0 --port=10888" 
```
в scripts и сохраняем файл.
Теперь можно запускать VK Tunnel в cmd командной 
```cmd
npm run tunnel
```
4. Переходим в папку с проектом
5. В файле vk-hosting-config.json в поле app_id заменить 0 на идентификатор мини-приложения.
Идентификатор можно найти на странице вашего [приложения](https://vk.com/apps?act=manage) далее нажимаем редактировать. Попадаем на страницу нашего приложения, нажимаем на пункт меню настройки. Тут находим поле ID приложения – это и будет идентификатор вашего приложения.
6. Автономная работа приложения
Установить библиотеку vk-miniapps-deploy для автономной работы приложения на хостинге Вконтакте. 
Снова переходим в каталог проекта, открываем тут cmd и устанавливаем библиотеку командой 
```cmd
npm install @vkontakte/vk-miniapps-deploy --include=dev
```
7. Развернуть мини-приложение
Воспользуемся командой 
```cmd
npm run deploy
```
в cmd. В командной строке получим ссылку для размещения на хостинге. Открыть ссылку vk.com/app<ID> в браузере для того чтоб увидеть работу мини-приложения.

#### Зачем вы разработали этот проект?
Чтобы был.

### To do
- [x] Добавить крутое README
- [x] Запустить тестовое приложение внутри ВК
- [x] Отобразить числа от 1 до 10 в браузере при помощи JS
- [x] Вывести из БД нужную информацию в консоль
- [x] Вывести информацию в браузере
- [x] Интегрировать информацию внуть ВК
- [ ] Переписать README ### Тестирование ### Deploy и CI/CD ### Contributing #### Установка зависимостей #### Запуск Development сервера
- [ ] Вывести информацию сразу на страницу, не прибегая в home_page.html
- [ ] Добавить икону новомучеников на начальную страницу
- [ ] Добавить выравнивание по высоте
- [ ] Интегрировать внутрь ВК
- [ ] Сделать приложение общедоступным
- [ ] Интегрировать виджет в группу
- [ ] ...
