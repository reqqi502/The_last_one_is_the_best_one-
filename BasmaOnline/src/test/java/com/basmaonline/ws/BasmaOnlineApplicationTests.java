package com.basmaonline.ws;

import org.junit.jupiter.api.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.web.servlet.MockMvc;

import com.basmaonline.ws.Entity.UserEntity;
import com.basmaonline.ws.repository.UserRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.io.Console;

import org.apache.catalina.User;


@SpringBootTest
class BasmaOnlineApplicationTests {
	
	@Autowired
	private UserRepository userRepository ;
	


	@Test
	void hello() throws Exception {
		
		UserEntity userEntity = userRepository.findByUserId("W6f6vB33K8GqnE1cWgPapusgT960VBw2"); // recuperation id user
		assertThat(userEntity).isNotNull();
	
	}
	
	
	@Test
	void secondtest() {
		UserEntity userEntity = userRepository.findByUserId("Rt1ffZfHkvmKjstjS2deBGVdyVhUmzAM");
		UserEntity userUpdated = userRepository.save(userEntity);
		userEntity.setFirstName("akram");
		userEntity.setLastName("akram");
		UserEntity userUpdated1 = userRepository.save(userEntity);
		assertThat(userEntity).isNotNull();
	}

}
 