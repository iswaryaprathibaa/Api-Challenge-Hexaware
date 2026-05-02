package com.hexaware.Controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.Entity.Book;
import com.hexaware.Mapper.BookMapper;
import com.hexaware.Response.ApiResponse;
import com.hexaware.Service.BookService;
import com.hexaware.dto.BookDto;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
public class BookController {
	@Autowired
	BookService bookservice;
	
	 @PostMapping("/addBook")
	 public ResponseEntity<ApiResponse<BookDto>> createBook(@Valid @RequestBody BookDto bookdto) {
	        Book savedBook = bookservice.addBook(BookMapper.toEntity(bookdto));
	        ApiResponse<BookDto> response=new ApiResponse<>("Book added successfully!",HttpStatus.CREATED.value(),BookMapper.toDto(savedBook));
	        return new ResponseEntity<>(response, HttpStatus.CREATED);
	    }
	 @PutMapping("/update/{isbn}")
	 public ResponseEntity<ApiResponse<BookDto>> updateBook( @PathVariable int isbn, @Valid @RequestBody BookDto bookdto) {

	        Book updatedBook = bookservice.updateBook(isbn, BookMapper.toEntity(bookdto));
	        ApiResponse<BookDto> response=new ApiResponse<>("Book updated successfully!",HttpStatus.OK.value(),BookMapper.toDto(updatedBook));
	        return ResponseEntity.ok(response);
	    }

	  
	    @DeleteMapping("/delete/{isbn}")
	    public ResponseEntity<ApiResponse<String>> deleteBook(@PathVariable int isbn) {

	        bookservice.deleteBook(isbn);
	        ApiResponse<String> response=new ApiResponse<>("Book deleted successfully!",HttpStatus.OK.value(),null);
	        return ResponseEntity.ok(response);
	    }
	   
	    @GetMapping("/showAllBooks")
	    public ResponseEntity<ApiResponse<List<BookDto>>> getAllBooks() {

	    	List<BookDto> books = bookservice.getAllBooks().stream().map(BookMapper::toDto).collect(Collectors.toList());
	        ApiResponse<List<BookDto>> response = new ApiResponse<>("Books fetched successfully", HttpStatus.OK.value(), books);
	        return ResponseEntity.ok(response);
	    }

	    @GetMapping("/showById/{isbn}")
	    public ResponseEntity<ApiResponse<BookDto>> getBook(@PathVariable int isbn) {

	        Book book = bookservice.getBookByIsbn(isbn);

	        ApiResponse<BookDto> response =new ApiResponse<>("Book fetched successfully", HttpStatus.OK.value(),BookMapper.toDto(book));
	        return ResponseEntity.ok(response);
	    }

	 
}
