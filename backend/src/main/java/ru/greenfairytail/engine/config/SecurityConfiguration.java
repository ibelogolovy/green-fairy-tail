package ru.greenfairytail.engine.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import ru.greenfairytail.engine.services.MongoUserDetailsService;

//csrf().disable(): Отключает CSRF Protection, поскольку она не нужна для API
//authorizeRequests().anyRequest().authenticated(): Декларирует, что все запросы к любой конечной точке должны быть авторизованы, иначе они должны быть отклонены.
//and().httpBasic(): сообщает Spring, чтобы он ожидал базовую HTTP аутентификацию (обсуждалось выше).
//.and().sessionManagement().disable(): сообщает Spring, что не следует хранить информацию о сеансе для пользователей, поскольку это не нужно для API

@Configuration
@EnableConfigurationProperties
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    MongoUserDetailsService userDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers( "/api").authenticated()
                .and().httpBasic()
                .and().sessionManagement().disable();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder)
            throws Exception {
        builder.userDetailsService(userDetailsService);
    }
}
