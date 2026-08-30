# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/4.0.8/gradle-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/4.0.8/gradle-plugin/packaging-oci-image.html)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/4.0.8/reference/using/devtools.html)
* [Spring Web](https://docs.spring.io/spring-boot/4.0.8/reference/web/servlet.html)
* [Spring Data JPA](https://docs.spring.io/spring-boot/4.0.8/reference/data/sql.html#data.sql.jpa-and-spring-data)
* [Spring Data MongoDB](https://docs.spring.io/spring-boot/4.0.8/reference/data/nosql.html#data.nosql.mongodb)
* [Spring Reactive Web](https://docs.spring.io/spring-boot/4.0.8/reference/web/reactive.html)
* [Docker Compose Support](https://docs.spring.io/spring-boot/4.0.8/reference/features/dev-services.html#features.dev-services.docker-compose)
* [OAuth2 Authorization Server](https://docs.spring.io/spring-boot/4.0.8/reference/web/spring-security.html#web.security.oauth2.authorization-server)
* [OAuth2 Client](https://docs.spring.io/spring-boot/4.0.8/reference/web/spring-security.html#web.security.oauth2.client)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)
* [Building a Reactive RESTful Web Service](https://spring.io/guides/gs/reactive-rest-service/)

### Additional Links
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

### Docker Compose support
This project contains a Docker Compose file named `compose.yaml`.
In this file, the following services have been defined:

* mongodb: [`mongo:latest`](https://hub.docker.com/_/mongo)
* postgres: [`postgres:latest`](https://hub.docker.com/_/postgres)

Please review the tags of the used images and set them to the same as you're running in production.

