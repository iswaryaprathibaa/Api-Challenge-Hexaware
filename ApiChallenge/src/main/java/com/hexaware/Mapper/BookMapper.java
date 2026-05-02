package com.hexaware.Mapper;

import com.hexaware.Entity.Book;
import com.hexaware.dto.BookDto;

public class BookMapper {
    public static BookDto toDto(Book book) {
        if (book == null) return null;

        return new BookDto(book.getIsbn(),book.getTitle(),book.getAuthor(),book.getPublicationyear());
    }

    public static Book toEntity(BookDto dto) {
        if (dto == null) return null;

        return new Book(dto.getIsbn(),dto.getTitle(),dto.getAuthor(),dto.getPublicationYear());
    }
}
