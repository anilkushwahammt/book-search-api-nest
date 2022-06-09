## Book-search API Nest

1. Design a Rest API backend on Nest Js framework.

## Nest Js Project Setup Steps:

###### Step - 1  Install nest js cli

```
npm i -g @nestjs/cli
```

###### Step - 2  Create nest js project 

```
nest new book-search-api-nest
```

```
⚡  We will scaffold your app in a few seconds..

CREATE book-search-api-nest/.eslintrc.js (665 bytes)
CREATE book-search-api-nest/.prettierrc (51 bytes)
CREATE book-search-api-nest/README.md (3340 bytes)
CREATE book-search-api-nest/nest-cli.json (118 bytes)
CREATE book-search-api-nest/package.json (2005 bytes)
CREATE book-search-api-nest/tsconfig.build.json (97 bytes)
CREATE book-search-api-nest/tsconfig.json (546 bytes)
CREATE book-search-api-nest/src/app.controller.spec.ts (617 bytes)
CREATE book-search-api-nest/src/app.controller.ts (274 bytes)
CREATE book-search-api-nest/src/app.module.ts (249 bytes)
CREATE book-search-api-nest/src/app.service.ts (142 bytes)
CREATE book-search-api-nest/src/main.ts (208 bytes)
CREATE book-search-api-nest/test/app.e2e-spec.ts (630 bytes)
CREATE book-search-api-nest/test/jest-e2e.json (183 bytes)

? Which package manager would you ❤️  to use? npm
▹▹▹▹▹ Installation in progress... ☕
```

###### Step - 3  Run the Project

```
cd book-search-api-nest
npm run start
```

```
npm run start

> book-search-api-nest@0.0.1 start
> nest start

[Nest] 37219  - 06/09/2022, 1:10:14 PM     LOG [NestFactory] Starting Nest application...
[Nest] 37219  - 06/09/2022, 1:10:14 PM     LOG [InstanceLoader] AppModule dependencies initialized +23ms
[Nest] 37219  - 06/09/2022, 1:10:14 PM     LOG [RoutesResolver] AppController {/}: +5ms
[Nest] 37219  - 06/09/2022, 1:10:14 PM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 37219  - 06/09/2022, 1:10:14 PM     LOG [NestApplication] Nest application successfully started +1ms
```

###### Step - 4  View in browser

```
http://localhost:3000/
```

###### Step - 5  Generate Book Module

```
$nest generate module book
CREATE src/book/book.module.ts (81 bytes)
UPDATE src/app.module.ts (308 bytes)
```

###### Step -6  Generate Book Controller

```
$nest generate controller /book/controller
CREATE src/book/controller/controller.controller.spec.ts (520 bytes)
CREATE src/book/controller/controller.controller.ts (109 bytes)
UPDATE src/book/book.module.ts (195 bytes)
```

###### Step - 7  Generate Book Service

```
$nest generate service /book
CREATE src/book/book.service.spec.ts (446 bytes)
CREATE src/book/book.service.ts (88 bytes)
UPDATE src/book/book.module.ts (240 bytes)
```

## Running Project

```
npm run start
```

http://localhost:3000/book/search
