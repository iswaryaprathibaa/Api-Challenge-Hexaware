package com.hexaware.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.code.dto.AuthenticationResponse;
import com.hexaware.Entity.User;
import com.hexaware.Repository.UserRepo;
import com.hexaware.Service.UserService;
import com.hexaware.Util.JwtUtil;
import com.hexaware.dto.LoginDto;
import com.hexaware.dto.RequestDto;
import com.hexaware.dto.ResponseDto;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	UserService service;
	
	@Autowired
    private  AuthenticationManager authenticationManager;
	
	@Autowired
	UserRepo repo;
	
	@Autowired
	JwtUtil jwtutil;

	@PostMapping("/signup")
    public ResponseEntity<ResponseDto> signup( @Valid @RequestBody RequestDto dto) {

        return ResponseEntity.ok(service.signup(dto));
    }

    
	 @PostMapping("/login")
	    public ResponseEntity<ResponseDto> login(@RequestBody LoginDto logindto) {
	        try {
	            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(logindto.getEmail(),logindto.getPassword()));
	            SecurityContextHolder.getContext().setAuthentication(authentication);
	        } catch (BadCredentialsException badCredentialsException) {
	            throw new BadCredentialsException("Incorrect Email Or Password.");
	        }
	        
	        final UserDetails userDetails = service.userDetailsService().loadUserByUsername(logindto.getEmail());
	        Optional<User> optionalUser = repo.findFirstByEmail(userDetails.getUsername());
	        final String jwt = jwtutil.generateToken(userDetails);
	        
	        ResponseDto authenticationResponse = new ResponseDto();
	        if (optionalUser.isPresent()) {
	            authenticationResponse.setJwt(jwt);
	            authenticationResponse.setUserId(optionalUser.get().getId());
	            authenticationResponse.setUserRole(optionalUser.get().getUserRole());
	        }
	        return ResponseEntity.ok(authenticationResponse);
	    }
}
