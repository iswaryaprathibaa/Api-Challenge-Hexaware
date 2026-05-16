package com.hexaware.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {
	@Id
	private int isbn;
	@Column(nullable=false)
	private String title;
	@Column(nullable=false)
	private String author;
	@Column(nullable=false)
	private int publicationyear;
}
