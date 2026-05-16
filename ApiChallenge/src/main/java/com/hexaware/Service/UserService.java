package com.hexaware.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexaware.Entity.User;
import com.hexaware.Exception.ResourceAlreadyExistsException;
import com.hexaware.Mapper.UserMapper;
import com.hexaware.Repository.UserRepo;
import com.hexaware.dto.RequestDto;
import com.hexaware.dto.ResponseDto;

@Service
public class UserService {
	@Autowired
	UserRepo repo;
	
	 
	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ResponseDto signup(RequestDto dto) {

        if (repo.findByEmail(dto.getEmail()).isPresent()) {
            throw new ResourceAlreadyExistsException("User already exists with this email");
        }

        User user = UserMapper.toEntity(dto);

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = repo.save(user);

        return UserMapper.toDto(savedUser);
    }

    public ResponseDto login(String email, String password) {

        User user = repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return UserMapper.toDto(user);
    }
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
          
            public UserDetails loadUserByUsername(String username) {
                return repo.findFirstByEmail(username).orElseThrow(() -> new RuntimeException
                		("User not found"));
            }
        };
    }
}
