package com.hexaware.dto;

import com.hexaware.Entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ResponseDto {
	private String jwt;
    private UserRole userRole;
    private int userId;
}
