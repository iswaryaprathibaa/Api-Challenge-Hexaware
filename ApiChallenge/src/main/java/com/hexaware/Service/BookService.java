package com.hexaware.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.Entity.Book;
import com.hexaware.Exception.ResourceAlreadyExistsException;
import com.hexaware.Exception.BookNotFoundException;
import com.hexaware.Repository.BookRepo;

@Service
public class BookService {
	@Autowired
	BookRepo repo;

	

	public Book addBook(Book book) {
		        if (repo.existsById(book.getIsbn())) {
		            throw new ResourceAlreadyExistsException("Book already exists ");
		        }
		        return repo.save(book);
	}

	    public Book updateBook(int isbn, Book updatedBook) {
	    	Book existing = repo.findById(isbn).orElseThrow(() -> new BookNotFoundException("Book not found"));
	    	
	        existing.setTitle(updatedBook.getTitle());
	        existing.setAuthor(updatedBook.getAuthor());
	        existing.setPublicationyear(updatedBook.getPublicationyear());

	        return repo.save(existing);
	    }

	    public void deleteBook(int isbn) {
	        if (!repo.existsById(isbn)) {
	            throw new BookNotFoundException("Book not found ");
	        }
	        repo.deleteById(isbn);
	    }
	    
	    public List<Book> getAllBooks() {
	        return repo.findAll();
	    }

	    
	    public Book getBookByIsbn(int isbn) {
	    	 if (!repo.existsById(isbn)) {
		            throw new BookNotFoundException("Book not found ");
		        }
		       return repo.findByIsbn(isbn);
	    }

	
}
