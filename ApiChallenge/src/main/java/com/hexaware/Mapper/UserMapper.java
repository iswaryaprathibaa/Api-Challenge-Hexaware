package com.hexaware.Mapper;

import com.hexaware.Entity.User;
import com.hexaware.dto.RequestDto;
import com.hexaware.dto.ResponseDto;

public class UserMapper {
	  public static User toEntity(RequestDto dto) {
	        User user = new User();

	        user.setName(dto.getName());
	        user.setEmail(dto.getEmail());
	        user.setPassword(dto.getPassword()); 
	        user.setUserRole(dto.getUserRole());

	        return user;
	    }

	  public static ResponseDto toDto(User user) {
		    ResponseDto dto = new ResponseDto();

		    dto.setUserId(user.getId());
		    dto.setUserRole(user.getUserRole());

		    return dto;
		}
}
