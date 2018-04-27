package com.example.reservation;

import com.example.reservation.entity.User;
import com.example.reservation.repository.UserRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.Transactional;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Bean
	@Transactional
	public InitializingBean localInitializingBean() {
		return () -> {
			User user1 = new User();
			user1.setEmail("user");
			user1.setPassword("$2a$10$KoxHNdhOe6OY88Ybq6T2d.SGp6lVfj5ynY/QwaO5SRk998TgnYayi");
			user1.setAuthorities("USER");
			user1.setEnabled(true);

			User user2 = new User();
			user2.setEmail("admin");
			user2.setPassword("$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi");
			user2.setAuthorities("ADMIN, ROOT");
			user2.setEnabled(true);

			User user3 = new User();
			user3.setEmail("expired");
			user3.setPassword("$2a$10$PZ.A0IuNG958aHnKDzILyeD9k44EOi1Ny0VlAn.ygrGcgmVcg8PRK");
			user3.setAuthorities("USER");
			user3.setEnabled(true);
			userRepository.save(user1);

		};
	}

}
