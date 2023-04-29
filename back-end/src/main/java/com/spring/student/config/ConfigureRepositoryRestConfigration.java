package com.spring.student.config;

import com.spring.student.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.http.HttpMethod;

@Configuration
public class ConfigureRepositoryRestConfigration implements RepositoryRestConfigurer  {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] unsupported = {HttpMethod.GET,HttpMethod.POST,HttpMethod.DELETE,HttpMethod.PUT};
        displeHttpMethod(Student.class,config,unsupported);
        config.exposeIdsFor(Student.class);
    }

    public void displeHttpMethod(Class theClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedMethod) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod));
    }
}
