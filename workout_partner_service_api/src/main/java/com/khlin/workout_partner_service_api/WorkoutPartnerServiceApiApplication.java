package com.khlin.workout_partner_service_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class WorkoutPartnerServiceApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkoutPartnerServiceApiApplication.class, args);
	}

}
