package com.hexaware.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.Entity.Book;

public interface BookRepo extends JpaRepository<Book,Integer> {

	

	Book findByIsbn(int isbn);

}
