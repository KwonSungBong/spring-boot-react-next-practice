package com.example.reservation.service;

import com.example.reservation.entity.Post;
import com.example.reservation.repository.PostRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostServiceTests {

	@Autowired
	private PostRepository postRepository;

	@Test
	public void contextLoads() {
		Post post = new Post();
		post.setSubject("subject0");
		post.setSubject("content0");
		postRepository.save(post);
	}

}
