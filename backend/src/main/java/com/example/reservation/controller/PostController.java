package com.example.reservation.controller;

import com.example.reservation.entity.Post;
import com.example.reservation.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public Iterable<Post> findSummaryList(){
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    public Post findDetailOne(@PathVariable("id") long id) {
        return postRepository.findById(id).orElse(null);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody Post post) {
        postRepository.save(post);
    }

    @PatchMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody Post post) {
        postRepository.save(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remove(@PathVariable("id") long id) {
        postRepository.deleteById(id);
    }

    @GetMapping("/test")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void test() {
        int size = postRepository.findAll().size();
        Post post = new Post();
        post.setSubject("subject"+size);
        post.setContent("content"+size);
        postRepository.save(post);
    }

}
